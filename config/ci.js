module.exports = {
  googleClientID:
    "964808011168-29vqsooppd769hk90kjbjm5gld0glssb.apps.googleusercontent.com",
  googleClientSecret: "KnH-rZC23z4fr2CN4ISK4srN",
  // So by default, this database does not exist.When mongoose first tries to connect to this MongoDB instance.If it does not find a database named blog_ci,it will automatically create it inside that copy of MongoDB.
  mongoURI: "mongodb://127.0.0.1:27017/blog_ci",
  cookieKey: "123123123",
  redisUrl: "redis://127.0.0.1:6379",
};
