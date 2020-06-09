

getPlant = async () => {
  try {
    let response = await axios.get('https://trefle.io/api/plants?page_size=7775&token=TVNmand1NnNNOUx5ZjBMcW1hbzlUUT09')
    let plants = response.data
    console.log(response)
  } catch (error) {
    console.log(`This is your error: ${error}`)
  }
}
getPlant()