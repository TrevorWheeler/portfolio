require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error');
const PORT = 8081;
const authRoutes = require('./routes/auth');
const menuItemRoutes = require('./routes/projects');
const { loginRequired, ensureCorrectUser } = require('./middleware/auth');
const db = require('./models');

app.use(cors());
app.use(bodyParser.json({ limit: '3mb' }));

app.use('/api/auth', authRoutes);
app.use('/api/users/:id/projects', loginRequired, ensureCorrectUser, menuItemRoutes);

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

app.use(errorHandler);

app.listen(PORT, function() {
	console.log(`Server is starting on port ${PORT}`);
});

// http post localhost:8081/api/users/5c74026a300231102ee46f40/projects "Authorization:Bearer ${token} name="worked"

// http post localhost:8081/api/users/5c74026a300231102ee46f40/projects "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNzQwMjZhMzAwMjMxMTAyZWU0NmY0MCIsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE1NTExMDY2NjZ9.LzF1dlTljXITtWYRhsrIzAVTSKH9Q_EWi2WHDCgqs5Q" name="worked"
