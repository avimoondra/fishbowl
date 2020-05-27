# https://fishbowl-game.com

Play the Fishbowl game online! Also known as Salad bowl, Monikers, or Celebrities. It's a free, virtual version of a fun (and mostly hilarious) guessing game, designed for any group of all ages! You'll need at least 4 to play, but it only gets more fun with more players. Hop on a video call, and play through rounds of Taboo, Charades, and Password.

# Technology

Fishbowl is built with [Material UI](https://material-ui.com/), [Typescript](https://www.typescriptlang.org/), [React](https://reactjs.org/), [Apollo GraphQL](https://www.apollographql.com/), [Hasura](https://hasura.io/), and [Postgres](https://www.postgresql.org/). It's deployed on [Render](https://render.com/).

# Roadmap

[Public Trello](https://trello.com/b/xxUmKj7q/fishbowl-game)

# Local Development

## Installing

1. Clone the repo:

   ```bash
   git clone git@github.com:avimoondra/fishbowl.git
   ```

2. Install [Homebrew](https://brew.sh/), and:

   ```bash
   brew bundle
   ```

3. Install Node.js via [Node Version Manager](https://github.com/nvm-sh/nvm):

   ```bash
   nvm install
   ```

4. Install Docker

   Download and install [Docker](https://docs.docker.com/docker-for-mac/install/) via Docker for Mac. Further documentation can be found [here](https://docs.docker.com/engine/docker-overview/).

5. Install Hasura CLI

   [Hasura](https://hasura.io/) is a GraphQL server that gives you instant, realtime GraphQL APIs over Postgres, with webhook triggers on database events, and remote schemas for business logic.

   ```bash
   curl -L https://github.com/hasura/graphql-engine/raw/stable/cli/get.sh | bash
   ```

   See more detailed instructions [here](https://hasura.io/docs/1.0/graphql/manual/hasura-cli/install-hasura-cli.html)

## Running

1. Run actions node express server on `localhost:3001`

   ```bash
   cd actions-server
   npm install
   PORT=3001 npm start
   ```

2. Run front end on `localhost:3000`

   ```bash
   cd app
   yarn install --frozen-lockfile
   yarn run start
   ```

3. Run Hasura on `localhost:8080`

   ```
   cd graphql-server
   docker-compose up
   # for new databases...
   hasura migrate apply --admin-secret=myadminsecretkey
   hasura metadata apply --admin-secret=myadminsecretkey
   ```

4. Open Hasura console on `localhost:9695` (to track migrations)

   ```bash
   cd graphql-server
   hasura console --admin-secret=myadminsecretkey
   ```

5. Generate gql apollo hooks and types (repeatedly)

   ```bash
   cd app
   yarn gql-gen --watch
   ```

## Experimental: Running w/Docker

The local environment is configured with [Docker Compose](https://docs.docker.com/compose/).

Change `actions-server/.env` to HASURA_ENDPOINT=http://graphql-engine:8080/v1/graphql

Running the application with:

```bash
docker-compose up
```

will build and start these services which are all accessible on the host:
| service | description | host connection |
| --- | --- | --- |
| `app` | React front-end | [`localhost:3000`](http://localhost:3000/) |
| `graphql-engine` | Hasura GraphQL Engine | [`localhost:8080`](http://localhost:8080/) |
| `actions-server` | Hasura actions server | [`localhost:3001`](http://localhost:3001/) |
| `postgres` | Postgres database | [`localhost:5432`](http://localhost:5432/) |

#### Migrations

Open Hasura console on [`localhost:9695`](http://localhost:9695/) to track migrations:

```bash
cd graphql-server
hasura console --admin-secret=myadminsecretkey
```

#### GraphQL Code Generation

Repeatedly generate GraphQL Apollo hooks and TypeScript operations:

```bash
cd app
yarn gql-gen --watch
```

## FAQ

### Update allowed queries/mutations on prod?

There's a [gql operations white list](https://fishbowl-graphql.onrender.com/console/settings/allowed-queries) on production. Any operation that's not in this list is disallowed (on prod only). If merging a PR that updates any \*.graphql file, the order of operations is...

1. Before merging code, set `HASURA_GRAPHQL_ENABLE_ALLOWLIST` to `false`, in [Render](https://dashboard.render.com/web/srv-bqave7tp1qr5voljem1g/env)
2. Deploy the code + update the query/mutation(s) from the new code in the [production gql operations white list](https://fishbowl-graphql.onrender.com/console/settings/allowed-queries).
3. After the FE is deployed w/the new code + white list updated, set `HASURA_GRAPHQL_ENABLE_ALLOWLIST` back to `true`, in [Render](https://dashboard.render.com/web/srv-bqave7tp1qr5voljem1g/env).

### Reset my local DB?

stop your docker containers

```bash
docker rm $(docker ps -a -q)
docker volume prune
docker-compose up
```

followed by

```bash
hasura migrate apply --admin-secret=myadminsecretkey
hasura metadata apply --admin-secret=myadminsecretkey
```

### Connect to my local DB w/psql?

Install [psql](https://www.postgresql.org/docs/9.3/app-psql.html) or [Postico](https://eggerapps.at/postico/), or your favorite postgres client.

```bash
psql postgres://postgres:postgrespassword@localhost:5432/postgres
```

You can also find a SQL runner in Hasura itself, [here](http://localhost:9695/data/sql).

# Contribute w/code

Open a new pull request or issue! Be sure to check out the [Public Trello](https://trello.com/b/xxUmKj7q/fishbowl-game) which defines a loose roadmap, and has many features, bugs, or chores already logged!

## Suggest a change or report a bug

If you don't know if a bug is actually an issue or just want to suggest a feature - just create an issue!

## Make a change or fix a bug

If you're already ready to contribute...

1. Fork this repo
2. Create a branch w/your changes
3. Create a pull request by comparing branches across forks
4. Start a discussion from there!

## Contact

If you're not sure about either or want to hack on Fishbowl on a recurring basis, feel free to contact me at [avimoondra@gmail.com](mailto:avimoondra@gmail.com) or [join our Slack group](https://join.slack.com/t/fishbowl-game/shared_invite/zt-dzi7puk6-Dpcg748SKqoBeRqZOfV7~g).

# Support w/\$

<a href="https://www.buymeacoffee.com/fishbowlgame" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 25.5px !important;width: 108.5px !important;" ></a>
