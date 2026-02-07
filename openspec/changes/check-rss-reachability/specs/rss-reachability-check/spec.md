## ADDED Requirements

### Requirement: Collect RSS feeds catalog
The system MUST extract the RSS feed URL (`rss` frontmatter) from all pages under `content/comune/`, `content/altrepa/`, and `content/ufficiale/`, and save the collected list as a project data file for reuse in checks.

#### Scenario: Build feed catalog from content
- **WHEN** the script is executed
- **THEN** it extracts all `rss` values from the target content directories and writes them to a data file (one URL per line)

### Requirement: Persist ignore list
The system MUST support a persistent ignore list of RSS feed URLs that are excluded from reachability checks.

#### Scenario: Skip ignored feed
- **WHEN** a feed URL is present in the ignore list
- **THEN** the script MUST NOT perform HTTP checks for that feed

### Requirement: Check reachability with retries
The system MUST treat a feed as reachable only when the HTTP status is 200, retrying up to 3 times with 5 seconds between attempts when the status is not 200.

#### Scenario: Feed becomes reachable after retries
- **WHEN** a feed responds with non-200 on first attempt and 200 within 3 attempts
- **THEN** the feed is marked reachable and no draft changes are applied

#### Scenario: Feed remains unreachable
- **WHEN** a feed responds with non-200 for all 3 attempts
- **THEN** the feed is marked unreachable

#### Scenario: 404 short-circuit
- **WHEN** a feed responds with HTTP 404
- **THEN** the script MUST NOT retry and proceeds with the unreachable handling

### Requirement: Mark unreachable feeds as draft
The system MUST set `draft: true` in the frontmatter of pages whose RSS feed is marked unreachable.

#### Scenario: Apply draft to page
- **WHEN** a page's RSS feed is marked unreachable
- **THEN** the page frontmatter is updated to include `draft: true`

### Requirement: Archive run log
The system MUST write an execution log for each run and preserve it as an archived file (not overwritten) including timestamps and a summary of reachable/unreachable feeds.

#### Scenario: Log archived per run
- **WHEN** the script completes
- **THEN** a new log file is created with a timestamped name and summary information

### Requirement: Manual execution only
The system MUST be runnable as a manual CLI script with no scheduling requirements.

#### Scenario: Manual run
- **WHEN** a user runs the script from the command line
- **THEN** it performs the full check workflow without requiring background services

### Requirement: Support dry-run mode
The system MUST support a `--dry-run` option that performs all checks and logging without modifying page publication state.

#### Scenario: Dry-run does not change content
- **WHEN** the script is executed with `--dry-run`
- **THEN** it performs the reachability checks and logging but does not set `draft: true` on any page
