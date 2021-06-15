module.exports = {
	rules: {
		"no-fuck": {
			create: function (context) {
				// rule implementation ...
				context.report({ node: node, message: "No fuck please!" });
			}
		}
	}
};
