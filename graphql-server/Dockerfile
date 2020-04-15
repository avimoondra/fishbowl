FROM hasura/graphql-engine:v1.2.0-beta.2

# Enable the console
ENV HASURA_GRAPHQL_ENABLE_CONSOLE=true

# Change $DATABASE_URL to your heroku postgres URL if you're not using
# the primary postgres instance in your app
CMD graphql-engine \
    --database-url $DATABASE_URL \
    serve \
    --server-port $PORT \
    --enabled-log-types "startup,http-log,webhook-log,websocket-log,query-log" \
    --admin-secret $HASURA_GRAPHQL_ADMIN_SECRET \
    --unauthorized-role "anonymous"