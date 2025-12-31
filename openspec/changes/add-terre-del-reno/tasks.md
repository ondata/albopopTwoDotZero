# Implementation Tasks

## 1. Content Creation
- [ ] 1.1 Create `content/comune/terre-del-reno.md` file
- [ ] 1.2 Add frontmatter with all required fields
- [ ] 1.3 Verify ISTAT code: 038028
- [ ] 1.4 Verify IPA code: cdtdr
- [ ] 1.5 Add geographic coordinates (lat: 44.79362049063872, lng: 11.39038755537125)

## 2. Metadata Configuration
- [ ] 2.1 Set taxonomies: regione=Emilia-Romagna, provincia=Ferrara
- [ ] 2.2 Configure RSS feed URL: https://aborruso.github.io/albiPOPGitHub/cdtdr/feed.xml
- [ ] 2.3 Set official albo URL: https://servizionline.comune.terredelreno.fe.it/mc/mc_p_ricerca.php
- [ ] 2.4 Set author: andrea.borruso@gmail.com (Andrea Borruso)
- [ ] 2.5 Set accessibility flags (accessible, standard, official)

## 3. Validation
- [ ] 3.1 Test with `hugo server -D` to verify page renders correctly
- [ ] 3.2 Verify page accessible at http://localhost:1313/comune/terre-del-reno/
- [ ] 3.3 Check RSS feed link works
- [ ] 3.4 Verify taxonomies (region/province) display correctly

## 4. Geographic Data Update
- [ ] 4.1 Run `cd script/ && ./extractGeoData.sh` to regenerate geodata.json
- [ ] 4.2 Verify new municipality appears in geodata.csv
- [ ] 4.3 Verify coordinates are correct in generated data

## 5. Final Checks
- [ ] 5.1 Build static site with `hugo` to ensure no errors
- [ ] 5.2 Verify frontmatter follows archetype structure
- [ ] 5.3 Check that municipality appears in Emilia-Romagna region listing
