const mongoose = require("mongoose");

/* const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
} */

// remodifying the above code with async/await synatx
const connectDB = async (url) => {
  try {
    await mongoose.connect(
      url,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      },
      console.log("Connected to the Mongoose DB")
    );
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
