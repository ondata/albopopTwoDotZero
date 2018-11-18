# AlboPOP 2.0 (develop)

Sito statico basato sul generatore [Hugo](https://gohugo.io/). Anteprima: http://dev.albopop.it/. Vecchia versione on-line: http://albopop.it/.

## Contribuisci

Questo repository contiene i sorgenti del sito e include il [repository del tema](https://github.com/ondata/albopopTwoDotZero-theme/) come *submodule* nella cartella `themes/albopop`.

Attenzione! Devi aver installata la [versione extended di Hugo](https://github.com/gohugoio/hugo/releases)
con il supporto per [Hugo Pipes](https://gohugo.io/hugo-pipes/).

* Clona il repository in locale: `git clone --recursive git@github.com:ondata/albopopTwoDotZero.git`.

* Entra nella cartella di progetto: `cd albopopTwoDotZero/` (verifica di essere sulla branch *develop* con `git branch`).

* Lancia il server di sviluppo: `hugo server -D`.

* Apri la versione live del sito all'indirizzo `http://localhost:1313/` (verifica l'indirizzo esatto nei log in console), la pagina si ricarica per ogni modifica dei file sorgente.

* Per generare i file statici del sito (nella cartella `public/`): `hugo`.

## Note aggiuntive

Per aggiornare la versione pubblica (sulla branch `gh-pages`): `git subtree push --prefix public/ origin gh-pages`.

Se la cartella del tema `themes/albopop` risulta assente o vuota, assicurati di essere sulla branch *develop* (con `git checkout develop`),
di avere il repository locale aggiornato (con `git pull`) ed esegui `git submodule update --init --recursive`.
