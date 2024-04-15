const axios = require('axios')
const inquirer = require('inquirer')

const baseURL = 'https://swapi.dev/api'

function outputSearchResults(data) {
    console.log('.\nResults:\n-------')
    
    data.results.forEach(result => {
        console.log('Name:', result.name)
    })
}

async function makeRequest(data) {
    const url = `${baseURL}/${data.dataset.toLowerCase()}?search=${data.search}`

    const res = await axios.get(url)

    return res.data
}

async function getSearch(datasetObject) {
    const searchObject = await inquirer.prompt({
        name: 'search',
        message: 'Please type a search word for your chosen dataset'
    })

    return {
        dataset: datasetObject.dataset,
        search: searchObject.search
        
    }
}

async function getDatset() {
    // Get the dataset choice
    const answerObj = await inquirer.prompt({
        name: 'dataset',
        type: 'list',
        message: 'Please select a dataset form the list',
        choices: ['Films', 'People', 'Planets', 'Species', 'Starships', 'Vehicles']
    })

    return answerObj

}

getDatset()
    .then(getSearch)
    .then(makeRequest)
    .then(outputSearchResults)


// axios.get(baseURL + '/planets')
//     .then((res) => {
//         console.log(res.data)
//     })









  



  








