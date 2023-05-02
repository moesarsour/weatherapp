const mongoose =  require ('mongoose')
const { Schema } = mongoose

// SCHEMA
const citySchema  = new Schema({
    name: {type: String}
});

citySchema.methods.getCity = function () {
    // return weather info for said city 
}