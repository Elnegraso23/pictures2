import axios from 'axios'

const searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=JXFE_X5uF58xJbFUqkKisXV483DuJ8_X4EUcC54bCoQ'
    const response = await axios .get(url, {
params: {
    qury: 'cars'
}
        
    })
    console.log(response)
}
export default searchImage