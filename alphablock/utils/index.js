import axios from "axios"
const url = 'https://dummyjson.com/products'

const makeRequest = async(method,endpoint) => {
    console.log('endpoint',url/+endpoint);
    const config = {
        method : method.toUpperCase(),
        url : `${url}/${endpoint}`,
    }

    try {
        const response = await axios(config)
        return response
    } catch (error) {
        throw new Error('Error while fetching data from third party api')
    }
    
}



export const getByProductId = async (id) => {
    const result = await makeRequest('GET', `${id.id}`)
    return result.data   
}

export const performSearch = async (category) => {
    const result = await makeRequest('GET', `/search?q=${category.category}`)
    return result.data.products    
}