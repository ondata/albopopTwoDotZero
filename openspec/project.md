# Project Context

## Purpose

AlboPOP 2.0 aggregates and makes accessible Italian municipal public notices (albi pretoriali) from municipalities and other public administrations across Italy. The project:

- Creates RSS feeds for transparent access to official publications
- Manages social media accounts (Twitter, Telegram, Facebook) for automated notifications
- Tracks compliance levels of municipalities with publication standards
- Provides geographic mapping and search functionality
- Promotes civic transparency and open data initiatives

**Production URL:** https://albopop.it
**Organization:** OnData
**License:** CC-BY 4.0

## Tech Stack

- **Static Site Generator:** Hugo 0.49.2 Extended (with Hugo Pipes and SCSS support)
- **Theme:** Custom Hugo theme (git submodule: `themes/albopop/`)
- **Styling:** SASS/SCSS with Hugo Pipes compilation
- **CSS Framework:** Bootstrap 4.1.3 (CDN)
- **JavaScript:** jQuery 3.3.1 (minimal usage)
- **CSS Post-processing:** Autoprefixer, PostCSS
- **Content Format:** Markdown (.md files) with YAML frontmatter
- **Data Formats:** YAML, JSON, CSV
- **Configuration:** TOML (config.toml)
- **Package Management:** npm (minimal - dev dependencies only)
- **Deployment:** Netlify (auto-deploy from `develop` branch)
- **Shell Scripts:** Bash (for geodata extraction)
- **CLI Tools:** miller (mlr), yq (for data processing)

## Project Conventions

### Code Style

**File Naming:**
- Lowercase, kebab-case for all files
- Content files: `content/comune/nome-comune.md`
- Archive structure mirrors active structure: `content/_archivio/comune/nome-comune.md`

**Markdown:**
- GitHub-flavored markdown
- YAML frontmatter required for all content files
- Italian language for content and metadata

**SCSS:**
- Entry point: `assets/sass/main.scss`
- Variables imported from `config.toml` via Hugo template syntax
- Component-based organization (header.scss, footer.scss, buttons.scss, etc.)
- Hugo Pipes handles compilation and minification

**Content Language:**
- Primary language: Italian (`languageCode: "it"`)
- Commit messages: Italian or English (concise)
- Documentation: Italian preferred, English acceptable

### Architecture Patterns

**Content Organization:**
- **Taxonomies:** Two-level geographic classification (regione, provincia)
- **Content Types:**
  - `comune/` - Municipalities
  - `altrepa/` - Other public administrations
  - `ufficiale/` - Official administrations
  - `post/` - Blog posts
- **Index Files:** `_index.md` controls category list pages
- **Archival Pattern:** Move files to `_archivio/` to disable without deletion

**Template Hierarchy:**
- Base template: `layouts/baseof.html`
- Type-specific layouts: `layouts/[type]/`
- Override theme templates by path matching
- Partials for reusable components: `layouts/partials/`

**Data Flow:**
- Frontmatter → Hugo processing → HTML/JSON output
- Frontmatter → extractGeoData.sh → geodata.json → mapping
- Config.toml → SCSS variables → compiled CSS

**Output Formats:**
- HTML (primary)
- JSON (API-like access via `[outputs]` config)
- RSS feeds (per municipality/PA)

**Theme as Submodule:**
- Separate repository: https://github.com/ondata/albopopTwoDotZero-theme/
- Bootstrap 4-based
- Update with: `git submodule update --init --recursive`

### Testing Strategy

**Manual Testing:**
- Local development server: `hugo server -D`
- Visual inspection at http://localhost:1313/
- Auto-reload on file changes

**Pre-deployment Checks:**
- Hugo build succeeds without errors: `hugo`
- RSS feeds validate
- Geographic data regenerated if needed
- Theme submodule properly initialized

**No Automated Tests:**
- Static site with no custom application logic
- Reliance on Hugo's built-in validation
- Netlify build process as final validation gate

### Git Workflow

**Branch Strategy:**
- **Main branch:** `develop` (default, work here)
- **Production:** Auto-deploys from `develop` to `gh-pages` via Netlify
- **Feature branches:** Optional, merge to `develop` via PR
- **Never commit:** `public/` folder (auto-generated, handled by CI/CD)

**Commit Conventions:**
- Concise messages, Italian or English
- No strict format enforced
- Include submodule commits when theme updates

**Pull Request Flow:**
1. Create feature branch from `develop`
2. Make changes and commit
3. Open PR against `develop`
4. Review and approve
5. Netlify auto-deploys on merge

**Deployment:**
- Manual: `git subtree push --prefix public/ origin gh-pages` (legacy)
- Automated: Netlify handles build and deployment from `develop`

## Domain Context

**Italian Public Administration:**
- **Albo Pretorio:** Official bulletin board where municipalities publish legal notices
- **ISTAT Code:** National statistics institute code for municipalities
- **IPA Code:** Public Administration Index code (lookup at indicepa.gov.it)
- **Regione:** Italian regions (20 total)
- **Provincia:** Italian provinces (107 total)

**Compliance Labels:**
1. **Accessible:** PA publishes machine-readable documents (not just PDF scans)
2. **Standard:** RSS feed follows albopop.it/specs/ specifications
3. **Official:** PA has issued official resolution endorsing the feed

**Data Sources:**
- Municipal RSS feeds
- Social media integrations
- Geographic coordinate data
- IPA/ISTAT databases

**Output Channels:**
- Website (Hugo-generated HTML)
- RSS feeds (per municipality)
- Twitter accounts
- Telegram channels
- Facebook pages

## Important Constraints

**Hugo Version:**
- Locked to Hugo 0.49.2 Extended
- Still functional as of 2025-10-04
- Upgrade requires testing for breaking changes

**Theme Dependency:**
- Custom theme as git submodule
- Must be cloned recursively: `git clone --recursive`
- Theme updates require submodule management

**Build System:**
- Requires Hugo Extended (SCSS support)
- Hugo Pipes mandatory for asset compilation
- PostCSS/Autoprefixer for browser compatibility

**Content Structure:**
- Frontmatter fields are mandatory for proper functionality
- Taxonomy values must match existing regions/provinces
- Coordinates required for mapping features

**No Build Step for Development:**
- Hugo compiles on-the-fly during `hugo server -D`
- Static build only for deployment

**Italian Language First:**
- All content in Italian
- Month names, labels, UI text in Italian
- Internationalization not implemented

## External Dependencies

**Hosting and Deployment:**
- **Netlify:** Primary hosting (account: GitHub user `aborruso`)
- **GitHub Pages:** Legacy hosting target (`gh-pages` branch)
- **GitHub:** Source code repository (ondata/albopopTwoDotZero)

**CDN Resources:**
- Bootstrap 4.1.3 (CSS framework)
- jQuery 3.3.1 (minimal JavaScript)
- Font CDNs: Montserrat, Georgia

**Data Sources:**
- IndicePA (indicepa.gov.it) - IPA codes
- ISTAT - Municipality codes and statistics
- Municipal RSS feeds (hundreds of sources)

**CLI Tools (Development):**
- miller (mlr) - CSV/JSON data processing
- yq - YAML/JSON querying
- Hugo Extended - Static site generation

**External Services:**
- Twitter API (social media automation)
- Telegram Bot API (channel management)
- Facebook Graph API (page updates)

**Theme Repository:**
- Git submodule: https://github.com/ondata/albopopTwoDotZero-theme/
- Bootstrap 4-based custom theme
- Separate maintenance and versioning
