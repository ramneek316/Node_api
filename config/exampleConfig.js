const config = {
    production: {
      SECRET: process.env.SECRET,
      DATABASE: process.env.MONGODB_URI,
    },
    default: {
      SECRET: "yoursecretkey",
      DATABASE:
        "mongodb+srv://username:password@cluster0.0gjv9ik.mongodb.net/test",
    },
  };
  exports.get = function get(env) {
    return config[env] || config.default;
  };
  