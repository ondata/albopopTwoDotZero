---
title: Il nuovo AlboPOP
date: 2019-02-14T17:26:20+01:00
tags: 
coverImage: share.png
draft: true
coverColor: blue
author: Andrea Borruso
authorURL: https://twitter.com/aborruso
---

<img class="img-fluid" src="/images/share.png" /> 

È con una certa emozione e piacere che scrivo questo annuncio: **oggi va online il nuovo alboPOP**!

È un progetto che nasce per rendere più popolari gli Albi Pretori delle Pubbliche Amministrazioni o, come abbiamo detto in altre occasioni, “per farli entrare nelle tasche delle persone”.
Si tratta di pagine web e/o di siti dedicati in cui ci sono spesse le tracce più evidenti del lavoro di una PA (specie per un Comune) e soprattutto la gran parte delle informazioni utili per la cittadinanza. Ma nonostante questo sono spazi poco vissuti e conosciuti.

Tante le ragioni, tra queste voglio sottolineare quelle che nel tempo mi sono sembrate più impattanti:

- per alcuni albi è **impossibile** **condividere** un'informazione interessante con altri (per email, chat, _social network_), una pagina con informazioni su un bando, la chiusura di una strada, delle misure di sostegno economico, ecc.), perché non esiste per questa un indirizzo univoco (un URL) dedicato a ogni atto in albo (ad esempio `http://miocomune.it/albo?atto=456364`);
- in altri i singoli atti hanno il loro indirizzo univoco, ma una volta inviato a un potenziale interessato, questi non riescirà ad aprirlo, perché pubblicato su una pagina "protetta" da _cookie_ di sessione;
- alle volte sono associati a **motori di ricerca** che funzionano male e/o in **modalità "vecchie"**. Inoltre quasi mai è possibile fare ricerche all'interno dei documenti allegati al singolo atto, in cui c'è il cuore di quanto pubblicato;
- sono poco diffuse modalità per **ricevere avvisi automatici**, iscriversi a un servizio di email di riepilogo, accedere in modalità adatte alla lettura automatica da parte di un _Personal Computer_ (API, RSS, ecc.).

AlboPOP nasce per rispondere una richiesta fatta sul [gruppo OpenDataSicilia](https://groups.google.com/forum/#!forum/opendatasicilia), proprio per superare alcuni di questi problemi presenti in un albo di un Comune. E risposi con una vecchia idea: creare il feed RSS degli atti di quella PA.

Era la voglia di essere utile e sperimentare, due cose di cui gli effetti spesso si perdono in poche ore.
Ma per fortuna attorno al progetto c'è sempre stata un'attenzione e una spinta (grazie a tutti quelli che l'hanno fatto) che gli ha consentito di non fermarsi e addirittura di **immaginarne** una **crescita** e un'**evoluzione**.

### Ve lo presento

Il nuovo AlboPOP nasce perché possa **diventare "adulto"**, per essere un progetto e un'idea che riesca per l'appunto ad andare oltre "la voglia di essere utile e sperimentare". Per immaginarlo e avere la forza e la voglia di farlo è stata fondamentale l'[**associazione onData**](http://ondata.it/) (di cui sono orgogliosamente tra i fondatori).<br>In questa la "vecchia idea" di AlboPOP è stata uno stimolo propedeutico alla realizzazione del progetto [Ricostruzione Trasparente](http://ricostruzionetrasparente.it/), in cui gli albi dei Comuni del Centro Italia colpiti dal terremoto sono la fonte informativa principale.<br> Ma sono le persone di onData le artefici principali del cambio di passo; un mio grazie a Andrea Nelson, Alessio, Lorenzo ed Enrico.

La novità che salta subito all'occhio è proprio il **nuovo sito**, in termini di **grafica**, **testi** e soprattutto in termini di "**senso**". L'artefice di questo bel lavoro è il bravo [**Jacopo Solpi**](https://jacoposolmi.github.io/)

<img class="img-fluid" src="/images/AlboPOPnuovo.png" /> 

Jacopo ci ha fatto molte domande sul progetto, ha raccolto informazioni anche in modo indipendente e dopo averci lavorato ci ha fatto una proposta, che a me ha lasciato secco: il suo lavoro non soltanto mostrava l'ottima comprensione del progetto, ma soprattutto ne valorizzava gli obiettivi di fondo, le modalità di sviluppo e i possibili risultati futuri. È stata una bella sensazione, che ci ha dato il "Pronti, Partenza, Via!" ed è stata la base per farci costruire il nuovo progetto.

Il nuovo sito si rivolge in modo evidente a chi vuole essere parte attiva, alle persone, ai dipendenti della Pubblica Amministrazione che vogliono dare spazio al valore informativo degli albi. Di questo si ha evidenza in home e nella sezione dedicata **[Partecipa](/partecipa)**

<img class="img-fluid" src="/images/partecipa.png" /> 

Molto diversa la modalità di presentare la **lista degli albi**. Per ogni PA è stato inserito il simbolo, il nome, la Provincia e la Regione di riferimento, i possibili **tag** associati e una categorizzazione. <br>Quest'ultima si evidenzia nell'immagine di sotto con `Accessibile` e `AlboPOP Standard`:

- la prima è per quelle PA che pubblicano PDF preferenzialmente in formato testo, quindi **accessibile**;
- la seconda per gli AlbiPOP il cui feed RSS è conforme alle [**specifiche**](/specs).

<img class="img-fluid" src="/images/lista.png" /> 

Di questo si ha evidenza anche nella **pagina singola**, che è stata ridisegnata. Ci sono gli elementi presenti nella prima versione del sito, più appunto la "categorizzazione" e un elenco di Comuni della stessa regione.

<img class="img-fluid" src="/images/singleComune.png" />   

Infine in termini visuali voglio sottolineare alcuni elementi presenti nel "**piede**" del sito: la [**mappa** degli AlbiPOP](/mappa) e soprattutto le [**FAQ** del progetto](/faq).

<img class="img-fluid" src="/images/piede.png" />   

Un'altra novità di rilievo è il motore del nuovo AlboPOP: adesso è [**hugo**](https://gohugo.io/), uno dei migliori e più diffusi generatori _open-source_ di siti web statici. Alessio ci ha messo testa e tempo e non solo lo ha adattato al lavoro di Jacopo, ma ne ha predisposto i processi automatici per la generazione dei contenuti e lo **schema dati**.<br>
Infatti adesso nella descrizione `YAML` di ogni albo è presente il ricco schema dati di sotto:

{{< gist aborruso 499584a0bde2e0dcf19e8daf92f0368b >}}

Queste informazioni vengono utilizzate per generare in modo automatico i contenuti del sito, come le pagine singole, così come l'**indice in formato `JSON`** degli albi ([/comuni-pa/index.json](/comuni-pa/index.json)) o le informazioni sempre in formato `JSON` sul singolo comune (ad esempio [/comune/acquasantaterme/index.json](/comune/acquasantaterme/index.json)).<br>
Questa fase verrà documentata e probabilmente anche leggermente modificata per esporre delle API "statiche" sui dati di base di AlboPOP.

