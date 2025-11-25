---
title: Pavia
tags: []
original: https://pavia.trasparenza-valutazione-merito.it/web/trasparenza/albo-pretorio
rss: https://politepol.com/fd/cgDyyS2NC0Fa.xml
twitter: 
facebook: 
telegram: 
pdf: 
author: "[Federico Simonetta](https://federicosimonetta.eu.org)"
repo: 
regione: Lombardia
provincia: Pavia
istat: 018110
ipa: c_g388 
lat: 45.19205
lng: 9.15917
image: c_g388.gif
accessible: false
standard: true
official: false
---

Script usato su workers.dev per elencare un numero arbitrario di righe. Questo script può essere utilizzato facilmente per tutte le PA che usano il software proprietario. 
Tecnicamente, potrebbe essere adattato per generare direttamente l'RSS, ma qui ho usato politepol per semplicità. 
Politepol permette anche facilmente di filtrare i contenuti in base a parole chiave di interesse.

```javascript
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const getUrl = 'https://pavia.trasparenza-valutazione-merito.it/web/trasparenza/papca-ap/-/papca/igrid/586861/2999';
    const postUrl = 'https://pavia.trasparenza-valutazione-merito.it/web/trasparenza/papca-ap?p_p_id=jcitygovalbopubblicazioni_WAR_jcitygovalbiportlet&p_p_lifecycle=1&p_p_state=exclusive&p_p_mode=view&_jcitygovalbopubblicazioni_WAR_jcitygovalbiportlet_action=eseguiPaginazione';
    const targetDomain = 'https://pavia.trasparenza-valutazione-merito.it';
    const userAgent = 'Mozilla/5.0 (X11; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0';

    try {
      // Gestione file statici
      if (url.pathname !== '/' && (
        url.pathname.includes('.js') || 
        url.pathname.includes('.css') || 
        url.pathname.includes('.jpg') || 
        url.pathname.includes('.png') || 
        url.pathname.includes('.gif') ||
        url.pathname.includes('.woff') ||
        url.pathname.includes('.woff2') ||
        url.pathname.includes('.ttf') ||
        url.pathname.includes('.svg')
      )) {
        const proxyUrl = new URL(url.pathname + url.search, targetDomain);
        return fetch(proxyUrl.toString(), {
          method: request.method,
          headers: {
            'User-Agent': userAgent
          }
        });
      }

      const limit = url.searchParams.get('limit') || '50';

      // FASE 1: GET per ottenere i cookie
      const initialResponse = await fetch(getUrl, {
        method: 'GET',
        headers: {
          'User-Agent': userAgent,
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'it,en-US;q=0.7,en;q=0.3',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Sec-GPC': '1',
          'Connection': 'keep-alive',
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'document',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'none',
          'Sec-Fetch-User': '?1',
          'Priority': 'u=0, i'
        }
      });

      // Estrazione cookie
      const cookieHeaders = initialResponse.headers.getSetCookie ? 
        initialResponse.headers.getSetCookie() : 
        [initialResponse.headers.get('Set-Cookie')];
      
      const cookies = cookieHeaders
        .filter(Boolean)
        .map(cookie => cookie.split(';')[0].trim())
        .join('; ');

      console.log('Cookies ricevuti:', cookies);

      if (!cookies) {
        return new Response(
          JSON.stringify({ error: 'Nessun cookie di sessione ricevuto' }),
          { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
      }

      // FASE 2: POST con i parametri corretti
      const formData = new URLSearchParams();
      formData.append('hidden_page_size', limit);
      formData.append('hidden_page_to', '');

      const postResponse = await fetch(postUrl, {
        method: 'POST',
        body: formData.toString(),
        headers: {
          'User-Agent': userAgent,
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'it,en-US;q=0.7,en;q=0.3',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Origin': 'null',
          'Cookie': cookies,
          'Sec-GPC': '1',
          'Connection': 'keep-alive',
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'document',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Fetch-User': '?1',
          'Priority': 'u=0, i'
        }
      });

      console.log('POST Response Status:', postResponse.status);

      const contentType = postResponse.headers.get('Content-Type') || 'text/html; charset=utf-8';
      let body = await postResponse.text();
      
      if (contentType.includes('text/html')) {
        body = body
          .replace(/href="\/(?!\/)/g, `href="${targetDomain}/`)
          .replace(/src="\/(?!\/)/g, `src="${targetDomain}/`)
          .replace(/data-url="\/(?!\/)/g, `data-url="${targetDomain}/`)
          .replace(/action="\/(?!\/)/g, `action="${targetDomain}/`);
      }

      return new Response(body, {
        status: postResponse.status,
        headers: {
          'Content-Type': contentType,
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-cache'
        }
      });

    } catch (error) {
      console.error('Errore:', error.message);
      return new Response(
        JSON.stringify({ 
          error: 'Errore nella richiesta',
          details: error.message 
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  }
};
```
