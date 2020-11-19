FROM hasura/graphql-engine:v1.3.3.cli-migrations-v2

COPY graphql-server/migrations /hasura-migrations
COPY graphql-server/metadata /hasura-metadata

CMD graphql-engine \
    --database-url $DATABASE_URL \
    serve \
    --server-port $PORT \
    --enabled-log-types "startup,http-log,webhook-log,websocket-log,query-log" \
    --unauthorized-role "anonymous"
