import axios from "axios";

export default {
    //Queries Unsplash API to retrieve photos
    getPhotos: function(color) {
        return axios.get("api/colors", { params: { query: color } })
    }
}