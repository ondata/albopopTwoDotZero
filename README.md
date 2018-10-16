# garagealbopop

Il nuovo alboPOP è basato su [hugo](https://gohugo.io) un _site static generator_ scritto in GO.

## Installare hugo

È multi piattaforma e si installa così come indicato qui [https://gohugo.io/getting-started/installing/](https://gohugo.io/getting-started/installing/).

### Crezione sito di base

Un nuovo sito "vuoto" si crea così:

    hugo new site albopopTwoDotZero

Poi si può installare un **tema**:

```
cd themes
git clone https://github.com/AngeloStavrow/indigo.git
```

Poi copiare il file di configurazione `config.toml.example` presente (in questo caso) nella cartella `./themes/indigo` nella radice del sito, cancellare il file `config.toml` già presente e rinominare `config.toml.example` in `config.toml`.