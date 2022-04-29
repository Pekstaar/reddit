const mongoose = require("mongoose");

// const connectionString = 'mongodb+srv://simiongitau:1234@nodeexpressproject.pacld.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose
  .connect(`mongodb://localhost/reddit_db`)
  .then(() => console.log(`connected to the db....`))
  .catch((err) => console.log(err));
