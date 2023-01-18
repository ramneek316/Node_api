const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.MONGODB_URI,
  },
  default: {
    SECRET: "mysecretkey",
    DATABASE:
      "mongodb+srv://sanjit316:Kas%40123456@cluster0.0gjv9ik.mongodb.net/test4",
  },
};
exports.get = function get(env) {
  return config[env] || config.default;
};
