# Municipality Content Specification

## ADDED Requirements

### Requirement: Municipality Page Structure
Municipality pages SHALL be created as markdown files in `content/comune/` directory with YAML frontmatter containing all required metadata fields.

#### Scenario: Create new municipality page
- **WHEN** adding a new municipality to AlboPOP
- **THEN** file MUST be named using lowercase kebab-case: `content/comune/[municipality-name].md`
- **AND** file MUST contain complete YAML frontmatter
- **AND** file MUST include at minimum: title, regione, provincia, istat, ipa, lat, lng

#### Scenario: Municipality file naming
- **WHEN** municipality name contains spaces or special characters
- **THEN** filename SHALL use kebab-case (e.g., "Terre del Reno" → "terre-del-reno.md")
- **AND** URL SHALL match filename structure

### Requirement: Required Frontmatter Fields
Municipality pages MUST include specific frontmatter fields for proper site functionality.

#### Scenario: Mandatory metadata fields
- **WHEN** creating municipality frontmatter
- **THEN** MUST include `title` (municipality name)
- **AND** MUST include `regione` (Italian region name)
- **AND** MUST include `provincia` (Italian province name)
- **AND** MUST include `istat` (ISTAT municipality code, numeric)
- **AND** MUST include `ipa` (IPA code from indicepa.gov.it)
- **AND** MUST include `lat` (latitude coordinate as decimal)
- **AND** MUST include `lng` (longitude coordinate as decimal)

#### Scenario: RSS and source URLs
- **WHEN** municipality has RSS feed
- **THEN** MUST include `rss` field with feed URL
- **AND** MUST include `original` field with official albo pretorio URL

#### Scenario: Compliance flags
- **WHEN** configuring municipality metadata
- **THEN** MUST include `accessible` boolean (false if PDF scans only)
- **AND** MUST include `standard` boolean (true if RSS follows albopop.it/specs/)
- **AND** MUST include `official` boolean (true if PA officially endorsed)

### Requirement: Geographic Taxonomies
Municipalities MUST be classified using Italian geographic taxonomies.

#### Scenario: Region taxonomy
- **WHEN** setting `regione` field
- **THEN** value MUST match one of the 20 Italian regions
- **AND** value MUST use proper Italian naming (e.g., "Emilia-Romagna", not "emilia-romagna")

#### Scenario: Province taxonomy
- **WHEN** setting `provincia` field
- **THEN** value MUST match Italian province name
- **AND** value MUST correspond to the specified region

### Requirement: Author and Repository Attribution
Municipality pages SHALL include author information and MAY include source repository when available.

#### Scenario: Author attribution
- **WHEN** municipality page is created
- **THEN** SHALL include `author` field with email and name
- **AND** MAY optionally include `repo` field with GitHub repository URL
- **AND** author format SHALL follow pattern: "email (Name)" or include name and contact

### Requirement: Optional Social Media Fields
Municipality pages SHALL support optional social media link fields for the albo.

#### Scenario: Social media integration
- **WHEN** municipality has social media presence
- **THEN** system SHALL accept `twitter` field with Twitter account URL
- **AND** system SHALL accept `facebook` field with Facebook page URL
- **AND** system SHALL accept `telegram` field with Telegram channel URL
- **AND** all social media fields MAY be left empty if not applicable

### Requirement: Geographic Data Generation
Geographic coordinates from municipality frontmatter SHALL be extractable for mapping functionality.

#### Scenario: Coordinate extraction
- **WHEN** new municipality is added with lat/lng coordinates
- **THEN** running `script/extractGeoData.sh` MUST regenerate `data/geodata.json`
- **AND** new municipality MUST appear in geodata.csv
- **AND** coordinates MUST be decimal format (not DMS)
