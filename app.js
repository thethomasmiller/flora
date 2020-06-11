
// CREATE DROPDOWN ------------------------------------------------
getDropdown = async () => {
  try {
    const base_url = 'https://trefle.io/api/species?page_size=259&token=TVNmand1NnNNOUx5ZjBMcW1hbzlUUT09'

    const response = await axios.get(`${base_url}`)
    console.log(response)
    const allPlants = response.data
    // console.log(plantList)

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

  console.log(`This is my ${selectValue}`)
  getPlant(selectValue)
}

const form = document.querySelector('form')
form.addEventListener('submit', plantValue)

//Get Plant Id --------------------------------------------------

async function getPlant(plantId) {
  try {
    let response = await axios.get(`https://trefle.io/api/plants/${plantId}?token=TVNmand1NnNNOUx5ZjBMcW1hbzlUUT09`)
    
    let getScientificName = response.data.scientific_name
    let getCommonName = response.data.common_name
    
    console.log(getScientificName)
    
    removeCommonName
    removeScientificName()
    commonName(getCommonName)
    scientificName(getScientificName)
   
  } catch (error) {
    console.log(`Error: ${error}`)
  }
    
}
//Render the selected plant's scientific name to the DOM --------
function commonName(getCommonName) {
  const comName = document.createElement('p')
  comName.innerText = getCommonName
  document.querySelector('#append-plant').append(comName)
}

function scientificName(getScientificName) {
  const sciName = document.createElement('p')
  sciName.innerText = getScientificName
  document.querySelector('#append-plant').append(sciName)
}

function removeCommonName() {
  const oldCommonName = document.querySelector('#append-plant')
  while (oldCommonName.lastChild) {
    oldScientificName.removeChild(oldCommonName.lastChild)
  }
}



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