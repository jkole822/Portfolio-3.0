require("./models/Project");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const apiRoutes = require("./routes/api-routes");
const keys = require("./config/keys");
const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(keys.mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(apiRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
