---
title: Albo POP a Barletta, "apri e condividi le tue conoscenze"
date: 2016-03-24
---

_di **[Rinex83](https://github.com/Rinux83)**_

> articolo pubblicato in origine su [http://0penyourm1nd.blogspot.it](http://0penyourm1nd.blogspot.it/2016/03/liberiamo-lalbo-pretorio-del-comune-di.html)


<div id="post-body-8652931440382297733" class="post-body entry-content" itemprop="description articleBody">
<div  >

</div>
<div  >
<span  >Con questo articolo vorrei raccontarvi la mia esperienza di <a href="http://centrostudi.crumbria.it/dizionario/civic-hacking">civic hacking</a> che mi ha portato alla realizzazione di un servizio di informazione che potrebbe tornare utile a chi vuol tenersi aggiornato su gli atti che l'amministrazione comunale di Barletta produce.</span>
</div>
<div  >
<span  ><br />
</span>
</div>
<div  >
<span  >Seguendo l'esempio di <a href="http://albopop.it/"><strong>AlboPop</strong></a> ho iniziato a cercare di capire come rendere più fruibili e accessibili le informazioni dell'<a href="http://albopretorio.comune.barletta.bt.it/hypersicportale/portale/albopretorio/albopretorioconsultazione.aspx?CATEGORIA_ID=6&amp;EVENTO_ID=2">Albo Pretorio del Comune di Barletta</a>. Al momento ho messo su alcune modalità: </span>
</div>
<ul>
<li><span  >un <strong><a href="https://it.wikipedia.org/wiki/RSS">feed RSS</a></strong>, su cui viene pubblicato un nuovo elemento per ogni nuova pubblicazione dell'Albo;</span></li>
<li><span  >un <strong>canale</strong> di <strong><a href="https://telegram.org/">Telegram</a></strong>, su cui viene pubblicato un nuovo messaggio per ogni nuova pubblicazione dell'Albo.</span></li>
</ul>
<div  >
<span  >Prima di illustrare come è stato possibile creare queste due modalità, premetto che il sistema web dell'albo comunale <strong>non permette</strong>, per via di come è stato realizzato, di avere link univoci per accedere direttamente ai vari atti. </span>
</div>
<div  >
<span  >Quindi non mi è stato possibile realizzare un accesso con un link diretto per via di questa limitazione e ho optato nel pubblicare solo la data di pubblicazione, l'ente/ufficio di riferimento e l'oggetto(descrizione) dell'atto, con in fondo ad ogni messaggio il link diretto all'elenco degli atti sul sito dell'albo comunale. </span><br />
<span  >Chi vorrà utilizzare il servizio dovrà poi andare a cercare manualmente dall'elenco dell'albo pretorio, l'atto di riferimento e accedere poi alla visualizzazione.</span><br />
<span  >  </span>
</div>
<h2 id="come-è-stato-realizzato-il-feed">Come è stato realizzato il feed?</h2>
<ul>
</ul>
<div  >
Per la creazione del <strong>feed RSS</strong> ho seguito <strong><a href="https://github.com/aborruso/albo-pop/tree/master/code/GDriveGeneric/tutorial_ita#creare-un-feed-rss-a-partire-dai-contenuti-di-una-pagina-web-utilizzando-il-foglio-elettronico-di-google-drive">questa guida</a></strong>, in cui viene spiegato come attraverso l'utilizzo di uno <strong>Sheet</strong> (un foglio elettronico di Google Drive) e uno <strong>Script</strong>, si possono estrarre informazioni da una pagina web.<br />
Questo il link al feed che ho creato:
</div>
<div  >
<a href="http://feeds.feedburner.com/AlboPopBarletta" class="uri">http://feeds.feedburner.com/AlboPopBarletta</a><br />
 
</div>
<div  >

</div>
<h2 id="come-è-stato-automatizzato-linvio-di-messaggi">Come è stato automatizzato l'invio di messaggi?</h2>
<div  >
L'automatizzazione dell'invio dei messaggi può essere realizzata con <strong><a href="https://ifttt.com/">IFTTT</a></strong>, un utilissimo strumento web, che nel mio caso richiedeva un requisito: avere link univoci nelle varie istanze del feed.
</div>
<div  >
<br />

</div>
<div  >
Per far sì che tutto funzioni, ho dovuto effettuare una modifica alla procedura indicata nella guida, cioè inserire nella stringa del link, la descrizione dell'oggetto pubblicato.<br />
La stringa ottenuta(anche se non è un vero e proprio indirizzo) permette di avere un link univoco per ogni atto pubblicato dall'albo sul feed. Infatti cliccando su i vari link del feed si giunge ad una pagina di errore sul sito dell'albo.
</div>
<div  >
<br />

</div>
<div  >
Ho quindi poi messo tutto in pasto a IFTTT e seguito il passo successivo.<br />
 
</div>
<h2 id="come-è-stato-realizzato-il-canale-telegram">Come è stato realizzato il canale Telegram?  <strong></strong></h2>
<div  >
<strong>Telegram</strong> è un pò come whatsapp, ma ha molte funzionalità in più, tra cui quella di consentire l'iscrizione ad un canale, ovvero una bacheca di messaggi da leggere, inviati dall'account che gestisce il canale. Nei canali quindi non si dialoga, ma <strong>si legge soltanto</strong>.<br />
<br />
Avendo a disposizione il feed ho quindi seguito questa <strong><a href="http://www.piersoft.it/?p=693">guida</a></strong>, ed ecco come si presenta il canale dell'Albo Pretorio del Comune di Barletta:
</div>
<div  >
<br />

</div>
<div style="text-align: center;">
<a href="http://4.bp.blogspot.com/-1XDxvnQaIwU/VvKEDpods9I/AAAAAAAABVY/R7BFu7dnrvw_E7JH0IIbcKB8ISKz4-Qpg/s1600/Telegram_AlboPretorioBarletta.png"><img src="https://4.bp.blogspot.com/-1XDxvnQaIwU/VvKEDpods9I/AAAAAAAABVY/R7BFu7dnrvw_E7JH0IIbcKB8ISKz4-Qpg/s400/Telegram_AlboPretorioBarletta.png" width="232" height="400" /></a>
</div>
<div  >
<br />

</div>
<h2 id="come-fare-a-rimanere-aggiornati">Come fare a rimanere aggiornati?</h2>
Scaricare, installare e attivare Telegram e poi:<br />

<ol>
<li>Andare al seguente indirizzo del canale Telegram<br />
<a href="https://telegram.me/albopretoriobarletta" class="uri">https://telegram.me/albopretoriobarletta</a></li>
<li>e una volta aperto in Telegram fare click su &quot;UNISCITI&quot;</li>
</ol>
<div  >
<br />

</div>
<div style="clear: both;">

</div>
</div>