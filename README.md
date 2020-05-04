# https://fishbowl-game.com

Play the Fishbowl game online! Also known as Salad bowl, Monikers, or Celebrities. It's a free, virtual version of a fun (and mostly hilarious) guessing game, designed for any group of all ages! You'll need at least 4 to play, but it only gets more fun with more players. Hop on a video call, and play through rounds of Taboo, Charades, and Password.

# Technology

Fishbowl is built with [Typescript](https://www.typescriptlang.org/), [React](), [Apollo GraphQL](https://www.apollographql.com/), [Hasura](https://hasura.io/), and [Postgres](https://www.postgresql.org/). It's deployed on [Render](https://render.com/).

# Roadmap

[Public Trello](https://trello.com/b/xxUmKj7q/fishbowl-game)

# Local Development

1. Clone the repo:

```bash
git clone git@github.com:avimoondra/fishbowl.git
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

(1) Run actions node express server on `localhost:3001`

```bash
cd actions-server
npm install
PORT=3001 npm start
```

(2) Run front end on `localhost:3000`

```bash
cd app
yarn install --frozen-lockfile
yarn run start
```

(3) Run Hasura on `localhost:8080`

```
cd graphql-server
docker-compose up
hasura migrate apply --admin-secret=myadminsecretkey # for new databases
```

(4) Open Hasura console on `localhost:9695` (to track migrations)

```bash
cd graphql-server
hasura console --admin-secret=myadminsecretkey
```

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

# Support w/$

<a href="https://www.buymeacoffee.com/fishbowlgame" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 25.5px !important;width: 108.5px !important;" ></a>
