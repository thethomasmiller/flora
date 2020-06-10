

getDropdown = async () => {
  try {
    let base_url = 'https://trefle.io/api/plants?page_size=1000&token=TVNmand1NnNNOUx5ZjBMcW1hbzlUUT09'

    let response = await axios.get(`${base_url}`)
    // console.log(response)
    let plantList = response.data
    // console.log(plantList)
    let plantNames = new Set(plantList.map(seed => {
    if (seed.common_name !== null || undefined)
      { return seed.common_name }
    }))
    let completePlants = plantList.filter((seed) => {
        return seed.common_name !== null && seed.author !== null
      })
    console.log(completePlants)
      
    // console.log(plantNames)

    const select = document.querySelector('select')
    plantNames.forEach((plant) => {
      const option = document.createElement('option')
      option.value = `${plant}`
      option.text = `${plant}`
      select.append(option)
    })
    
  } catch (error) {
    console.log(`This is your error: ${error}`)
  }
}
getDropdown()


// Add Submit Function ////////////////////////////////////////////////////


function plantValue(e) {
  e.preventDefault()
  const getDropdown = document.querySelector('#select-plant')
  const selectValue = getDropdown.value
  console.log(selectValue)
  getPlant(selectValue)
}

const form = document.querySelector('form')
form.addEventListener('submit', plantValue)

// Add ////////////////////////////////////////////////////



async function getPlant(plantId) {
  try {
    let response = await axios.get(`https://trefle.io/api/plants/${plantId}?token=TVNmand1NnNNOUx5ZjBMcW1hbzlUUT09`)
    console.log(response)
  
  
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}







// CODE GRAVEYARD 
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