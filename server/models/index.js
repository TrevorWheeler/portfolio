require("dotenv").load();
const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
// mongoose.connect(
// 	'mongodb://' +
// 		process.env.DB_USER +
// 		':' +
// 		process.env.DB_PASS +
// 		'@178.128.106.101:27017/portfolio?authSource=admin',
// 	{
// 		keepAlive: true,
// 		useNewUrlParser: true,
// 		useCreateIndex: true
// 	}
// );

mongoose.connect(
  "mongodb://localhost/portfolio",
  {
    keepAlive: true,
    useNewUrlParser: true,
    useCreateIndex: true
  }
);

module.exports.User = require("./user");
module.exports.Projects = require("./projects");
