# Change: Add Terre del Reno Municipality

## Why

Add a new municipality page for Comune di Terre del Reno (Ferrara, Emilia-Romagna) to the AlboPOP aggregation system. This extends coverage to include this municipality's official public notices.

## What Changes

- Add new municipality content file: `content/comune/terre-del-reno.md`
- Include complete frontmatter metadata (ISTAT, IPA codes, coordinates, RSS feed)
- Configure RSS feed from GitHub source: https://aborruso.github.io/albiPOPGitHub/cdtdr/feed.xml
- Link to official albo pretorio: https://servizionline.comune.terredelreno.fe.it/mc/mc_p_ricerca.php

## Impact

- Affected specs: municipality-content (new spec documenting municipality page structure)
- Affected code: Content addition only, no code changes
- Affected files: `content/comune/terre-del-reno.md` (new)
- Geographic data: Will require regeneration via `script/extractGeoData.sh`
