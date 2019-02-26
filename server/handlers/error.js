function errorHandler(error, response) {
	return response.status(error.status || 500).json({
		error: {
			message: error.message || 'Oops! Something went wrong.'
		}
	});
}

module.exports = errorHandler;
