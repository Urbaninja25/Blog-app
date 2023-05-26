jest.setTimeout(20000);
require("../models/User");

const mongoose = require("mongoose");
// const keys = require("../config/keys");

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://nugi:egeosi.@advancednode.n6r6fnt.mongodb.net/advnode?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

afterAll(async () => {
  await mongoose.disconnect();
});
