## Context

Il progetto è un sito statico Hugo con contenuti in Markdown e frontmatter YAML. I feed RSS sono definiti nel campo `rss` di ogni pagina pubblica (comuni, altre PA, ufficiali). Attualmente non esiste un controllo automatico e la manutenzione è manuale. È richiesto uno script manuale che verifichi la raggiungibilità dei feed e, quando un feed non risponde con HTTP 200 dopo 3 tentativi (5s di attesa tra i tentativi), imposti `draft: true` nel frontmatter della pagina corrispondente. Deve esistere una lista persistente di feed da ignorare (inizialmente vuota) e un log archiviato per ogni esecuzione.

## Goals / Non-Goals

**Goals:**
- Script manuale che scorre tutte le pagine in `content/comune/`, `content/altrepa/`, `content/ufficiale/`.
- Verifica raggiungibilità feed RSS con retry (3 tentativi, 5s di attesa) e HTTP 200 come criterio di successo.
- Impostazione `draft: true` nelle pagine con feed non raggiungibili.
- Log archiviato per esecuzione e file di esclusione persistente (vuoto all’inizio).
- Modalità `--dry-run` che esegue i controlli senza modificare i file.

**Non-Goals:**
- Scheduling automatico (cron/CI) o integrazioni con servizi esterni.
- Validazione semantica del contenuto RSS (solo raggiungibilità HTTP).
- Rimozione/spostamento dei file in `_archivio/`.

## Decisions

- **Script in `script/` con log e ignore list in `data/`:**
  - Log archiviati in `data/logs/` con timestamp per tracciabilità senza sovrascritture.
  - Ignore list in `data/rss_ignore.txt` (una URL per riga) per escludere feed “per sempre spenti”.
  - Alternativa: collocare tutto in `script/`; scelta `data/` per separare dati/config da codice.

- **Parsing frontmatter con strumenti standard (bash + awk + yq):**
  - Estrazione del blocco YAML e riscrittura in-place con `draft: true`.
  - Alternativa: usare Python con librerie YAML; evitata per non introdurre dipendenze non garantite.

- **Verifica HTTP con `curl`:**
  - `curl -L` per seguire redirect; HTTP 200 è considerato “raggiungibile”.
  - Retry gestito nello script (3 tentativi, attesa 5s) con short-circuit su 404. Alternative come `curl --retry` non garantiscono la logica richiesta su codice non-200.
- **Opzione `--dry-run`:**
  - Consente di simulare l’esecuzione senza applicare `draft: true`, mantenendo log e summary identici.
  - Alternativa: variabile d’ambiente; scelta CLI per immediatezza d’uso.

## Risks / Trade-offs

- **[Rischio] Feed risponde con 200 ma contenuto vuoto o non RSS** → Mitigazione: fuori scope per ora; eventuale estensione futura.
- **[Rischio] Modifica del frontmatter non robusta su formati non standard** → Mitigazione: limitare l’azione a file con frontmatter YAML ben formato e loggare gli errori.
- **[Trade-off] Script bash + yq può dipendere dall’ambiente** → Mitigazione: documentare prerequisiti (`curl`, `yq`).
