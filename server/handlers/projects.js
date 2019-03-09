const db = require('../models');
const cloudinary = require('cloudinary').v2;
require('dotenv').load();
cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.API_KEY,
	api_secret: process.env.API_SECRET
});

exports.createProject = async function (req, res, next) {
	try {
		let imageURL;
		let upload = await cloudinary.uploader
			.upload(req.body.image, {
				tags: 'portfolio_images',
				public_id: req.body.name
			})
			.then(function (image) {
				var strToSplit = image.secure_url
				var splitResult = strToSplit.split('upload/');
				var stringStart = splitResult[0];
				var stringEnd = splitResult[1];
				var stringResult = stringStart + "upload/w_auto,c_scale/" + stringEnd
				imageURL = stringResult;
			})
			.catch(function (err) {
				console.log();
				console.log('** File Upload (Promise)');
				if (err) {
					console.warn(err);
				}
			});

		let project = await db.Projects.create({
			id: req.body.id,
			name: req.body.name,
			description: req.body.description,
			image: imageURL || '',
			commercial: req.body.commercial,
			fullStack: req.body.fullStack,
			frontEnd: req.body.frontEnd,
			backEnd: req.body.backEnd,
			link: req.body.link,
			repo: req.body.repo,
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

exports.getProject = async function (req, res, next) {
	try {
		let project = await db.Projects.find(req.params.project_id);
		return res.status(200).json(project);
	} catch (err) {
		return next(err);
	}
};

exports.deleteProject = async function (req, res, next) {
	try {
		let foundName = await db.Projects.findById(req.params.project_id);
		let deleteCloud = await cloudinary.uploader.destroy(foundName.name, function (error, result) {
			console.log(result, error);
		});
		let foundProject = await db.Projects.findByIdAndDelete(req.params.project_id);
		return res.status(200).json(foundProject);
	} catch (err) {
		return next(err);
	}
};

exports.updateProject = async function (req, res, next) {
	try {
		let imageURL;
		let upload = await cloudinary.uploader
			.upload(req.body.image, {
				tags: 'portfolio_images',
				public_id: req.body.name,
				overwrite: true,
			})
			.then(function (image) {
				var strToSplit = image.secure_url
				var splitResult = strToSplit.split('upload/');
				var stringStart = splitResult[0];
				var stringEnd = splitResult[1];

				var stringResult = stringStart + "upload/w_auto,c_scale/" + stringEnd

				imageURL = stringResult;
			})
			.catch(function (err) {
				console.log();
				console.log('** File Upload (Promise)');
				if (err) {
					console.warn(err);
				}
			});
		let foundProject = await db.Projects.findByIdAndUpdate(req.params.project_id, {
			$set: {
				name: req.body.name,
				description: req.body.description,
				image: imageURL,
				link: req.body.link,
				repo: req.body.repo,
				tags: req.body.tags,
				commercial: req.body.commercial,
				fullStack: req.body.fullStack,
				frontEnd: req.body.frontEnd,
				backEnd: req.body.backEnd,
				user: req.params.id
			}
		});
		return res.status(200).json(foundProject);
	} catch (err) {
		return next(err);
	}
};