FROM hasura/graphql-engine:v1.2.1.cli-migrations-v2

COPY migrations /hasura-migrations
COPY metadata /hasura-metadata

CMD graphql-engine \
    --database-url $DATABASE_URL \
    serve \
    --server-port $PORT \
    --enabled-log-types "startup,http-log,webhook-log,websocket-log,query-log" \
    --unauthorized-role "anonymous"