const mongoose = require('mongoose');
const config = require('config');

//get mongoURI value using config
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    //connect to mongoDB (returns a promise)
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.log(err.message);
    //Exist process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
