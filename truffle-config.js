module.exports = {
  networks: {  
      development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    }
            },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    useColors: false,
    reporter: "mochawesome",
    reporterOptions: {
      reportFilename: process.env.UNIT_TEST_OUTPUT_FILE + ".json",
      json: true,
      html: false,
    },
  },

  // Configure your compilers
  compilers: {},
};
