module.exports = {
  schema: [
    {
      "http://localhost:8080/v1/graphql": {
        headers: {
          "X-Hasura-Admin-Secret": "myadminsecretkey",
        },
      },
    },
  ],
  documents: ["./src/**/*.graphql"],
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
    "./src/generated/graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
}
