
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AlboPOP 2.0 is a Hugo-based static site that aggregates Italian municipal public notices (albi pretoriali) from municipalities and other public administrations. The site creates RSS feeds and social media accounts for transparent access to official publications.

**Production URL:** https://albopop.it
**Deployment:** Netlify (auto-deploys from `develop` branch)
**Language:** Italian

## Development Commands

### Setup
```bash
# Clone with submodules (theme is a git submodule)
git clone --recursive git@github.com:ondata/albopopTwoDotZero.git

# If theme folder is empty after cloning
git submodule update --init --recursive
```

### Development Server
```bash
# Start development server (serves at http://localhost:1313/)
hugo server -D

# The page auto-reloads on file changes
# Check console output for exact URL
```

### Build
```bash
# Generate static files to public/ directory
hugo

# Note: Do NOT commit the public/ folder - handled by CI/CD
```

### Geographic Data Processing
```bash
# Regenerate geodata.json from content frontmatter
cd script/
./extractGeoData.sh

# Requires: miller (mlr) and yq tools
```

## Architecture

### Hugo Configuration
- **Version:** 0.49.2 Extended (with Hugo Pipes and SCSS support)
- **Theme:** `themes/albopop/` (git submodule from separate repository)
- **Main Branch:** `develop` (work here, not `main`)
- **Build System:** Hugo Pipes for SCSS compilation
- **CSS Post-processing:** Autoprefixer via PostCSS

### Directory Structure

```
content/               # All markdown content
├── comune/           # Municipality pages
├── altrepa/          # Other public administration pages
├── ufficiale/        # Official administration pages
├── post/             # Blog posts
├── _archivio/        # Archived/disabled content
└── *.md              # Site pages (chi-siamo, mappa, etc.)

layouts/              # Hugo template overrides
├── _default/         # Default templates
├── partials/         # Reusable template components
├── regione/          # Region taxonomy templates
├── provincia/        # Province taxonomy templates
└── index.html        # Homepage

assets/sass/          # SCSS stylesheets
├── main.scss         # Entry point, imports all others
└── *.scss            # Component stylesheets

static/               # Static files (served as-is)
data/                 # Hugo data files (YAML, CSV, JSON)
themes/albopop/       # Git submodule - custom theme
script/               # Utility scripts
```

### Content Architecture

**Content Types:**
- `comune/` - Individual municipalities (classified by regione/provincia)
- `altrepa/` - Other public administrations
- `ufficiale/` - Official administrations
- `post/` - Blog posts

**Frontmatter Requirements for Municipality/PA Pages:**
- `istat`: ISTAT municipality code
- `ipa`: IPA code (lookup at indicepa.gov.it)
- `regione`/`provincia`: Geographic taxonomies
- `lat`/`lng`: Coordinates for mapping
- `accessible`: `false` if documents are PDF scans
- `standard`: `true` if RSS follows albopop.it/specs/
- `official`: `true` if PA officially endorsed the feed

**Content Archival:**
To disable a municipality/page: move from `content/comune/name.md` to `content/_archivio/comune/name.md`

### Configuration (config.toml)

**Key Settings:**
- **Taxonomies:** `regione` and `provincia` for geographic filtering
- **Color Scheme:** Defined in `[params.colors]` (red, blue, orange, etc.)
- **Typography:** `[params.fonts]` - Montserrat (titles), Georgia (paragraphs)
- **Labels System:** Three compliance badges (accessible, standard, official)
- **Outputs:** HTML + JSON per page (API-like access)
- **Permalinks:** Custom structure for altrepa and comune

### Styling System

**SCSS Variables from Config:**
`assets/sass/main.scss` imports colors and fonts from `config.toml` using Hugo template syntax:
```scss
$red: {{ .Site.Params.Colors.red }};
```

Hugo compiles SCSS to minified CSS via Hugo Pipes during build.

## OpenSpec Change Management

This project uses OpenSpec for specification-driven development.

**Before making significant changes:**
1. Read `openspec/AGENTS.md` for full workflow
2. Check existing specs: `openspec list --specs`
3. Check active changes: `openspec list`

**When to create a proposal:**
- New features/capabilities
- Breaking changes (API, schema, architecture)
- Performance optimizations that change behavior
- Security pattern updates

**Skip proposals for:**
- Bug fixes (restoring spec behavior)
- Typos, formatting, comments
- Non-breaking dependency updates

**Key Commands:**
```bash
openspec list                    # List active changes
openspec list --specs            # List specifications
openspec show [item]             # View change or spec details
openspec validate [item] --strict  # Validate proposals
openspec archive <change-id> --yes  # Archive after deployment
```

See `openspec/AGENTS.md` for complete workflow instructions.

## Branch Strategy

- **Main Branch:** `develop` (default)
- **Production:** Auto-deploys from `develop` to `gh-pages` via Netlify
- **Never commit:** `public/` folder (handled by CI/CD)
- **Theme Updates:** `git submodule update --init --recursive`

## Key Technical Details

### Hugo Template Hierarchy
- Base template: `layouts/baseof.html` (Bootstrap 4 CDN)
- Content type layouts: `layouts/[type]/`
- Override theme templates by matching path structure

### Data Files
- `data/mesi.yaml` - Month names/labels
- `data/geodata.json` - GeoJSON for mapping (generated from frontmatter)
- `data/geodata.csv` - CSV export of geographic data

### External Dependencies
- Bootstrap 4.1.3 (CDN)
- jQuery 3.3.1
- Custom theme (git submodule)
- miller (mlr) - for geodata script
- yq - for geodata script

### RSS and JSON Output
- RSS feeds generated per municipality/PA
- JSON output enabled for all pages via `[outputs]` config
- Used for social media automation (Twitter, Telegram, Facebook)

## Common Workflows

### Adding a New Municipality
1. Copy `archetypes/comune.md` to `content/comune/[name].md`
2. Fill all required frontmatter fields (istat, ipa, coordinates, taxonomies)
3. Test locally: `hugo server -D`
4. Commit and push to `develop` branch

### Updating Styles
1. Edit relevant SCSS file in `assets/sass/`
2. Hugo auto-compiles via Hugo Pipes
3. Check `config.toml` for color/font variables
4. Test with `hugo server -D`

### Theme Modifications
Theme is a separate git submodule. For major theme changes, modify the theme repository directly. For site-specific overrides, add templates to `layouts/`.

## Project Conventions

- **Content Language:** Italian
- **License:** CC-BY 4.0 Ondata
- **File Naming:** Lowercase, kebab-case
- **Markdown:** GitHub-flavored markdown
- **Commit Messages:** Concise, Italian or English
- **Index Files:** `_index.md` files control category list pages

## Notes

- Hugo version is older (0.49.2) but stable as of 2025-10-04
- Theme uses Bootstrap 4 (not the latest version)
- Netlify build process handles Hugo compilation and deployment
- Geographic data must be regenerated after adding new municipalities
