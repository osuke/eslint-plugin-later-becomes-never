module.exports = {
  rules: {
    "no-todo": {
      create: function (context) {
        return {
          // https://eslint.org/docs/developer-guide/working-with-rules#the-context-object
          Program: (node) => {
            context
              .getSourceCode()
              .getAllComments()
              .forEach((comment) => {
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
