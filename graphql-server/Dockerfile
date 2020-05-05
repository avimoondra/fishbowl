FROM hasura/graphql-engine:v1.2.0

# Change $DATABASE_URL to your heroku postgres URL if you're not using
# the primary postgres instance in your app
CMD graphql-engine \
    --database-url $DATABASE_URL \
    serve \
    --server-port $PORT \
    --enabled-log-types "startup,http-log,webhook-log,websocket-log,query-log" \
    --unauthorized-role "anonymous"