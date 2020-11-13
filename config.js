module.exports = {
  MONGODB: `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URI}?retryWrites=true&w=majority`,
  SECRET_KEY: `${process.env.SECRET_KEY}`,
};
