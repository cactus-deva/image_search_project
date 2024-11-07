import axios from "axios";

const searchImages = async (term) => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID BDdhm_UegAtzRVAX_6DUD1rv_8KH9AAO0B4cB7mEwh8",
        Accept: "application/json",
      },
      params: {
        query: term,
        per_page: 20,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log("Error is : ", error);
  }
};

export default searchImages;
