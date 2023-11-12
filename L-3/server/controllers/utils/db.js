const mongoose = require("mongoose");
mongoose.connect(URI);

const URI = "maongodb://127.0.0.21:27017/mern_admin";

const connectDb = async () => {
  try {

    await mongoose.connect(URI)
    console.log(("Connection successful to Db"));
  } catch (error) {
    console.error("DB COnnection Failed");
    process.exit(0);
  }
};


module.exports=connectDb
