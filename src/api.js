import axios from "axios"

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: "Client-ID BDdhm_UegAtzRVAX_6DUD1rv_8KH9AAO0B4cB7mEwh8",
            Accept: "application/json"
        },
        params: {
            query: term
        }
    })
    return response.data.results
}

export default searchImages