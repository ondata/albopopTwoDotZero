---
title: "Faq"
draft: false
type: "page"
menu:
    secondary:
        weight: -140
---

<!-- TOC -->

- [Cosa è un Albo Pretorio?](#cosa-è-un-albo-pretorio)
- [Cosa è un Albo Pretorio POP?](#cosa-è-un-albo-pretorio-pop)
- [Cosa è un feed RSS?](#cosa-è-un-feed-rss)
- [Come posso usare un feed RSS per seguire un AlboPOP?](#come-posso-usare-un-feed-rss-per-seguire-un-albopop)
- [Come creo un AlboPOP?](#come-creo-un-albopop)
- [Come aggiungo un AlboPOP sul sito?](#come-aggiungo-un-albopop-sul-sito)
    - [Compilando questo form](#compilando-questo-form)
    - [Facendo una Pull Request su GitHub](#facendo-una-pull-request-su-github)
- [Cosa è un AlboPOP "ufficiale"?](#cosa-è-un-albopop-ufficiale)

<!-- /TOC -->

## Cosa è un Albo Pretorio?

Gli [Albi Pretori](https://it.wikipedia.org/wiki/Albo_pretorio) sono delle **pagine web** in cui le **pubbliche amministrazioni** italiane **devono pubblicare**, a norma di legge, una determinata serie di informazioni e documenti. All'interno, ad esempio, si trovano: **avvisi pubblici**, **bandi di concorso**, **determine dirigenziali**, **avvisi ed esiti di gare**, notifiche, **ordinanze del sindaco**, **pubblicazioni di matrimonio**. Si tratta di elementi molto utili a chi vuole vivere il proprio territorio in modo consapevole e attivo. 

## Cosa è un Albo Pretorio POP?

È un Albo Pretorio che puoi seguire in modalità semplice e diversa: non sarai tu a leggerlo, ma **sarà lui a scriverti** 😉

Per farlo basta che gli atti siano pubblicati anche come **Feed RSS**: a quel punto potrai iscriverti in uno dei tanti modi possibili.

Ad esempio i dati forniti da un **AlboPOP** possono essere pubblicati su una **pagina Facebook**, su un **canale Telegram** o puoi ricevere un'**email** che ti informa che è stato pubblicato in Albo un documento che contiene nel titolo una determinata **parola chiave**, come ad esempio "matrimonio".

## Cosa è un feed RSS?

<img src="/images/FeedRSS.svg" width="32" height="32"> Hai presente quest'immagine arancione che da quasi 20 anni vedi su moltissimi siti web? È l'icona dei feed RSS (`Really Simple Syndication`), una delle **modalità** più diffuse e **_standard_** di **pubblicazione** di **contenuti** sul web (puoi approfondire su [Wikipedia](https://it.wikipedia.org/wiki/RSS)).

Abbiamo scelto questa modalità di pubblicazione proprio perché esiste da tanto tempo, perché è molto diffusa e _standard_ e di conseguenza esistono **decine di modi per usufruirne**; per tutti i tipi di utenti e per ogni dispositivo di lettura.

## Come posso usare un feed RSS per seguire un AlboPOP?

Puoi cercare sul web una delle numerose guide che permettono di [**alimentare un canale Telegram con un feed rss**](https://www.google.it/search?q=alimentare+un+canale+Telegram+con+un+feed+rss&source=lnt&tbs=qdr:y&sa=X&ved=0ahUKEwi--JflmKTfAhXF2aQKHS9bBZsQpwUIJQ&biw=1920&bih=1120), oppure [**come alimentare una pagina Facebook con un feed rss**](https://www.google.it/search?biw=1920&bih=1120&tbs=qdr%3Ay&ei=SDAWXLOlK5D4kwW1qbOIDw&q=pagina+Facebook+da+un+feed+rss&oq=pagina+Facebook+da+un+feed+rss&gs_l=psy-ab.12...5235.8157..10085...0.0..0.145.407.0j3......0....1..gws-wiz.urp9zsEKu1c) o anche come ricevere via email [**un riepilogo giornaliero delle notizie pubblicate**](https://www.google.it/search?biw=1920&bih=1120&tbs=qdr%3Ay&ei=fjAWXIf0CM6SsAeTy6WwAQ&q=ifttt+rss+to+email+digest&oq=ifttt+rss+email&gs_l=psy-ab.1.2.0i203j0i22i30l3.63727.71497..74036...0.0..0.158.2030.0j15....2..0....1..gws-wiz.......0j35i39j0i131j0i67j0i20i263.nHHlT9TaaZA). Naturalmente [**la cosa più semplice è usare un lettore di feed rss**](https://www.google.it/search?biw=1920&bih=1120&tbs=qdr%3Ay&ei=yDAWXP7ONobhkgXT1bC4CA&q=lettore+feed+rss&oq=lettore+feed+rss&gs_l=psy-ab.3..0l3j0i22i30l3.103170.107036..107420...0.0..0.157.2154.0j16....2..0....1..gws-wiz.......35i39j0i131j0i67j0i131i67j0i20i263.NRS7xIFc3vs) :)


## Come creo un AlboPOP?

Per creare un AlboPOP devi **scrivere un software** che **legga le pagine web dell'Albo Pretorio** che ti interessa e le **traduca** in un **feed RSS**. Devi avere alcune nozioni base di programmazione o potresti avere supporto dalla comunità tramite [in uno di questi spazi di progetto](/discuti). 

Per AlboPOP [Alessio Cimarelli](https://twitter.com/jenkin27) e [Giovanni Pirrotta](https://twitter.com/gpirrotta) hanno creato delle **specifiche** RSS **dedicate**: se quando crei il feed, le rispetti, fai il massimo, perché non soltanto hai creato la base per una modalità di fruizione più semplice, ma soprattutto hai **arricchito** di **informazioni** e dato **struttura** a informazioni che ne erano prive.

Guarda ad esempio le informazioni - previste dallo schema - del feed del comune di Accumoli:

```XML
<category domain="http://albopop.it/specs/#channel-category-region">Lazio</category>
<category domain="http://albopop.it/specs/#channel-category-municipality">Accumoli</category>
<category domain="http://albopop.it/specs/#channel-category-name">Accumoli</category>
<category domain="http://albopop.it/specs/#channel-category-uid">istat:057001</category>
<category domain="http://albopop.it/specs/#channel-category-province">Rieti</category>
<category domain="http://albopop.it/specs/#channel-category-longitude">13.247683</category>
<category domain="http://albopop.it/specs/#channel-category-type">Comune</category>
<category domain="http://albopop.it/specs/#channel-category-country">Italia</category>
<category domain="http://albopop.it/specs/#channel-category-latitude">42.694141</category>
```

## Come aggiungo un AlboPOP sul sito?

Lo puoi fare in uno dei **modi seguenti**

### Compilando questo form

Compila questo **form** [http://bit.ly/nuovoalbopop](http://bit.ly/nuovoalbopop), inserendo il maggior numero di informazioni possibili. Una volta fatto, faremo una verifica e l'inseriremo online.

### Facendo una Pull Request su GitHub

Se sai usare GitHub, la cosa più semplice è partire ad esempio da [uno dei comuni esistenti](https://github.com/ondata/albopopTwoDotZero/tree/develop/content/comune) nel repository, usarlo come modello, e fare un PR con la creazione di un nuovo file con i dati del nuovo albo.

## Cosa è un AlboPOP "ufficiale"?

È l'albo di una Pubblica Amministrazione che ha prodotto al suo interno una delibera, un atto pubblico, ecc. in cui da notizia dell'adozione di questa modalità di pubblicazione. <br>Sono [ufficialmente POP](/ufficiale) ad esempio i Comuni di **Messina**, **Patti** (Messina), **San Giuseppe Jato** (Palermo) e **Cori** (Latina).

Se lavori dentro la PA e vuoi farlo anche tu puoi prendere spunto da una delle delibere che trovi nelle pagine di questi comuni.
Se sai usare **GitHub**, la cosa più semplice è partire ad esempio da [uno dei comuni esistenti](https://github.com/ondata/albopopTwoDotZero/tree/develop/content/comune) nel repository, usarlo come modello, e fare una **pull request** con la creazione di un nuovo file con i dati del nuovo albo.
