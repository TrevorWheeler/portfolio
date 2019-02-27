const db = require('../models');
const cloudinary = require('cloudinary').v2;
require('dotenv').load();
cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.API_KEY,
	api_secret: process.env.API_SECRET
});

exports.createProject = async function(req, res, next) {
	try {
		let imageURL;
		let upload = await cloudinary.uploader.upload(req.body.image, { tags: 'portfolio_images' }, function(
			err,
			image
		) {
			console.log();
			if (err) {
				console.warn(err);
			}
			console.log('* ' + image.url);
			imageURL = image.url;
		});
		console.log(imageURL);
		console.log(imageURL);

		let project = await db.Projects.create({
			id: req.body.id,
			name: req.body.name,
			description: req.body.description,
			image: imageURL,
			tags: req.body.tags,
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
