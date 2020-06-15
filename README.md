# Project Overview

## FLORA: A Plant Search Application

(url of project)

## Project Description

An application that allows users to select plants by their common name to render an image, the plant's scientific name, its family name, and duration (if provided). Plants without images will display a default image.

## API and Data Sample

API: 
[Trefle](https://trefle.io/)

Code Snippet:

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

[FLORA Wireframe](https://wireframe.cc/VQ6qlH)

### MVP/PostMVP
#### MVP 

- Use Axios to make a request to the Trefle API for plant information. 
- Create a drop-down selection that allows user to select species input.
- Render a search result that includes one image, the plant's common name, its scientific name, family name and duration (if available).
- Plants without images will display a default image for a consistent result appearance.  
- Deploy site using GitHub Pages for live access. 

#### PostMVP  
- Create a media query for mobile devices. 
- Allow for location-specific search criteria that allows users to see native plants for their local soil type. 
- Include a local storage capability so users can save plants they like in a list.
- Refine styling


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 8| Project Overview (No project URL, snippet or Change Log | COMPLETE
|June 9| Basic HTML, Make API Request, Begin JS | COMPLETE
|June 10| Have selectable input with results, Begin CSS | COMPLETE
|June 11| Finish JS, Finish Basic CSS, Finish MVP, Update Project Overview,  | COMPLETE
|June 12| Post MVP: 1. Media queries 2. Soil-based filter 3. Explore local storage, 4. Refine Styling.| 1 & 4 COMPLETE
|June 15| Present | Incomplete

## Priority Matrix

[FLORA Priority Matrix](https://app.conceptboard.com/board/ug3x-zmum-c2md-ibp1-conb)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Find API | H | 4 hrs | 2 hrs | 2 hrs|
| Base HTML | H | 2 hr | 1 hr | 1 hr |
| Build Input/Search Bar | H | 3 hrs| 0.5 hr  | 0.5 hr |
| Working with API | H | 5 hrs | 5 hrs | 5 hrs |
| Build Results | H | 3 hrs | 23 hrs | 23 hrs |
| Styling with Flexbox | H | 4 hrs | 2 hrs | 2 hrs |
| Other CSS (fonts, background, color-scheme etc.) | H | 4 hrs | 3 hrs | 3 hrs |
| Post-MVP: Media query | H | 3 hrs | 1 hr | 1 hr |
| Post-MVP: Soil Filter | H | 4 hrs | 0 hr| 0 hr|
| Post-MVP: Local Storage | H | 6 hrs | 0 hr| 0 hr|
| Post-MVP: Refine CSS | H | 2 hrs| | 2 hrs | 2 hrs |
| Total | H | 40 hrs| 43.5 hrs | 43.5 |

## Code Snippet

//The code below calls the api with a specific plant id that's been selected by the user, and in turn allows for the individual plant's data to be accessed.  I chose this snippet because figuring out how to first create a dropdown by name and then access the plant by its ID (the categorical currency of my api) was a challenge. However, it forced me to get well acquanited with the way my api works and is organized, and created the opportunity for a firmer understanding of navigating and accessing its data. It also represents collaboration, especially the default image ternary, which was concieved with the help of Lia and Jeremy. 

async function getPlant(plantId) {
  try {
    let response = await axios.get(`https://trefle.io/api/plants/${plantId}?token=TVNmand1NnNNOUx5ZjBMcW1hbzlUUT09`)

    let getScientificName = response.data.scientific_name
    let getCommonName = response.data.common_name
    let getFamilyName = response.data.family_common_name
    let getDuration = response.data.duration
    let getImage = response.data.images

    apiImageURL = getImage[0]? getImage[0].url : "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1090&q=80"
    
    removeScientificName()
    removeCommonName()
    removePlantImage()

    commonName(getCommonName)
    scientificName(getScientificName)
    familyName(getFamilyName)
    duration(getDuration)
    plantImage(apiImageURL)
    
  } catch (error) {
    console.log(`Error: ${error}`)
  }
    
}
    


## Change Log

- Search Bar changed to dropdown selection to prompt users with options.
- Removed "Results" title, redundant.
- Updated information displayed to Family Common Name and Duration to provide a more taxonomic focus. 
- Added a default image condidtion if an image is unavailable in order to keep the appearance of the results content consistent.

