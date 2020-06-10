

getPlant = async () => {
  try {
    let base_url = 'https://trefle.io/api/plants?page_size=8000&token=TVNmand1NnNNOUx5ZjBMcW1hbzlUUT09'

    let response = await axios.get(`${base_url}`)
    console.log(response)
    let plantList = response.data
    console.log(plantList)
    let plantNames= new Set(plantList.map(seed=>{return seed.common_name}))
    console.log(plantNames)
    
  } catch (error) {
    console.log(`This is your error: ${error}`)
  }
}
getPlant()


// (plantList[i].common_name !== 'null')

// for (i = 0; i < 100; i++) {
//   if (plantList.filter(plant)) {
//     plantInfo = plantList[i].common_name
//   }