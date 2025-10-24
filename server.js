const http = require("http");
const dotenv = require("dotenv");
const { app } = require("./app");
dotenv.config();
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is running on the Port no ${PORT}`);
});
