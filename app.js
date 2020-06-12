let appendPlant = document.getElementById('append-plant')
// CREATE DROPDOWN ------------------------------------------------
getDropdown = async () => {
  try {
    const base_url = 'https://trefle.io/api/species?page_size=2000&token=TVNmand1NnNNOUx5ZjBMcW1hbzlUUT09'

    const response = await axios.get(`${base_url}`)
    console.log(response)
    const allPlants = response.data

    //Retrieving the plant names for the dropdown
  
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
async function getPlant(plantId) {
  try {
    let response = await axios.get(`https://trefle.io/api/plants/${plantId}?token=TVNmand1NnNNOUx5ZjBMcW1hbzlUUT09`)
    
    let getScientificName = response.data.scientific_name
    let getCommonName = response.data.common_name
    let getImage = response.data.images
    if (getImage.length === 0) {
      console.log('WORKING')
      // plantImage()
      const image = document.createElement('img')
      appendPlant.append(image)
    }
    else {
      let getImage = response.data.images[0]
      plantImage(getImage)
    }
    console.log("LOOK HERE", getImage)

    console.log(getScientificName)
    console.log(response)
    removeScientificName()
    removeCommonName()
    
    
    // scientificName(getScientificName)
    // commonName(getCommonName)
    
  } catch (error) {
    console.log(`Error: ${error}`)
  }
    
}

//Render the selected plant's common name to the DO ----------
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
function plantImage(image) {
  const img = document.createElement('img')
  console.log(img)
  // img.src = image
  // img.style.width = '300px'
  // img.style.height = 'auto'
  // let appendPlant = document.querySelector('#append-plant')
  console.log(appendPlant)
  appendPlant.appendChild(img)
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