function errorHandler(error, response) {
	return response.status(error.status || 500).json({
		error: {
			message: error.message || 'Something went wrong and should be fixed soon.'
		}
	});
}

module.exports = errorHandler;
