---
title: Un post per spiegare come si pubblica sul blog di Albo POP
date: 2016-01-06
---

*di [@aborruso](https://twitter.com/aborruso)*

Il sito web di Albo POP è basato su **[Jekyll](http://jekyllrb.com/)** (un generatore di siti web statici) e l'hosting è fatto direttamente su [questo](https://github.com/aborruso/albo-pop) repository **GitHub**.

Per scrivere un nuovo post sul [**blog**](http://albopop.it/post/), basta scriverne il testo in **Markdown**, inserire nelle prime righe delle informazioni secondo una determinata struttura, e pubblicare il file nella cartella ` _posts `, del brach `gh-pages`, presente nel repository.

Il [Markdown](https://daringfireball.net/projects/markdown/) è un modo per scrivere testi in un formato facile da leggere, che può essere convertito direttamente in formato HTML. Diciamo che è un modo per tutti per scrivere testo ricco, con [collegamenti ipertestuali](https://daringfireball.net/projects/markdown/syntax#link), **grassetti**, *corsivi*, tabelle, immagini, elenchi, ecc..  

L'immagine di sotto è il codice Markdown con cui è scritto ad esempio questo post. Una volta pubblicato su GitHub, viene convertito automaticamente dopo una decina di secondi in HTML.

![](http://i.imgur.com/7ugxLBm.png)

Nella **prima parte** del file va sempre indicato il *layout* (che sarà sempre di tipo "post") e il *title*, ovvero il titolo della pagina. Il tutto circondato da tre trattini centrali (`-`). In questo post ad esempio nelle prime righe abbiamo:

    ---
    layout: post
    title: Un post per spiegare come si pubblica sul blog di Albo POP
    ---

Il **nome del file** deve essere sempre nella forma `AAAA-MM-GG-titolo_breve.md`, dove "AAAA-MM-GG" sta per Anno-Mese-Giorno e `.md` è l'estensione. Il nome di questo post è ad esempio `2016-01-06-come_pubblicare_post_su_albopop.md` e il testo in formato Markdown è [questo](https://raw.githubusercontent.com/aborruso/albo-pop/gh-pages/_posts/2016-01-06-come_pubblicare_post_su_albopop.md).

Per **pubblicarlo** sulla cartella del repository - e quindi sul blog - si possono percorrere diverse strade. Nel video di sotto mostro quella che userò per questo post.

[![](http://i.imgur.com/4xeYmHT.png)](https://www.youtube.com/watch?v=VQI_0yEry8g&feature=youtu.be&hd=1)

Buona pubblicazione :)
