const mongoose = require('mongoose');
const User = require('./user');

const projectsSchema = new mongoose.Schema(
	{
		name: {
			type: String
		},
		description: {
			type: String
		},
		image: {
			type: String
		},
		link: {
			type: String
		},
		repo: {
			type: String
		},
		commercial: {
			type: Boolean
		},
		fullStack: {
			type: Boolean
		},
		frontEnd: {
			type: Boolean
		},
		backEnd: {
			type: Boolean
		},
		tags: [ { type: String } ],

		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		}
	},
	{
		timestamps: true
	}
);

projectsSchema.pre('remove', async function(next) {
	try {
		let user = await User.findById(this.user);
		user.projects.remove(this.id);
		await user.save();
	} catch (err) {
		return next(err);
	}
});

const Projects = mongoose.model('Projects', projectsSchema);

module.exports = Projects;
