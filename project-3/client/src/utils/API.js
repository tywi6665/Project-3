import axios from "axios";
import * as multer from "multer";
const upload = multer();


export default {
    //Queries Shutterstock API to retrieve photos
    getPhotos: function(color) {
        console.log(color)
        return axios.get("/api/shutterstock/" + color);
        
    },
    //Queries aws
    uploadPhoto: function(formData) {
        console.log(formData.file);
        return axios.post("/api/upload", upload.single("photo"), (req, res) => {
            if (!req.file) {
              console.log("No file received");
              return res.send({
                success: false
              });
          
            } else {
              console.log('file received');
              return res.send({
                success: true
              })
            }
            // headers: {
            //     "Content-Type": "multipart/form-data"
            // }
        }
        )
    }
};