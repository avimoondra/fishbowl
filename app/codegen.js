const schema = {}
schema[`${process.env.REACT_APP_FISHBOWL_GRAPHQL_ENDPOINT}`] = {
  headers: {
    "X-Hasura-Admin-Secret": "myadminsecretkey"
  }
}

module.exports = {
  schema: [schema],
  documents: ["./src/**/*.graphql"],
  overwrite: true,
  generates: {
    "./src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo"
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
          transformUnderscore: true
        }
      }
    },
    "./src/generated/graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
}
