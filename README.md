<!-- TOC -->

- [garagealbopop](#garagealbopop)
    - [hugo](#hugo)
        - [Crezione sito di base](#crezione-sito-di-base)
            - [Struttura di base cartelle](#struttura-di-base-cartelle)
        - [Tema](#tema)
            - [Customizzazione](#customizzazione)
            - [Template per la home](#template-per-la-home)
            - [Template per altre pagine generiche single quasi "statiche"](#template-per-altre-pagine-generiche-single-quasi-statiche)
            - [Template per le pagine con elenchi di contenuti](#template-per-le-pagine-con-elenchi-di-contenuti)
        - [Creazione di nuovi contenuti](#creazione-di-nuovi-contenuti)
        - [Lanciare il sito hugo sul proprio PC](#lanciare-il-sito-hugo-sul-proprio-pc)
    - [Generare versione statica del sito](#generare-versione-statica-del-sito)
    - ["Lavori" per nuovo AlboPOP](#lavori-per-nuovo-albopop)

<!-- /TOC -->

# garagealbopop

Il nuovo alboPOP è basato su [**hugo**](https://gohugo.io) un _site static generator_ scritto in GO.

## hugo

È multi piattaforma e si installa così come indicato qui [https://gohugo.io/getting-started/installing/](https://gohugo.io/getting-started/installing/).

### Crezione sito di base

Un nuovo sito "vuoto" si crea così:

    hugo new site albopopTwoDotZero

#### Struttura di base cartelle

Creato un sito, la [struttura di base](https://gohugo.io/getting-started/directory-structure/) delle cartelle contenute è:

- `archetypes`, contiene la definizione della schema dei contenuti;
- `content`, contiene i contenuti (di solito in formato Markdown);
- `data`, contiene opzionalmente fonti di dati per il sito;
- `layouts`, contiene i template html (e non solo) del sito;
- `public`, non è presente alla creazione di un nuovo sito, ma è la cartella di _default_ in cui verrà pubblicata la versione statica del sito;
- `static`, è la cartella per gli _asset_, per file, librerie e _framework_ javascript, css, ecc.;
- `themes`, è la cartella dove si installano i temi.

### Tema
Esistono dei [**temi** già pronti](https://themes.gohugo.io/). Per installarne uno ad esempio:

```bash
#entra nelle cartella themes del sito creato
cd themes
#clona il repository del tema
git clone https://github.com/AngeloStavrow/indigo.git
```

Nella cartella dei temi c'è spesso un file `README.md` con le istruzioni per renderlo pienamente attivo. Nel caso di questo tema ad esempio è necessario:

- copiare il file di configurazione `config.toml._example_` da `./themes/indigo` alla radice del sito, cancellare il file `config.toml` presente nella radice e rinominare `config.toml.example` in `config.toml`;
- copiare le cartelle `archetypes` e `content` da `./themes/indigo/exampleSite` nella radice del sito (contengono dei contenuti di esempio per visualizzare un primo _rendering_).

#### Customizzazione

Di base, con un tema installato, un sito hugo viene renderizzato sfruttando i file del tema scelto. In questo caso quelli della cartella `./themes/indigo`.

I file principali del tema sono quelli della cartella `./themes/indigo/layout`. Se voglio modificare il tema e quindi i file da cui è composto, la modifica non va fatta nella cartella del tema, ma clonando i file interessati nella cartella `layout` presente nella radice del sito hugo, mantenendo la struttura originaria.<br>
Ad esempio in questo tema il _footer_ deriva dal rendering del file `footer.html` presente nella cartella `./themes/indigo/layout/partials`. Per modificarlo si dovrà quindi creare la cartella `partials` dentro la cartella `./layout` e inserirgli dentro copia del file `footer.html`. In questo repo è stato fatto e nel footer è stata inserita la stringa "viva AlboPOP".

#### Template per la home

In hoge l'HTML per la home viene renderizzato a partire dal file `index.html` prensente nella cartella `layout` (copiato dalla cartella `./themes/indigo/layout`).

#### Template per altre pagine generiche single quasi "statiche"

Intendo come pagine quasi "statiche", quelle come "About", che non subiranno molti cambiamenti nel tempo. Le pagine singole sono quelle che non contengo liste di elementi (gli ultimi 10 post paginati, ecc.), ma entità _single_.

Una _single page_ di default è renderizzata tramite il file `single.html` presente in `./layouts/_default`.

Se è necessario, per qualche pagina singola, applicare un _layout_ diverso da quello di _default_ si può fare in diverse maniere. Due classiche sono definire il tipo di pagina (blog post, evento, ecc.) o definire il _layout_ della pagina.<br>
Se voglio farlo per la pagina "paginaesempio", tramite la definizione di un _layout_ chiamato "demolayout", i passi sono questi:

- creo nella cartella in `./layouts/_default`, magari a partire dal file di _default_ (`single.html`),  il file `demolayout.html.html` (il doppio html non è un errore);
- creo la pagina `paginaesempio.md` in `./content`, e nel `front matter` inserisco la proprietà "layout" e gli associo il valore "demolayout" (vedi sotto).

```yaml
---
title: "Pagina di esempio"
menu: "main"
draft: false
layout: "demolayout"
---
```

Così facendo la pagina `paginaesempio` non verrà renderizzata usando il file `single.html` ma il file `demolayout.html.html`.

Nei file che ho leggermente modificato per vedere questi esempi all'opera, tutte le single page hanno in testa la scritta "Template per tutte le single page", la pagina "paginaesempio" ha invece "Template soltanto per paginaesempio".

hugo cerca i file di template, secondo le modalità descritte qui [https://gohugo.io/templates/lookup-order/](https://gohugo.io/templates/lookup-order/).

#### Template per le pagine con elenchi di contenuti

Sono di questo tipo le pagine che contengono una lista di elementi. Ad esempio la pagina con gli ultimi _blog post_.

Il template di _default_ è il file `list.html` presente in `./layouts/_default`

Se voglio creare una sezione nuova - ad esempio "eventi" - con elenco di _item_ il file template che hugo cercherà sarà `./layouts/eventi/list.html.html`.

### Creazione di nuovi contenuti

Una nuova pagina si crea con un comando di questo tipo

    hugo new paginaesempio.md

Lanciato il comando, verrà creato il file `paginaesempio.md` in `./content`, che sarà visualizzabile (con il server hugo lanciato) all'URL `http://localhost:1313/paginaesempio/`.

Se voglio creare una sezione eventi, con i vari post all'intenro, il comando sarà:

    hugo new eventi/primo-evento.md

### Lanciare il sito hugo sul proprio PC

Basta aprire la shell (di Linux, del Mac o di Windows), entrare nella cartella creata con hugo, digitare `hugo server -D` e premere <kbd>INVIO</kbd>.

Se tutto va bene, il server hugo è stato lanciato e nella _shell_ si leggerà qualcosa come:

```
Serving pages from memory
Running in Fast Render Mode. For full rebuilds on change: hugo server --disableFastRender
Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
Press Ctrl+C to stop
```

Non resta che aprire il browser e lanciare http://localhost:1313/.

## Generare versione statica del sito

Per generare il sito in HTML, javascript, CSS il comando è semplicemente `hugo`. I file di output verranno inseriti nella cartella `./public`.

## "Lavori" per nuovo AlboPOP

A partire dal lavoro fatto da Jacopo, fare in modo di:

- predisporre i file per CSS e javascript;
- predisporre la _home_ modificando o creando _ex novo_ il file `./layout/index.html`;
- predisporre _header_ e _footer_ per tutto il sito, modificano o creando i file `./layout/partials/header.html` e `./layout/partials/footer.html`;
- predisporre le altre _single page_ modificando o creando _ex novo_ i file _template_ del caso.