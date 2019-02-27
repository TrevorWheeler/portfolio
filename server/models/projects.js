const mongoose = require('mongoose');
const User = require('./user');

const projectsSchema = new mongoose.Schema(
	{
		commercial: [
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
				}
			}
		],
		fullStack: [
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
				}
			}
		],
		frontEnd: [
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
				}
			}
		],
		backEnd: [
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
				}
			}
		],
		tags: [
			{
				one: {
					type: String
				},
				two: {
					type: String
				},
				three: {
					type: String
				},
				four: {
					type: String
				},
				five: {
					type: String
				},
				six: {
					type: String
				},
				seven: {
					type: String
				},
				eight: {
					type: String
				},
				nine: {
					type: String
				}
			}
		],
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
