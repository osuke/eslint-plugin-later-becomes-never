module.exports = {
  rules: {
    "no-todo": {
      create: function (context) {
        return {
          Program: (node) => {
            node.comments.forEach((comment) => {
              if (comment.value.toLowerCase().indexOf("todo") !== -1) {
                context.report({
                  loc: comment.loc,
                  message: "Later becomes never",
                });
              }
            });
          },
        };
      },
    },
  },
};
