const mongoose =  require("mongoose");

const connect = () =>{
    try{
       mongoose.connect(process.env.MONGO_URI);
       console.log("Database connected")
    }catch(err){
        console.log("Connection to database failed with error: ", err);
        process.exit(1);
    }
}

module.exports = connect;
