//next.config.js

module.exports = {
  serverRuntimeConfig: {
    myvarpass: "server-runtime " + process.env.PINATA_SECRET
  },
  publicRuntimeConfig: {
    myvarpass: "public-runtime " + process.env.PINATA_SECRET,
    pinata_secret: "Bearer " + process.env.PINATA_SECRET
  },
  env: {
    myvarpass: "build-time " + process.env.PINATA_SECRET
  }
};
