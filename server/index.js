//import dependencies
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error');
const PORT = 8082;
const authRoutes = require('./routes/auth');
const menuItemRoutes = require('./routes/projects');
const { loginRequired, ensureCorrectUser } = require('./middleware/auth');
const db = require('./models');


app.use(cors());

//set limit of 3mb that can be parsed
app.use(bodyParser.json({ limit: '3mb' }));

// tell express to use middleware for authentication routes.
app.use('/api/auth', authRoutes);

//get projects based on user
app.use('/api/users/:id/projects', loginRequired, ensureCorrectUser, menuItemRoutes);

//get all projects
app.get('/api/projects', async function(req, res, next) {
	try {
		let projects = await db.Projects.find().sort({ order: 'asc' }).populate('user', {
			username: true
		});
		return res.status(200).json(projects);
	} catch (err) {
		return next(err);
	}
});

app.use(function(req, res, next) {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

//set handler for error
app.use(errorHandler);

//set port to listen on
app.listen(PORT, function() {
	console.log(`Server is starting on port ${PORT}`);
});
