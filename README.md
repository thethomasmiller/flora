# Project Overview

## FLORA: A Plant Search Application

(url of project)

## Project Description

An application that allows users to search plants by their common name to render an image, the plant's scientific name, its drought tolerance, and its commercial availability.


```json
{
        "author": null,
        "bibliography": null,
        "common_name": "whitebristle cottongrass",
        "complete_data": false,
        "family_common_name": "Sedge family",
        "id": 134784,
        "is_main_species": true,
        "link": "http://trefle.io/api/plants/134784",
        "main_species_id": null,
        "scientific_name": "Eriophorum altaicum",
        "slug": "eriophorum-altaicum",
        "sources": [
            {
                "last_update": "2019-01-11T10:11:01",
                "name": "USDA",
                "source_url": "https://plants.usda.gov",
                "species_id": 134784
            }
        ],
        "status": "Unknown",
        "synonym": false,
        "type": "species",
        "year": null
    },
    {
        "author": null,
        "bibliography": null,
        "common_name": "manystem woolly sunflower",
        "complete_data": false,
        "family_common_name": "Aster family",
        "id": 134863,
        "is_main_species": true,
        "link": "http://trefle.io/api/plants/134863",
        "main_species_id": null,
        "scientific_name": "Eriophyllum multicaule",
        "slug": "eriophyllum-multicaule",
        "sources": [
            {
                "last_update": "2019-01-11T10:11:09",
                "name": "USDA",
                "source_url": "https://plants.usda.gov",
                "species_id": 134863
            }
        ],
        "status": "Unknown",
        "synonym": false,
        "type": "species",
        "year": null
    }
```

## Wireframes
[FLORA Wireframe] (https://wireframe.cc/VQ6qlH)

### MVP/PostMVP
#### MVP 

- Use Axios to make a request to the Trefle API for plant information. 
- Create a search bar that recieves user input.
- Render a search result that includes one image, the plant's common name, its scientific name, commericial availability and drought tolerance. 
-Deploy site using GitHub Pages for live access. 

#### PostMVP  
-Create a media query for mobile devices. 
-Allow for location-specific search criteria that allows users to see native plants for their location. 
-Include a local storage capability so users can save plants they like in a list.
-Refine styling


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 8| Project Overview | Incomplete
|June 9| Basic HTML, Make API Request, Begin JS | Incomplete
|June 10| Finish JS, Have searchable input with results, Begin CSS | Incomplete
|June 11| Finish Basic CSS, Finish MVP | Incomplete
|June 12| Post MVP: Media queries, Location-based filter, Explore local storage, Refine Styling.| Incomplete
|June 15| Present | Incomplete

## Priority Matrix

[FLORA Priority Matrix] (https://app.conceptboard.com/board/ug3x-zmum-c2md-ibp1-conb)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Find API | H | 4hrs | 2hrs | 2 hrs|
| Base HTML | H | 2hr | | |
| Build Input/Search Bar | H | 3hrs| | |
| Working with API | H | 5hrs | | |
| Build Results | H | 3 hrs | | |
| Styling with Flexbox | H | 4hrs | | |
| Other CSS (fonts, background, color-scheme etc.) | H | 4hrs | | |
| Post-MVP: Media query | H | 3 hrs | | |
| Post-MVP: Location Filter | H | 4hrs | | |
| Post-MVP: Local Storage | H | 6hrs | | |
| Post-MVP: Refine CSS | H | 2 hrs| | | |
| Total | H | | | |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  