const dotenv = require("dotenv");

//get configuration from file config.env
dotenv.config({ path: "./config.env" });
const app = require("./app");

const PORT = process.env.PORT || 80;
const DOMAIN = process.env.DOMAIN || "127.0.0.1";

//start the server
app.listen(PORT, DOMAIN, () => {
  console.log(`server listening on port ${PORT}..`);
});
