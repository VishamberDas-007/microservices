const express = require("express");
const expressApp = express();
require("dotenv").config();
const PORT = process.env.PORT;
const routes = require("./src/routes/route");

expressApp.use("/api", routes);
expressApp.listen(PORT, () => {
	try {
		console.log("Server is running on port ", PORT);
	} catch (err) {
		console.log(err);
	}
});
