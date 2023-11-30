const express = require("express");
const mongoose = require("mongoose");
const UserRoute = require('./routes/userRoute')
const app = express();

const db = 'mongodb+srv://bunthai_resource:Bunthai1pass@cluster0.0lrfw8d.mongodb.net/test?retryWrites=true&w=majority';


app.use('/',UserRoute)

mongoose.connect(db, {}).then(() => {
    console.log('Database connect successful!');
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
