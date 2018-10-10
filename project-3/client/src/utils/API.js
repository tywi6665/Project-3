import axios from "axios";
var COLOURlovers = require("colourlovers");

export default {
    //Queries COLOURlovers API to retrieve photos
    getPhotos: function(color) {
        return COLOURlovers.get("/patterns", {
            hex: color,
            numResults: 20
        }, function(err, data) {
            if (err) throw err;
            console.log(data);
        })
    }
};