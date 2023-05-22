const Buffer = require("safe-buffer").Buffer;
const Keygrip = require("keygrip");
const keys = require("../../config/keys");
const keygrip = new Keygrip([keys.cookieKey]);

module.exports = (user) => {
  const sessionObject = {
    passport: {
      //ერთი უმნიშვნელოვანესი დეტალი აქ.. In MongoDB, the _id field by default is an object of type ObjectId. An ObjectId is a 12-byte identifier that consists of various components such as a timestamp, machine identifier, process identifier, and a counter.When you insert a document into MongoDB without specifying a value for the _id field, MongoDB automatically generates a unique ObjectId for that document.so აქ ვდგები და toString () ს ვუკეთებთ
      user: user._id.toString(),
    },
  };
  const session = Buffer.from(JSON.stringify(sessionObject)).toString("base64");
  const sig = keygrip.sign("session=" + session);

  return { session, sig };
};
