// CREATE DROPDOWN ------------------------------------------------

getDropdown = async () => {
  try {
    const base_url = 'https://trefle.io/api/species?page_size=2000&token=TVNmand1NnNNOUx5ZjBMcW1hbzlUUT09'

    const response = await axios.get(`${base_url}`)
    console.log(response)
    const allPlants = response.data

    //Retrieve the plant names for the dropdown
  
    let namedPlants = allPlants.filter((plant) => {
        return plant.common_name !== null && plant.is_main_species
    })
    let plantNames = new Set(namedPlants.map(plant => {
      return plant.common_name
    }))
    console.log(namedPlants)
    console.log(plantNames)
 
    const select = document.querySelector('select')
    namedPlants.forEach((plant) => {
      const option = document.createElement('option')
      option.value = `${plant.id}`
      option.text = `${plant.common_name}`
      select.append(option)
    })
    
  } catch (error) {
    console.log(`This is your error: ${error}`)
  }
}
getDropdown()


//Submit Selected Plant on Click --------------------------------

function plantValue(e) {
  e.preventDefault()
  const getDropdown = document.querySelector('#select-plant')
  const selectValue = getDropdown.value

  console.log(`This is the selected plant's ID ${selectValue}`)
  getPlant(selectValue)
}

const form = document.querySelector('form')
form.addEventListener('submit', plantValue)

//Get Plant Id --------------------------------------------------
// let appendPlant = document.querySelector('#append-plant')
let apiImageURL = "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1090&q=80"

async function getPlant(plantId) {
  try {
    let response = await axios.get(`https://trefle.io/api/plants/${plantId}?token=TVNmand1NnNNOUx5ZjBMcW1hbzlUUT09`)
    console.log(response)

    let getScientificName = response.data.scientific_name
    let getCommonName = response.data.common_name
    let getImage = response.data.images
    console.log(getImage[0])
    apiImageURL = getImage[0]? getImage[0].url : "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1090&q=80"
    
    // if (getImage === 0) {
    //   // console.log('WORKING')  
    //   plantImage(defaultPic)
    // }
    // else {
    //   plantImage(apiImageURL)
    // }
    // console.log(apiImageURL)
    // console.log(getScientificName)
    
    // if (apiImageURL) { plantImage(apiImageURL) }
    // else {
    //   console.log("WHAT YOU GET")
    // }
    
    
    
    
    removeScientificName()
    removeCommonName()
    removePlantImage()

    scientificName(getScientificName)
    commonName(getCommonName)
    plantImage(apiImageURL)
    
  } catch (error) {
    console.log(`Error: ${error}`)
  }
    
}

//Render the selected plant's common name to the DOM ----------
function commonName(getCommonName) {
  const comName = document.createElement('p')
  comName.innerText = getCommonName
  comName.setAttribute('id', 'common-name')
  document.querySelector('#append-plant').append(comName)
}
//Render the selected plant's scientific name to the DOM --------
function scientificName(getScientificName) {
  const sciName = document.createElement('p')
  sciName.innerText = getScientificName
  sciName.setAttribute('id','scientific-name')
  document.querySelector('#append-plant').append(sciName)
}
//Render image of selected plant to the DOM ----------------------
function plantImage(apiImageURL) {
  console.log(apiImageURL)
  let img = document.createElement('img')
  console.log(img)
  let div = document.querySelector('#plant-image-container')
  div.append(img)
  console.log(document.querySelector('#plant-image-container'))
  img.src = apiImageURL
  img.style.width = '300px'
  img.style.height = 'auto'
  // img.setAttribute('id', 'plant-image')
 }

//Remove the previously selected plant's Common Name -------------
function removeCommonName() {
  const oldCommonName = document.querySelector('#append-plant')
  while (oldCommonName.lastChild) {
    oldCommonName.removeChild(oldCommonName.lastChild)
  }
}
//Remove the previously selected plant's Scientific Name ----------
function removeScientificName() {
  const oldScientificName = document.querySelector('#append-plant')
  while (oldScientificName.lastChild) {
    oldScientificName.removeChild(oldScientificName.lastChild)
  }
}
function removePlantImage() {
  const oldPlantImage = document.querySelector('#plant-image-container')
  while (oldPlantImage.lastChild) {
    oldPlantImage.removeChild(oldPlantImage.lastChild)
  }
}























// CODE GRAVEYARD 

// const plantNames = new Set(allPlants.map(plant => {
    // if (plant.common_name !== null && plant.common_name !== undefined)
    //   { return plant.common_name}
    // }))
    // console.log(plantNames)

// async function getID(plantid) {
//   try {
//   } catch (error) {
//     console.log(`Error: ${error}`)
//   }
// }


// (plantList[i].common_name !== 'null')

// for (i = 0; i < 100; i++) {
//   if (plantList.filter(plant)) {
//     plantInfo = plantList[i].common_name
//   }