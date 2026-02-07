## Why

Oggi non esiste un controllo sistematico che segnali feed RSS non raggiungibili, con il rischio di mantenere pubbliche pagine che puntano a sorgenti inattive. Serve una verifica automatica per mantenere affidabilità e trasparenza del catalogo.

## What Changes

- Aggiunta di uno script manuale che controlla la raggiungibilità dei feed RSS di tutte le pagine (comuni, altre PA, ufficiali) e marca in `draft: true` le pagine con feed non raggiungibili.
- Log archiviato dell’esecuzione e lista di esclusione persistente (feed da non controllare più) inizialmente vuota.
- Retry policy: se il feed non risponde con HTTP 200, ritenta fino a 3 volte con attesa di 5 secondi tra i tentativi.

## Capabilities

### New Capabilities
- `rss-reachability-check`: Verifica raggiungibilità dei feed RSS, applica `draft: true` alle pagine non raggiungibili, gestisce retry, log e lista di esclusione.

### Modified Capabilities

## Impact

- Nuovo script in `script/` (esecuzione manuale).
- Lettura/scrittura sui file in `content/` per aggiornare il frontmatter.
- Nuovo file di esclusione persistente (inizialmente vuoto) e file di log archiviato.
