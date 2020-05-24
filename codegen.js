const path = require("path")

module.exports = function (graphqlEndpoint) {
  return {
    schema: {
      [graphqlEndpoint]: {
        headers: {
          "X-Hasura-Admin-Secret": "myadminsecretkey",
        },
      },
    },
    documents: [path.join(__dirname, "/app/src/**/*.graphql")],
    overwrite: true,
    generates: {
      "./src/generated/graphql.tsx": {
        plugins: [
          "typescript",
          "typescript-operations",
          "typescript-react-apollo",
        ],
        config: {
          noNamespaces: true,
          skipTypename: true,
          withHooks: true,
          withHOC: false,
          withComponent: false,
          transformUnderscore: true,
          namingConvention: {
            typeNames: "change-case#pascalCase",
            transformUnderscore: true,
          },
        },
      },
    },
  }
}
