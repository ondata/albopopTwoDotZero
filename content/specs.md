---
title: "Specifiche dei feed RSS per AlboPOP"
draft: false
type: "page"
menu:
    secondary:
        name: "Specifiche"
        weight: -130
images:
- /images/share.png
---

Gli scraper di AlboPOP producono un [feed RSS](/feedrss/) il cui formato standard segue delle
[specifiche precise](https://cyber.harvard.edu/rss/rss.html).
Quelle che seguono sono le regole condivise per produrre feed dal formato omogeneo, valido per tutti gli albi pretori di origine.

I tag e gli attributi elencati qui sono sono suddivisi in tre tipologie:

* obbligatori: devono essere sempre presenti e valorizzati come indicato;
* raccomandati: se l'informazione esiste alla fonte, dovrebbe essere opportunamente estratta e presente anche nel feed;
* facoltativi: altre informazioni che caratterizzano gli albi e potrebbero essere presenti nel feed.

Altri elementi e attributi previsti dalle specifiche o da namespace aggiuntivi sono possibili, ma da considerarsi facoltativi.
Gli URL devono essere tutti riferimenti *assoluti* (http:// ecc.).

# Intestazione XML<a name="xml"></a>
[OBBLIGATORIO] La prima riga del feed deve contenere l'indicazione della versione dell'xml e dell'encoding.

```
<?xml version="1.0" encoding="UTF-8"?>
```

# Tag rss<a name="rss"></a>
[OBBLIGATORIO] L'elemento radice deve essere il tag `rss` con l'indicazione della versione *e degli eventuali namespace*.

```
<rss
 xmlns:creativeCommons="http://cyber.law.harvard.edu/rss/creativeCommonsRssModule.html"
 xmlns:xhtml="http://www.w3.org/1999/xhtml"
 version="2.0">
[...]
</rss>
```

# Tag channel<a name="channel"></a>
[OBBLIGATORIO] L'elemento figlio di [rss](#rss) deve essere l'elemento `channel`, senza attributi.

```
<channel>[...]</channel>
```

## Tag title<a name="channel-title"></a>
[OBBLIGATORIO] Il titolo del feed deve essere nella forma `AlboPOP - [tipo pa] - [nome pa]`. Esempio:

```
<title>AlboPOP - Comune - Bagheria</title>
```

## Tag link<a name="channel-link"></a>
[OBBLIGATORIO] L'URL diretto al feed.

```
<link>[...]</link>
```

## Tag description<a name="channel-description"></a>
[OBBLIGATORIO] La descrizione del feed. Deve essere nella forma `*non ufficiale* RSS feed dell'Albo Pretorio di [tipo pa] [nome pa]`. Esempio:

```
<description>*non ufficiale* RSS feed dell'Albo Pretorio del Comune di Bagheria</description>
```

## Tag language<a href="channel-language"></a>
[OBBLIGATORIO] La lingua dei contenuti del feed in formato [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1). Esempio:

```
<language>it</language>
```

## Tag pubDate<a name="channel-pubdate"></a>
[OBBLIGATORIO] Data e orario dell'ultimo aggiornamento del feed (per esempio, dell'ultima esecuzione dello scraper), in formato conforme alle specifiche [RFC 822](https://www.w3.org/Protocols/rfc822/#z28). Esempio:

```
<pubDate>Tue, 10 Jul 2016 04:00:00 +0000</pubDate>
```

## Tag webMaster<a name="channel-webmaster"></a>
[OBBLIGATORIO] Nome ed email del curatore del feed e/o autore dello scraper. Esempio:

```
<webMaster>john@smith.com (John Smith)</webMaster>
```

## Tag docs<a name="channel-docs"></a>
[OBBLIGATORIO] URL al repository pubblico che contiene il codice dello scraper o alla pagina web che lo descrive (per esempio, http://albopop.it/[tipo pa]/[nome pa]/). Esempio:

```
<docs>http://albopop.it/comune/bagheria/</docs>
```

## Tag copyright<a name="channel-copyright"></a>
[RACCOMANDATO] L'indicazione del copyright dei contenuti del feed, nella forma `Copyright [anno] [nome pa]`, nel caso di copyright esplicito della fonte. Alternativo al tag [creativeCommons:license](#channel-cc). Esempio:

```
<copyright>Copyright 2016 Comune di Bagheria</copyright>
```

## Tag creativeCommons:license<a name="channel-cc"></a>
[RACCOMANDATO]  L'indicazione del copyleft dei contenuti del feed, in mancanza di un copyright esplicito della fonte. Alternativo al tag [copyright](#channel-copyright). Esempio:

```
<creativeCommons:license>http://creativecommons.org/licenses/by/4.0/</creativeCommons:license>
```

## Tag xhtml:meta<a name="channel-xhtml-meta"></a>
[OBBLIGATORIO] Necessario per evitare l'indicizzazione da motore di ricerca delle pagine linkate nel feed.

```
<xhtml:meta name="robots" content="noindex" />
```

## Tag channel category<a name="channel-category"></a>
Devono essere due (type e name) o più e contenere il maggior numero possibile delle seguenti informazioni, suddivise in obbligatorie (O), raccomandate (R), facoltative (F):

* nazione pa (R),
* regione pa (R),
* provincia pa (R),
* comune pa (R),
* latitudine pa (R),
* longitudine pa (R),
* codice univoco con prefisso pa (F),
* tipo pa (O),
* nome pa (O).

### Domain channel country<a name="channel-category-country"></a>
[RACCOMANDATO] La nazione a cui appartiene la pa che emette l'atto. Esempio:

```
<category domain="http://albopop.it/specs#channel-category-country">Italia</category>
```

### Domain channel region<a name="channel-category-region"></a>
[RACCOMANDATO] La regione a cui appartiene la pa che emette l'atto. Esempio:

```
<category domain="http://albopop.it/specs#channel-category-region">Sicilia</category>
```

### Domain channel province<a name="channel-category-province"></a>
[RACCOMANDATO] La provincia a cui appartiene la pa che emette l'atto. Esempio:

```
<category domain="http://albopop.it/specs#channel-category-province">Palermo</category>
```

### Domain channel municipality<a name="channel-category-municipality"></a>
[RACCOMANDATO] Il comune a cui appartiene la pa che emette l'atto. Esempio:

```
<category domain="http://albopop.it/specs#channel-category-municipality">Bagheria</category>
```

### Domain channel latitude<a name="channel-category-latitude"></a>
[RACCOMANDATO] La latitudine della pa che emette l'atto. Quella del comune di riferimento in mancanza di una sede specifica. Esempio:

```
<category domain="http://albopop.it/specs#channel-category-latitude">38.083333</category>
```

### Domain channel longitude<a name="channel-category-longitude"></a>
[RACCOMANDATO] La longitudine della pa che emette l'atto. Quella del comune di riferimento in mancanza di una sede specifica. Esempio:

```
<category domain="http://albopop.it/specs#channel-category-longitude">13.5</category>
```

### Domain channel uid<a name="channel-category-uid"></a>
[FACOLTATIVO] L'identificativo univoco della pa che emette l'atto, con un prefisso che ne indica il database di riferimento.
Per un comune valgono per esempio i codici ISTAT. Esempio:

```
<category domain="http://albopop.it/specs#channel-category-uid">istat:082006</category>
```

### Domain channel type<a name="channel-category-type"></a>
[OBBLIGATORIO] Il tipo di pa che emette l'atto. Esempio:

```
<category domain="http://albopop.it/specs#channel-category-type">Comune</category>
```

### Domain channel name<a name="channel-category-name"></a>
[OBBLIGATORIO] Il nome della pa che emette l'atto. Esempio:

```
<category domain="http://albopop.it/specs#channel-category-name">Comune di Bagheria</category>
```

# Tag item<a name="item"></a>
Sono gli elementi che rappresentano un singolo atto dell'albo pretorio. Possono essere zero (feed vuoto) o più, fino a 25, in ordine inverso di data e orario di pubblicazione.

```
<item>[...]</item>
```

## Tag title<a name="item-title"></a>
[OBBLIGATORIO] Il titolo dell'atto, così come riportato dalla pagina dedicata dell'albo pretorio. Si sconsiglia ogni intervento sul testo, come riduzione in lettere minuscole, a parte l'eliminazione di spazi e tabulazioni consecutivi e/o agli estremi della stringa.

```
<title>[...]</title>
```

## Tag link<a name="item-link"></a>
[OBBLIGATORIO] L'URL diretto alla pagina ufficiale dell'atto. Non a un documento (un file pdf, per esempio, vedi il tag [enclosure](#item-enclosure)), ma a una pagina web. E possibilmente diretto alla pagina, non attraverso un redirect, uno short url o un feedproxy.

```
<link>[...]</link>
```

## Tag description<a name="item-description"></a>
[OBBLIGATORIO] L'excerpt dell'atto, così come riportato in forma sintetica nella pagina ufficiale. Se mancante, una copia del titolo. Si sconsiglia ogni intervento sul testo, come riduzione in lettere minuscole, a parte l'eliminazione di spazi e tabulazioni consecutivi e/o agli estremi della stringa. Può contenere HTML, ma in tal caso deve essere racchiuso in un tag `<![CDATA[]]>` (vedi [CDATA Section](https://www.w3.org/TR/REC-xml/#sec-cdata-sect)).

```
<description><![CDATA[...]]></description>
```

## Tag pubDate<a name="item-pubdate"></a>
[OBBLIGATORIO] Data e orario ufficiali di pubblicazione dell'atto all'interno dell'Albo Pretorio, in formato conforme alle specifiche [RFC 822](https://www.w3.org/Protocols/rfc822/#z28). Deve essere indipendente da data e orario di scraping (che sono riportati nel [tag pubDate del tag channel](#channel-pubdate)).

```
<pubDate>[...]</pubDate>
```

## Tag guid<a name="item-guid"></a>
[OBBLIGATORIO] Identificativo unico *universale* dell'atto. Non può essere il semplice id dell'atto (che non è universalmente unico), generalmente è uguale all'URL diretto alla pagina ufficiale (in questo caso deve contenere l'attributo `isPermalink`).

```
<guid isPermaLink="true">[...]</guid>
```

## Tag item category<a name="item-category"></a>
Devono essere uno (codice univoco) o più e contenere il maggior numero possibile delle seguenti informazioni, suddivise in obbligatorie (O), raccomandate (R), facoltative (F):

* nazione atto (F),
* regione atto (F),
* provincia atto (F),
* comune atto (F),
* latitudine atto (F),
* longitudine atto (F),
* codice univoco con prefisso atto (O),
* tipo atto (R),
* data di pubblicazione dell'atto (R),
* data di scadenza dell'atto (R),
* data di emissione dell'atto (F),
* data di inizio esecuzione dell'atto (F),
* capitolo dell'atto (R),
* unità organizzativa responsabile dell'atto (R),
* importo complessivo dell'atto (R),
* valuta in cui è espresso l'importo (R),
* annotazioni a corredo dell'atto (F).

### Domain item country<a name="item-category-country"></a>
[FACOLTATIVO] La nazione di riferimento dell'atto. Se presente, ha precedenza sulla corrispondente categoria del *channel*. Esempio:

```
<category domain="http://albopop.it/specs#item-category-country">Italia</category>
```

### Domain item region<a name="item-category-region"></a>
[FACOLTATIVO] La regione di riferimento dell'atto. Se presente, ha precedenza sulla corrispondente categoria del *channel*. Esempio:

```
<category domain="http://albopop.it/specs#item-category-region">Sicilia</category>
```

### Domain item province<a name="item-category-province"></a>
[FACOLTATIVO] La provincia di riferimento dell'atto. Se presente, ha precedenza sulla corrispondente categoria del *channel*. Esempio:

```
<category domain="http://albopop.it/specs#item-category-province">Palermo</category>
```

### Domain item municipality<a name="item-category-municipality"></a>
[FACOLTATIVO] Il comune di riferimento dell'atto. Se presente, ha precedenza sulla corrispondente categoria del *channel*. Esempio:

```
<category domain="http://albopop.it/specs#item-category-municipality">Bagheria</category>
```

### Domain item latitude<a name="item-category-latitude"></a>
[FACOLTATIVO] La latitudine di riferimento dell'atto. Se presente, ha precedenza sulla corrispondente categoria del *channel*. Quella del comune di riferimento in mancanza di una sede specifica. Esempio:

```
<category domain="http://albopop.it/specs#item-category-latitude">38.083333</category>
```

### Domain item longitude<a name="item-category-longitude"></a>
[FACOLTATIVO] La longitudine di riferimento dell'atto. Se presente, ha precedenza sulla corrispondente categoria del *channel*. Quella del comune di riferimento in mancanza di una sede specifica. Esempio:

```
<category domain="http://albopop.it/specs#item-category-longitude">13.5</category>
```

### Domain item uid<a name="item-category-uid"></a>
[OBBLIGATORIO] L'identificativo numerico univoco dell'atto, univoco all'interno dell'Albo Pretorio in oggetto, nella forma `[anno]/[numero atto]`. Esempio:

```
<category domain="http://albopop.it/specs#item-category-uid">2016/15</category>
```

### Domain item type<a name="item-category-type"></a>
[RACCOMANDATO] La tipologia di atto. Esempio:

```
<category domain="http://albopop.it/specs#item-category-type">Determina</category>
```

### Domain item pubStart<a name="item-category-pubStart"></a>
[RACCOMANDATO] La data di pubblicazione dell'atto, in formato conforme alle specifiche [RFC 822](https://www.w3.org/Protocols/rfc822/#z28). Se assente coincide con la [data di pubblicazione nell'albo pretorio](#item-pubdate). Esempio:

```
<category domain="http://albopop.it/specs#item-category-pubStart">Wed, 14 Sep 2016 10:00:00 +000</category>
```

### Domain item pubEnd<a name="item-category-pubEnd"></a>
[RACCOMANDATO] La data di scadenza dell'atto, in formato conforme alle specifiche [RFC 822](https://www.w3.org/Protocols/rfc822/#z28). Se assente si intende uguale a 15 giorni dopo [pubStart](#item-category-pubStart). Esempio:

```
<category domain="http://albopop.it/specs#item-category-pubEnd">Wed, 29 Sep 2016 10:00:00 +000</category>
```

### Domain item relStart<a name="item-category-relStart"></a>
[FACOLTATIVO] La data di emissione dell'atto, in formato conforme alle specifiche [RFC 822](https://www.w3.org/Protocols/rfc822/#z28). Esempio:

```
<category domain="http://albopop.it/specs#item-category-relStart">Wed, 14 Sep 2016 10:00:00 +000</category>
```

### Domain item exeStart<a name="item-category-exeStart"></a>
[FACOLTATIVO] La data di inizio esecuzione dell'atto, in formato conforme alle specifiche [RFC 822](https://www.w3.org/Protocols/rfc822/#z28). Esempio:

```
<category domain="http://albopop.it/specs#item-category-exeStart">Wed, 14 Sep 2016 10:00:00 +000</category>
```

### Domain item chapter<a name="item-category-chapter"></a>
[RACCOMANDATO] Il capitolo dell'atto. Esempio:

```
<category domain="http://albopop.it/specs#item-category-chapter">3</category>
```

### Domain item unit<a name="item-category-unit"></a>
[RACCOMANDATO] Unità organizzativa responsabile dell'atto. Esempio:

```
<category domain="http://albopop.it/specs#item-category-unit">Area Servizi Demografici</category>
```

### Domain item amount<a name="item-category-amount"></a>
[RACCOMANDATO] L'importo complessivo dell'atto, espresso nella [valuta indicata](#item-category-currency) (in euro, se non diversamente specificato). Esempio:

```
<category domain="http://albopop.it/specs#item-category-amount">2000.00</category>
```

### Domain item currency<a name="item-category-currency"></a>
[RACCOMANDATO] La valuta in cui è espresso l'[importo](#item-category-amount). Se assente si intende espresso in euro. Esempio:

```
<category domain="http://albopop.it/specs#item-category-currency">€</category>
```

### Domain item annotation<a name="item-category-annotation"></a>
[FACOLTATIVO] Annotazioni a corredo dell'atto. Esempio:

```
<category domain="http://albopop.it/specs#item-category-annotation">[...]</category>
```

## Tag enclosure<a name="item-enclosure"></a>
[RACCOMANDATO] Uno o più allegati con l'URL diretto all'atto integrale, generalmente un file pdf. Esempio:

```
<enclosure url="[...]" length="[...]" type="application/pdf" />
```

# Esempio completo
Qui di seguito è riportato un esempio completo di feed con un solo elemento a scopo dimostrativo.

```
<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:creativeCommons="http://cyber.law.harvard.edu/rss/creativeCommonsRssModule.html" xmlns:xhtml="http://www.w3.org/1999/xhtml" version="2.0">
 <channel>
 
  <title>AlboPOP - Comune - Bagheria</title>
  <link>https://script.google.com/macros/s/AKfycbxiqe9sZ7Y1yT8dm3diccl0EBhGAQ5ZF60Stq8SgM4qSIabfeA/exec</link>
  <description>*non ufficiale* RSS feed dell'Albo Pretorio del Comune di Bagheria</description>
  <language>it</language>
  <pubDate>Wed, 14 Sep 2016 10:30:00 +000</pubDate>
  <webMaster>john@smith.com (John Smith)</webMaster>
  <docs>http://albopop.it/comune/bagheria/</docs>
  <copyright>Copyright 2016 Comune di Bagheria</copyright>
  <xhtml:meta name="robots" content="noindex" />
  
  <category domain="http://albopop.it/specs#channel-category-country">Italia</category>
  <category domain="http://albopop.it/specs#channel-category-region">Sicilia</category>
  <category domain="http://albopop.it/specs#channel-category-province">Palermo</category>
  <category domain="http://albopop.it/specs#channel-category-municipality">Bagheria</category>
  <category domain="http://albopop.it/specs#channel-category-latitude">38.083333</category>
  <category domain="http://albopop.it/specs#channel-category-longitude">13.5</category>
  <category domain="http://albopop.it/specs#channel-category-type">Comune</category>
  <category domain="http://albopop.it/specs#channel-category-name">Comune di Bagheria</category>
  <category domain="http://albopop.it/specs#channel-category-uid">istat:082006</category>

  <item>
  
   <title>Servizio trasporto alunni Aspra-Bagheria</title>
   <link>http://comune.bagheria.pa.it/albo-pretorio/albo-pretorio-online/?ap_id=26006&ap_show=detail</link>
   <description><![CDATA[Servizio trasporto alunni Aspra-Bagheria]]></description>
   <pubDate>Wed, 14 Sep 2016 10:00:00 +000</pubDate>
   <guid isPermaLink="true">http://comune.bagheria.pa.it/albo-pretorio/albo-pretorio-online/?ap_id=26006&ap_show=detail</guid>
   
   <category domain="http://albopop.it/specs#item-category-uid">2016/117</category>
   <category domain="http://albopop.it/specs#item-category-type">Determina</category>
   <category domain="http://albopop.it/specs#item-category-pubStart">Wed, 14 Sep 2016 10:00:00 +000</category>
   <category domain="http://albopop.it/specs#item-category-pubEnd">Wed, 29 Sep 2016 10:00:00 +000</category>
   <category domain="http://albopop.it/specs#item-category-relStart">Wed, 14 Sep 2016 10:00:00 +000</category>
   <category domain="http://albopop.it/specs#item-category-exeStart">Wed, 15 Sep 2016 10:00:00 +000</category>
   <category domain="http://albopop.it/specs#item-category-chapter">3</category>
   <category domain="http://albopop.it/specs#item-category-unit">Area Servizi Demografici</category>
   <category domain="http://albopop.it/specs#item-category-amount">2000.00</category>
   <category domain="http://albopop.it/specs#item-category-currency">€</category>
   <category domain="http://albopop.it/specs#item-category-annotation">Per info contattare info@example.com</category>
   
   <enclosure url="http://comune.bagheria.pa.it/wp-content/plugins/wp-albopretorio/download.ws.php?download=deed_doc&id=26976" length="222849" type="application/pdf" />
   
  </item>
  
 </channel>
</rss>
```
