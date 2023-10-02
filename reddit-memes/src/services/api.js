import axios from 'axios';


export const getImage = async()=>{
    const API_URL = 'https://www.reddit.com/r/memes.json'
    try {
          const response = await axios.get(`${API_URL}`)
          return response.data
        
    } catch (error) {
        console.error("Error while calling api of reddit",error.message)
        return error.message
        
    }
}
