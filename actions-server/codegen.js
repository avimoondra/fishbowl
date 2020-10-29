const schema = {}
schema[`${process.env.HASURA_ENDPOINT}`] = {
  headers: {
    "X-Hasura-Admin-Secret": "myadminsecretkey",
  },
}

module.exports = {
  schema: [schema],
  documents: ["./src/**/*.graphql"],
  overwrite: true,
  generates: {
    "./src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        rawRequest: true,
        noNamespaces: true,
        skipTypename: true,
        transformUnderscore: true,
        namingConvention: {
          typeNames: "change-case#pascalCase",
          transformUnderscore: true,
        },
      },
    },
  },
}
