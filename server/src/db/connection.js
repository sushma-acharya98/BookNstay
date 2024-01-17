const mongoose = require('mongoose')

const connection = async ()=> {
    try {
        const isConnected =   await mongoose.connect('mongodb://127.0.0.1:27017/bookingDb')
    if (isConnected){
        console.log("connected to MongoDb")
    }
    }catch(err){
        console.log(err)
    }
}

module.exports = connection