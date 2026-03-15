const mongoose = require('mongoose');

const connectDB = async() => {
  try{
  await mongoose.connect('mongodb://localhost:27017/musicDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  });
  console.log('MongoDB connected successsfully..');
}catch(err){
  console.error('MongoDB connection error.',err.message);
  process.exit(1);
  }
}; 

module.exports = connectDB;