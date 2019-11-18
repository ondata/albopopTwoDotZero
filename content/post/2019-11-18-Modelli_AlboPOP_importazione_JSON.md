---
title: "Realizzare un AlboPOP: quando la sorgente è un file JSON"
date: 2019-11-18T12:30:20+01:00
tags: scraping, json, import
coverImage:
draft: false
coverColor: blue
author: Fabrizio Puce
authorURL: https://www.linkedin.com/in/fabriziopuce/
---

Nel [gruppo facebook di AlboPOP](https://www.facebook.com/groups/albopop/permalink/2744432478928991/) Andrea Nelson Mauro ha fatto richiesta di creare l'AlboPOP per il Comune di Venezia.
Questo è il case study di come ho creato il feed per un albo pretorio molto particolare.

L'albo pretorio del Comune di Venezia è raggiungibile [cliccando qui](https://portale.comune.venezia.it/albopretorio).
Rispetto ad altri albi pretori, quando viene cliccato su una delle voci relative agli atti, non viene creato un popup che richiama una pagina html standard, ma viene creato un popup tramite JQuery, cioè viene creato al momento il contenuto, richiamando dei dati presenti da qualche altra parte.

Tramite gli strumenti per sviluppatori di Google Chrome ho iniziato l'analisi della pagina. Nella scheda Network -> XHR viene mostrato un richiamo al file
[https://portale.comune.venezia.it/sites/all/modules/yui_venis/albo.php?tipo=JSON](https://portale.comune.venezia.it/sites/all/modules/yui_venis/albo.php?tipo=JSON)

Da notare la variabile presente nell'url dopo il punto interrogativo: `tipo=JSON`. Da ciò ho dedotto che fosse possibile richiedere al file albo.php un'altra versione del file che non fosse JSON. Sempre tramite gli strumenti per sviluppatori di Google Chrome ho rintracciato un file JS che eseguiva una query trasformando una sorgente XML in JSON. Allora ho provato a sostituire nell'url ottenuto in precedenza la variabile "tipo" scrivendo direttamente XML, ottenendo questo file:
[https://portale.comune.venezia.it/sites/all/modules/yui_venis/albo.php?tipo=XML](https://portale.comune.venezia.it/sites/all/modules/yui_venis/albo.php?tipo=XML)

Ho cercato quindi di importare il file XML ottenuto nel Google Sheet di base fornito da Andrea Borruso, ma il risultato non è stato dei migliori.
Quindi ho tentato di importare il JSON. Google Sheet non prevede una funzione nativa per questo tipo di importazione, ma ho trovato un interessante [progetto su github](https://github.com/bradjasper/ImportJSON) che permette di implementare tale funzione con pochi passaggi.
Dopo aver configurato lo script ImportJSON sul file gsheet, ho importato il JSON con i dati dell'albo pretorio. La query però generava oltre 300 righe di elementi dell'albo e ciò avrebbe comportato un tempo di caricamento eccessivo per il Feed finale. Ho quindi limitato la query alle prime 10 voci.
Estraendo i parametri dagli item del JSON, li ho concatenati per generare un link di riferimento per il dettaglio del singolo atto. Anche questo contenuto però veniva fornito in formato JSON (es.: https://portale.comune.venezia.it/sites/all/modules/yui_venis/alboDetail.php?tipo=JSON&anno=2019&numero=6233&sede=M).

Ho quindi creato un ulteriore foglio in cui utilizzare sempre la funzione importJSON per estrarre solo il link del documento allegato all'atto e completare i parametri per generare un Feed RSS che rispetti le specifiche e che è raggiungibile [cliccando qui](http://feeds.feedburner.com/AlbopopVenezia)

Per l'utilizzo dello scritp ImportJS è stato necessario analizzare il path degli oggetti JSON. Per questa operazione ho utilizzato un utile tool che trovate a questo indirizzo:
[https://jsonpath.com/](https://jsonpath.com/)

Se volete analizzare il file che ho creato per generare l'AlboPOP dell'albo pretorio del Comune di Venezia, [cliccate qui](https://docs.google.com/spreadsheets/d/1mTYyfrXIhM5GYp5r5Q07hY619zFsz9ThlU_K4gzE1hs/edit?usp=sharing)
