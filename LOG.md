## 2026-09-10
- Deploy Netlify fermi dal passaggio all'immagine Ubuntu Noble: `mise` non installa hugo-extended 0.49.2 per un checksum errato nel registry aqua (il tarball scaricato è integro, verificato)
- Ubuntu Focal non è più selezionabile, quindi Hugo si installa dal build command in `netlify.toml`; richiede la rimozione di `HUGO_VERSION` dalle env var del progetto
- Da fare: aggiornare Hugo a una versione recente (0.49.2 è del 2018), lavoro a parte
- Cingoli: aggiornato link albo pretorio su segnalazione del Comune (il precedente rispondeva 404)
- Cingoli: sostituito stemma con la versione fornita dall'ente (`arms` 250px, `armsBackup` 500px)
- Corretto `info@albopo.it` in `info@albopop.it` nel footer
- Il feed RSS di Cingoli (ricostruzionetrasparente.it) è fermo al 19/09/2021: da decidere che farne

## 2025-12-31
- Aggiunto comune di Terre del Reno (Ferrara, Emilia-Romagna)
- Creato `content/comune/terre-del-reno.md` con metadati completi
- ISTAT: 038028, IPA: cdtdr
- Feed RSS: https://aborruso.github.io/albiPOPGitHub/cdtdr/feed.xml
- Creata specifica OpenSpec per struttura contenuti comuni
- Aggiunto CLAUDE.md con documentazione progetto per Claude Code
- Rimosse dipendenze npm obsolete non usate (autoprefixer, postcss-cli)
- Risolte 30 vulnerabilità npm (7 critical, 11 high, 10 moderate, 2 low)
- Hugo Pipes gestisce compilazione SCSS autonomamente, PostCSS non necessario

## 2025-08-22
- Creato il file `monterotondo.md` per il comune di Monterotondo in `content/comune/`.
