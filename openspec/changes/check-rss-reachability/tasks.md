## 1. Preparazione Dati e Configurazione

- [x] 1.1 Definire il percorso e creare il file `data/rss_ignore.txt` (vuoto) e la directory log `data/logs/`
- [x] 1.2 Definire il formato del catalogo feed (una URL per riga) e la posizione del file (es. `data/rss_catalog.txt`)

## 2. Estrazione Feed

- [x] 2.1 Implementare estrazione dei campi `rss` dalle pagine in `content/comune/`, `content/altrepa/`, `content/ufficiale/`
- [x] 2.2 Scrivere il catalogo feed su file dati

## 3. Verifica Raggiungibilità

- [x] 3.1 Implementare check HTTP con `curl` e gestione redirect
- [x] 3.2 Implementare retry: 3 tentativi, attesa 5 secondi tra tentativi
- [x] 3.3 Applicare l’ignore list escludendo i feed presenti
- [x] 3.4 Gestire 404 senza retry

## 4. Aggiornamento Contenuti

- [x] 4.1 Mappare feed a file sorgenti e aggiornare frontmatter con `draft: true` per feed non raggiungibili
- [x] 4.2 Gestire errori di parsing frontmatter e loggare i casi problematici

## 5. Logging e Documentazione

- [x] 5.1 Generare un log per esecuzione con timestamp e summary (raggiungibili/non raggiungibili)
- [x] 5.2 Documentare lo script e i prerequisiti minimi in README o in un file dedicato
- [x] 5.3 Aggiungere opzione `--dry-run` e documentarla
