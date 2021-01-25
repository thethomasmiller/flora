// CREATE DROPDOWN ------------------------------------------------

getDropdown = async () => {
  try {
    const base_url = 'https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/species?page_size=2000&token=TVNmand1NnNNOUx5ZjBMcW1hbzlUUT09'

    const response = await axios.get(`${base_url}`)

    const allPlants = response.data

    //Retrieve the plant names for the dropdown ------------------------

    let namedPlants = allPlants.filter((plant) => {
      return plant.common_name !== null && plant.is_main_species
    })
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


//Submit Selected Plant on Click ---------------------------------

function plantValue(e) {
  e.preventDefault()
  const getDropdown = document.querySelector('#select-plant')
  const selectValue = getDropdown.value
  getPlant(selectValue)
}

const form = document.querySelector('form')
form.addEventListener('submit', plantValue)

//Get Plant Id --------------------------------------------------

async function getPlant(plantId) {
  try {
    let response = await axios.get(`https://cors-anywhere.herokuapp.com/https://trefle.io/api/plants/${plantId}?token=TVNmand1NnNNOUx5ZjBMcW1hbzlUUT09`)

    let getScientificName = response.data.scientific_name
    let getCommonName = response.data.common_name
    let getFamilyName = response.data.family_common_name
    let getDuration = response.data.duration
    let getImage = response.data.images

    apiImageURL = getImage[0] ? getImage[0].url : "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1090&q=80"

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


//Render a card for displaying plant info to the Dom ----------



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
  sciName.setAttribute('id', 'scientific-name')
  document.querySelector('#append-plant').append(sciName)
}

//Render the selected plant's family name to the DOM ------------
function familyName(getFamilyName) {
  const famName = document.createElement('p')
  famName.innerText = getFamilyName
  famName.setAttribute('id', 'family-name')
  document.querySelector('#append-plant').append(famName)
}

//Render the selected plant's duration to the DOM ---------------
function duration(getDuration) {
  const durat = document.createElement('p')
  durat.innerText = getDuration
  durat.setAttribute('id', 'duration')
  document.querySelector('#append-plant').append(durat)
}

//Render image of selected plant to the DOM ----------------------
function plantImage(apiImageURL) {
  let img = document.createElement('img')
  let div = document.querySelector('#plant-image-container')
  div.append(img)
  img.src = apiImageURL
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

//Remove previously selected plant's Image ------------------------
function removePlantImage() {
  const oldPlantImage = document.querySelector('#plant-image-container')
  while (oldPlantImage.lastChild) {
    oldPlantImage.removeChild(oldPlantImage.lastChild)
  }
}




















