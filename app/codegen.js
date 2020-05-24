const codegen = (module.exports = require("../codegen")(
  process.env.REACT_APP_FISHBOWL_GRAPHQL_ENDPOINT
))

codegen.generates["./src/generated/graphql.schema.json"] = {
  plugins: ["introspection"],
}

module.exports = codegen
