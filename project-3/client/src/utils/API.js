import axios from "axios";


export default {
    //Queries Shutterstock API to retrieve photos
    getPhotos: function(color) {
        console.log(color)
        return axios.get("/api/shutterstock/" + color);
        
    },
    //Queries aws
    uploadPhoto: function(formData) {
        console.log(formData);
        return axios.post("/api/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }
};