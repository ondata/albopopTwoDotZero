---
title: "Faq"
draft: false
type: "page"
menu:
    secondary:
        weight: -140
---

<!-- TOC -->

- [Cosa è un Albo Pretorio?](#cosa-%C3%A8-un-albo-pretorio)
- [Cosa è un Albo Pretorio POP?](#cosa-%C3%A8-un-albo-pretorio-pop)
- [Cosa è un feed RSS?](#cosa-%C3%A8-un-feed-rss)
- [Come posso usare un feed RSS per seguire l'AlboPOP della mia pubblica amministrazione?](#come-posso-usare-un-feed-rss-per-seguire-lalbopop-della-mia-pubblica-amministrazione)
- [Come creo un AlboPOP?](#come-creo-un-albopop)
- [Come aggiungo un AlboPOP sul sito?](#come-aggiungo-un-albopop-sul-sito)
    - [Compilando questo form](#compilando-questo-form)
    - [Facendo una Pull Request su GitHub](#facendo-una-pull-request-su-github)

<!-- /TOC -->

## Cosa è un Albo Pretorio?

Gli [Albi Pretori](https://it.wikipedia.org/wiki/Albo_pretorio) sono delle **pagine web** in cui le **pubbliche amministrazioni** italiane **devono pubblicare**, a norma di legge, una determinata serie di informazioni e documenti. All'interno, ad esempio, si trovano: **avvisi pubblici**, **bandi di concorso**, **determine dirigenziali**, **avvisi ed esiti di gare**, notifiche, **ordinanze del sindaco**, **pubblicazioni di matrimonio**. Si tratta di elementi molto utili a chi vuole vivere il proprio territorio in modo consapevole e attivo. 

## Cosa è un Albo Pretorio POP?

È un **Albo Pretorio** che ti **consente di essere informato** su quanto pubblicato **attraverso molte modalità, anche automatiche**. Ad esempio i dati forniti da un **AlboPOP** possono essere pubblicati su di una **pagina Facebook**, su un **canale Telegram** o puoi ricevere un'**email** che ti informa che è stato pubblicato in Albo un documento che contiene nel titolo una determinata **parola chiave**, come ad esempio "matrimonio".

## Cosa è un feed RSS?

Un [feed rss](https://it.wikipedia.org/wiki/RSS) è uno speciale **formato di pubblicazione di informazioni** pensato per essere "letto" da un software. È un formato standard, cioè supportato da moltissime applicazioni e che **può alimentare in maniera automatica** la ridistribuzione di informazioni verso **pagine Facebook**, **canali Telegram** e **servizi di notifica automatica via email**.

## Come posso usare un feed RSS per seguire l'AlboPOP della mia pubblica amministrazione?

Puoi cercare sul web una delle numerose guide che permettono di [**alimentare un canale Telegram con un feed rss**](https://www.google.it/search?q=alimentare+un+canale+Telegram+con+un+feed+rss&source=lnt&tbs=qdr:y&sa=X&ved=0ahUKEwi--JflmKTfAhXF2aQKHS9bBZsQpwUIJQ&biw=1920&bih=1120), oppure [**come alimentare una pagina Facebook con un feed rss**](https://www.google.it/search?biw=1920&bih=1120&tbs=qdr%3Ay&ei=SDAWXLOlK5D4kwW1qbOIDw&q=pagina+Facebook+da+un+feed+rss&oq=pagina+Facebook+da+un+feed+rss&gs_l=psy-ab.12...5235.8157..10085...0.0..0.145.407.0j3......0....1..gws-wiz.urp9zsEKu1c) o anche come ricevere via email [**un riepilogo giornaliero delle notizie pubblicate**](https://www.google.it/search?biw=1920&bih=1120&tbs=qdr%3Ay&ei=fjAWXIf0CM6SsAeTy6WwAQ&q=ifttt+rss+to+email+digest&oq=ifttt+rss+email&gs_l=psy-ab.1.2.0i203j0i22i30l3.63727.71497..74036...0.0..0.158.2030.0j15....2..0....1..gws-wiz.......0j35i39j0i131j0i67j0i20i263.nHHlT9TaaZA). Naturalmente [**la cosa più semplice è usare un lettore di feed rss**](https://www.google.it/search?biw=1920&bih=1120&tbs=qdr%3Ay&ei=yDAWXP7ONobhkgXT1bC4CA&q=lettore+feed+rss&oq=lettore+feed+rss&gs_l=psy-ab.3..0l3j0i22i30l3.103170.107036..107420...0.0..0.157.2154.0j16....2..0....1..gws-wiz.......35i39j0i131j0i67j0i131i67j0i20i263.NRS7xIFc3vs) :)


## Come creo un AlboPOP?

Per creare un AlboPOP devi **scrivere un software** che **legga le pagine web dell'Albo Pretorio** che ti interessa e le **traduca** in un **feed rss**. Devi avere alcune nozioni base di programmazione ma puoi chiedere un supporto alla comunità **INSERIRE UN RIFERIMENTO**. Se sei già capace di programmare qui **INSERIRE UN RIFERIMENTO** trovi le **specifiche** che deve avere un **feed rss** per essere **conforme allo schema dati di AlboPOP**.

## Come aggiungo un AlboPOP sul sito?

Lo puoi fare in uno dei **modi seguenti** 

### Compilando questo form

Compila questo **form** [http://bit.ly/nuovoalbopop](http://bit.ly/nuovoalbopop), inserendo il maggior numero di informazioni possibili. Una volta fatto, faremo una verifica e l'inseriremo online.

### Facendo una Pull Request su GitHub

Se sai usare **GitHub**, la cosa più semplice è partire ad esempio da [uno dei comuni esistenti](https://github.com/ondata/albopopTwoDotZero/tree/develop/content/comune) nel repository, usarlo come modello, e fare una **pull request** con la creazione di un nuovo file con i dati del nuovo albo.