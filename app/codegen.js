module.exports = {
  schema: [
    {
      "http://localhost:8080/v1/graphql": {}
    }
  ],
  documents: ["./src/**/*.graphql"],
  overwrite: true,
  generates: {
    "./src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
        "typescript-compatibility"
      ],
      config: {
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
