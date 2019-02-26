const db = require('../models');

exports.createProject = async function(req, res, next) {
	try {
		let project = await db.Projects.create({
			id: req.body.id,
			name: req.body.name,
			description: req.body.description,
			user: req.params.id
		});
		let foundUser = await db.User.findById(req.params.id);
		foundUser.projects.push(project.id);
		await foundUser.save();
		let foundProject = await db.Projects.findById(project._id).populate('user', {
			username: true
		});
		return res.status(200).json(foundProject);
	} catch (err) {
		return next(err);
	}
};

exports.getProject = async function(req, res, next) {
	try {
		let project = await db.Projects.find(req.params.project_id);
		return res.status(200).json(project);
	} catch (err) {
		return next(err);
	}
};

exports.deleteProject = async function(req, res, next) {
	try {
		let foundProject = await db.Projects.findByIdAndDelete(req.params.project_id);
		return res.status(200).json(foundProject);
	} catch (err) {
		return next(err);
	}
};

exports.updateProject = async function(req, res, next) {
	try {
		console.log(req.body);
		let foundProject = await db.Projects.findByIdAndUpdate(req.params.project_id, {
			$set: {
				name: req.body.name,
				description: req.body.description,
				user: req.params.id
			}
		});
		return res.status(200).json(foundProject);
	} catch (err) {
		return next(err);
	}
};
