# AlboPOP 2.0 (develop)

Sito statico basato sul generatore [Hugo](https://gohugo.io/). URL: https://albopop.it.

## Contribuisci

Questo repository contiene i sorgenti del sito e include il [repository del tema](https://github.com/ondata/albopopTwoDotZero-theme/) come *submodule* nella cartella `themes/albopop`.

Attenzione! Devi aver installata la [versione extended di Hugo](https://github.com/gohugoio/hugo/releases)
con il supporto per [Hugo Pipes](https://gohugo.io/hugo-pipes/).

* Clona il repository in locale: `git clone --recursive git@github.com:ondata/albopopTwoDotZero.git` (solo la prima volta).

* Entra nella cartella di progetto: `cd albopopTwoDotZero/` (verifica di essere sulla branch *develop* con `git branch`).

* Lancia il server di sviluppo: `hugo server -D`.

* Apri la versione live del sito all'indirizzo `http://localhost:1313/` (verifica l'indirizzo esatto nei log in console), la pagina si ricarica per ogni modifica dei file sorgente.

* Una volta finito di lavorare, chiudi il server di sviluppo e genera i file statici del sito (nella cartella `public/`) con il comando `hugo`.

* Salva le tue modifiche al progetto con `git add .` e `git commit -m '[descrizione modifiche]'` (assicurati di committare anche i file della cartella `public/`).

* Pubblica le tue modifiche sul repository condiviso con `git push` (direttamente la branch develop oppure una tua branch derivata da questa).

* Segnala il tuo lavoro in una issue corrispondente.

## Organizzazione dei file

### Contenuti

Tutti i contenuti del sito sono nella cartella `content/` sotto forma di file `.md` (formato *markdown*).

Quelli presenti direttamente in `content/` rappresentano le *pagine* del sito, quelli all'interno di sottocartelle
rappresentano i post (in particolare sono previsti *post* del blog, *comune*, *altrepa*).

I file `_index.md` rappresentano le pagine di elenco dei post corrispondenti.

### Struttura delle pagine

L'output HTML delle pagine è definito da file di template nella cartella `layouts/`, che a loro volta sostituiscono o si aggiungono
ai file predefiniti del tema attivo (cartella `themes/albopop/`).

### Stile delle pagine

I fogli di stile si trovano nella cartella `assets/sass/`, l'entry point è il file `main.scss` che definisce le principali variabili
e include tutti gli altri fogli di stile. I valori di alcune variabili fondamentali (es. i colori di base) sono definiti a loro volta
nella configurazione del sito (il file `config.toml` presente nella cartella principale di progetto).

È compito di Hugo compilare opportunamente i file scss in un regolare file css concatenato e minificato:
a ogni modifica nel caso del server di sviluppo, staticamente quando si compila il tutto nella cartella `public/`.

---

## Note aggiuntive

Per aggiornare la versione pubblica (sulla branch `gh-pages`): `git subtree push --prefix public/ origin gh-pages`.

Se la cartella del tema `themes/albopop` risulta assente o vuota, assicurati di essere sulla branch *develop* (con `git checkout develop`),
di avere il repository locale aggiornato (con `git pull`) ed esegui `git submodule update --init --recursive`.
