# Panoramica del Progetto

Questo progetto ospita il sito web AlboPOP, un sito statico generato con [Hugo](https://gohugo.io/). Utilizza un tema personalizzato chiamato "albopop", basato su Bootstrap v4, e gestisce i contenuti tramite file Markdown con un ricco *front matter*. Il sito è ospitato su Netlify.

## Tecnologie Principali

*   **Hugo**: Generatore di siti statici (versione 0.49.2 extended).
*   **Tema "albopop"**: Tema personalizzato basato su Bootstrap v4, incluso come *submodule* Git.
*   **Sass**: Preprocessore CSS per la gestione degli stili.
*   **PostCSS con Autoprefixer**: Utilizzato per l'elaborazione CSS e l'aggiunta automatica dei prefissi dei *vendor*.
*   **Markdown**: Formato per la scrittura dei contenuti, con *front matter* per i metadati.

## Struttura del Contenuto

I contenuti del sito sono organizzati nella cartella `content/`.

*   I file `.md` presenti direttamente in `content/` rappresentano le pagine del sito.
*   Le sottocartelle (es. `comune/`, `altrepa/`) contengono post o pagine specifiche per tipo.
*   I file `_index.md` rappresentano le pagine di elenco dei post corrispondenti.
*   Ogni file di contenuto include un *front matter* con metadati come titolo, tag, URL originali, feed RSS, link social, informazioni geografiche (regione, provincia, ISTAT, IPA, coordinate), immagine e flag di accessibilità/conformità.

## Building e Running

### Sviluppo Locale

1.  **Clonare il repository (solo la prima volta)**:
    ```bash
    git clone --recursive git@github.com:ondata/albopopTwoDotZero.git
    ```
2.  **Entrare nella cartella di progetto**:
    ```bash
    cd albopopTwoDotZero/
    ```
3.  **Lanciare il server di sviluppo**:
    ```bash
    hugo server -D
    ```
    Il sito sarà disponibile all'indirizzo `http://localhost:1313/` (verificare l'indirizzo esatto nei log della console). Le modifiche ai file sorgente ricaricheranno automaticamente la pagina.

### Generazione del Sito Statico

Per generare i file statici del sito (nella cartella `public/`):
```bash
hugo
```

### Aggiornamento del Submodule del Tema

Se la cartella del tema `themes/albopop` risulta assente o vuota:
1.  Assicurarsi di essere sul *branch* `develop`: `git checkout develop`
2.  Aggiornare il *repository* locale: `git pull`
3.  Aggiornare il *submodule*: `git submodule update --init --recursive`

## Convenzioni di Sviluppo

*   **Versione Hugo**: È richiesta la versione *extended* di Hugo 0.49.2 con supporto per [Hugo Pipes](https://gohugo.io/hugo-pipes/).
*   **Styling**: I fogli di stile si trovano in `assets/sass/`. L'entry point è `main.scss`.
*   **Archiviazione Contenuti**: Per "spegnere" un comune o altra pagina di un albo, è sufficiente spostare il relativo file `.md` nella directory `content/_archivio/`, replicando la struttura originale (es. da `content/comune/accumoli.md` a `content/_archivio/comune/accumoli.md`).

## Hosting

Il sito è ospitato su Netlify, gestito tramite l'account GitHub `aborruso`.
