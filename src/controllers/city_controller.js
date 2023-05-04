const mongoose =  require ('mongoose')
const { Schema } = mongoose

// SCHEMA
const citySchema  = new Schema({
    name: {type: String, 
            required: true}
});

citySchema.methods.getCity = function () => {
    return `${this.city}`
}

const City  = mongoose.model('City', citySchema)

module.exports = City
