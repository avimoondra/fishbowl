# https://fishbowl-game.com

Fishbowl is a guessing game for any group of all ages, adapted for online play! You'll need at least 4 to play, but it only gets more fun with more players. Hop on a video call, and play through rounds of Taboo, Charades, and Password.

# Technology

Fishbowl is built with [Typescript](https://www.typescriptlang.org/), [React](), [Apollo GraphQL](https://www.apollographql.com/), [Hasura](https://hasura.io/), and [Postgres](https://www.postgresql.org/). It's deployed on [Render](https://render.com/).

# Local Development

1. Clone the repo:

```bash
git clone git@github.com:avimoondra/fishbowl.git`
```

2. Install [Brew](https://brew.sh/), and:

```bash
brew bundle
```

3. Install Node:

`nvm` is used to specify the node version it requires, based on `.nvmrc` file.

```bash
nvm install
nvm use
```

To add nvm to your .bash_profile to use it every time, see documentation:

- nvm - https://github.com/nvm-sh/nvm
- Homebrew's nvm info - `brew info nvm`

4. Install Docker

Download and install [Docker](https://docs.docker.com/docker-for-mac/install/) via Docker for Mac. Further documentation can be found [here](https://docs.docker.com/engine/docker-overview/).

5. Install Hasura

[Hasura](https://hasura.io/) is a GraphQL server that gives you instant, realtime GraphQL APIs over Postgres, with webhook triggers on database events, and remote schemas for business logic.

```bash
curl -L https://github.com/hasura/graphql-engine/raw/master/cli/get.sh | bash
```

Documentation: https://docs.hasura.io/1.0/graphql/manual/index.html

6. Install Hasura CLI

See https://docs.hasura.io/1.0/graphql/manual/hasura-cli/install-hasura-cli.html

7. Start your servers

(1) Run Hasura in localhost:8080

```
docker-compose up
hasura migrate apply --admin-secret=myadminsecretkey # for new databases
```

(2) Open Hasura console on localhost:9695 (to track migrations)

```bash
hasura console --admin-secret=myadminsecretkey
```

(3) Run front end in localhost:3000

```bash
cd app
yarn install --frozen-lockfile
yarn run start
```

# Contribute

Open a new pull request or issue!