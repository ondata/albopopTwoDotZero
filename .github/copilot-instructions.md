# AlboPOP 2.0 - Copilot Instructions

AlboPOP is a Hugo-based static site that tracks Italian public administration bulletin boards ("albi pretori"). This project creates RSS feeds and social media accounts for transparent access to official publications.

## Architecture Overview

- **Hugo Static Site Generator**: Uses Hugo extended version with Hugo Pipes for SCSS compilation
- **Custom Theme**: `themes/albopop/` as git submodule (Bootstrap 4 based)
- **Content Types**: Three main content sections - `comune/` (municipalities), `altrepa/` (other PAs), `post/` (blog)
- **Deployment**: Hosted on Netlify, auto-deploys from `develop` branch to `gh-pages`

## Critical Development Workflows

### Setup and Development
```bash
# Clone with submodules (theme is a submodule)
git clone --recursive git@github.com:ondata/albopopTwoDotZero.git

# Start development server
hugo server -D  # serves at http://localhost:1313/

# Build for production
hugo  # outputs to public/ directory
```

### Branch Strategy
- Work on `develop` branch (default)
- Production auto-deploys from `develop` to `gh-pages` via Netlify
- Never manually commit `public/` folder (handled by CI)

## Content Organization Patterns

### Municipality/PA Content Structure
Use archetypes in `archetypes/comune.md` and `archetypes/altrepa.md` for new entries:

**Required Frontmatter Fields:**
- `istat`: ISTAT code for the municipality
- `ipa`: IPA code (lookup at indicepa.gov.it)
- `regione`/`provincia`: Geographic classification
- `lat`/`lng`: Coordinates for mapping
- `accessible`: `false` if documents are PDF scans
- `standard`: `true` if RSS follows albopop.it/specs/
- `official`: `true` if PA officially endorsed the feed

### Content Archival Pattern
To "disable" a municipality: move from `content/comune/[name].md` to `content/_archivio/comune/[name].md`

## Styling and Asset Pipeline

### SCSS Variables from Config
`assets/sass/main.scss` imports colors/fonts from `config.toml`:
```scss
$red: {{ .Site.Params.Colors.red }};  // Template syntax in SCSS
```

### Key Configuration
`config.toml` defines:
- Color scheme in `[params.colors]`
- Typography in `[params.fonts]`
- Taxonomies: `regione` and `provincia` for geographic filtering
- Labels system for accessibility/standard compliance badges

## Data Processing Scripts

### Geographic Data Extraction
`script/extractGeoData.sh` processes frontmatter to generate `geodata.json`:
- Requires `miller` and `yq` tools
- Extracts lat/lng/title from all content files
- Used for mapping functionality

## Layout System

### Template Hierarchy
- `layouts/baseof.html`: Base template with Bootstrap 4 CDN
- Content type layouts in `layouts/[type]/`
- Override theme templates by matching path structure

### Custom Outputs
`config.toml` enables JSON output for API-like access:
```toml
[outputs]
    page = ["HTML","JSON"]
```

## Common Tasks

### Adding New Municipality
1. Copy `archetypes/comune.md` to `content/comune/[name].md`
2. Fill all required frontmatter fields (especially istat, ipa, coordinates)
3. Test locally with `hugo server -D`

### Theme Updates
```bash
git submodule update --init --recursive  # if theme folder is empty
```

### Geographic Data Regeneration
```bash
cd script/
./extractGeoData.sh  # generates geodata.json from content frontmatter
```

## Key Dependencies
- Hugo Extended (0.49.2+ with SCSS support)
- Bootstrap 4.1.3 (CDN)
- jQuery 3.3.1
- Custom theme as git submodule

## Integration Points
- RSS feeds generated per municipality/PA
- Social media automation (Twitter, Telegram, Facebook)
- Geographic mapping via extracted coordinate data
- Netlify deployment pipeline
