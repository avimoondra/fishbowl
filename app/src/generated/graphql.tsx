import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamp: any;
  uuid: any;
};

export type Games = {
  created_at?: Maybe<Scalars['timestamp']>;
  host?: Maybe<Players>;
  host_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  join_code?: Maybe<Scalars['String']>;
  num_entries_per_player?: Maybe<Scalars['Int']>;
  players: Array<Players>;
  players_aggregate: PlayersAggregate;
  seconds_per_turn?: Maybe<Scalars['Int']>;
  starting_letter?: Maybe<Scalars['String']>;
};


export type GamesPlayersArgs = {
  distinct_on?: Maybe<Array<PlayersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PlayersOrderBy>>;
  where?: Maybe<PlayersBoolExp>;
};


export type GamesPlayersAggregateArgs = {
  distinct_on?: Maybe<Array<PlayersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PlayersOrderBy>>;
  where?: Maybe<PlayersBoolExp>;
};

export type GamesAggregate = {
  aggregate?: Maybe<GamesAggregateFields>;
  nodes: Array<Games>;
};

export type GamesAggregateFields = {
  avg?: Maybe<GamesAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<GamesMaxFields>;
  min?: Maybe<GamesMinFields>;
  stddev?: Maybe<GamesStddevFields>;
  stddev_pop?: Maybe<GamesStddevPopFields>;
  stddev_samp?: Maybe<GamesStddevSampFields>;
  sum?: Maybe<GamesSumFields>;
  var_pop?: Maybe<GamesVarPopFields>;
  var_samp?: Maybe<GamesVarSampFields>;
  variance?: Maybe<GamesVarianceFields>;
};


export type GamesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<GamesSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type GamesAggregateOrderBy = {
  avg?: Maybe<GamesAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<GamesMaxOrderBy>;
  min?: Maybe<GamesMinOrderBy>;
  stddev?: Maybe<GamesStddevOrderBy>;
  stddev_pop?: Maybe<GamesStddevPopOrderBy>;
  stddev_samp?: Maybe<GamesStddevSampOrderBy>;
  sum?: Maybe<GamesSumOrderBy>;
  var_pop?: Maybe<GamesVarPopOrderBy>;
  var_samp?: Maybe<GamesVarSampOrderBy>;
  variance?: Maybe<GamesVarianceOrderBy>;
};

export type GamesArrRelInsertInput = {
  data: Array<GamesInsertInput>;
  on_conflict?: Maybe<GamesOnConflict>;
};

export type GamesAvgFields = {
  host_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  num_entries_per_player?: Maybe<Scalars['Float']>;
  seconds_per_turn?: Maybe<Scalars['Float']>;
};

export type GamesAvgOrderBy = {
  host_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  num_entries_per_player?: Maybe<OrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
};

export type GamesBoolExp = {
  _and?: Maybe<Array<Maybe<GamesBoolExp>>>;
  _not?: Maybe<GamesBoolExp>;
  _or?: Maybe<Array<Maybe<GamesBoolExp>>>;
  created_at?: Maybe<TimestampComparisonExp>;
  host?: Maybe<PlayersBoolExp>;
  host_id?: Maybe<IntComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  join_code?: Maybe<StringComparisonExp>;
  num_entries_per_player?: Maybe<IntComparisonExp>;
  players?: Maybe<PlayersBoolExp>;
  seconds_per_turn?: Maybe<IntComparisonExp>;
  starting_letter?: Maybe<StringComparisonExp>;
};

export enum GamesConstraint {
  GamesJoinCodeKey = 'games_join_code_key',
  GamesPkey = 'games_pkey'
}

export type GamesIncInput = {
  host_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  num_entries_per_player?: Maybe<Scalars['Int']>;
  seconds_per_turn?: Maybe<Scalars['Int']>;
};

export type GamesInsertInput = {
  created_at?: Maybe<Scalars['timestamp']>;
  host?: Maybe<PlayersObjRelInsertInput>;
  host_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  join_code?: Maybe<Scalars['String']>;
  num_entries_per_player?: Maybe<Scalars['Int']>;
  players?: Maybe<PlayersArrRelInsertInput>;
  seconds_per_turn?: Maybe<Scalars['Int']>;
  starting_letter?: Maybe<Scalars['String']>;
};

export type GamesMaxFields = {
  host_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  join_code?: Maybe<Scalars['String']>;
  num_entries_per_player?: Maybe<Scalars['Int']>;
  seconds_per_turn?: Maybe<Scalars['Int']>;
  starting_letter?: Maybe<Scalars['String']>;
};

export type GamesMaxOrderBy = {
  host_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  join_code?: Maybe<OrderBy>;
  num_entries_per_player?: Maybe<OrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
  starting_letter?: Maybe<OrderBy>;
};

export type GamesMinFields = {
  host_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  join_code?: Maybe<Scalars['String']>;
  num_entries_per_player?: Maybe<Scalars['Int']>;
  seconds_per_turn?: Maybe<Scalars['Int']>;
  starting_letter?: Maybe<Scalars['String']>;
};

export type GamesMinOrderBy = {
  host_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  join_code?: Maybe<OrderBy>;
  num_entries_per_player?: Maybe<OrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
  starting_letter?: Maybe<OrderBy>;
};

export type GamesMutationResponse = {
  affected_rows: Scalars['Int'];
  returning: Array<Games>;
};

export type GamesObjRelInsertInput = {
  data: GamesInsertInput;
  on_conflict?: Maybe<GamesOnConflict>;
};

export type GamesOnConflict = {
  constraint: GamesConstraint;
  update_columns: Array<GamesUpdateColumn>;
  where?: Maybe<GamesBoolExp>;
};

export type GamesOrderBy = {
  created_at?: Maybe<OrderBy>;
  host?: Maybe<PlayersOrderBy>;
  host_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  join_code?: Maybe<OrderBy>;
  num_entries_per_player?: Maybe<OrderBy>;
  players_aggregate?: Maybe<PlayersAggregateOrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
  starting_letter?: Maybe<OrderBy>;
};

export type GamesPkColumnsInput = {
  id: Scalars['Int'];
};

export enum GamesSelectColumn {
  CreatedAt = 'created_at',
  HostId = 'host_id',
  Id = 'id',
  JoinCode = 'join_code',
  NumEntriesPerPlayer = 'num_entries_per_player',
  SecondsPerTurn = 'seconds_per_turn',
  StartingLetter = 'starting_letter'
}

export type GamesSetInput = {
  created_at?: Maybe<Scalars['timestamp']>;
  host_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  join_code?: Maybe<Scalars['String']>;
  num_entries_per_player?: Maybe<Scalars['Int']>;
  seconds_per_turn?: Maybe<Scalars['Int']>;
  starting_letter?: Maybe<Scalars['String']>;
};

export type GamesStddevFields = {
  host_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  num_entries_per_player?: Maybe<Scalars['Float']>;
  seconds_per_turn?: Maybe<Scalars['Float']>;
};

export type GamesStddevOrderBy = {
  host_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  num_entries_per_player?: Maybe<OrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
};

export type GamesStddevPopFields = {
  host_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  num_entries_per_player?: Maybe<Scalars['Float']>;
  seconds_per_turn?: Maybe<Scalars['Float']>;
};

export type GamesStddevPopOrderBy = {
  host_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  num_entries_per_player?: Maybe<OrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
};

export type GamesStddevSampFields = {
  host_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  num_entries_per_player?: Maybe<Scalars['Float']>;
  seconds_per_turn?: Maybe<Scalars['Float']>;
};

export type GamesStddevSampOrderBy = {
  host_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  num_entries_per_player?: Maybe<OrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
};

export type GamesSumFields = {
  host_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  num_entries_per_player?: Maybe<Scalars['Int']>;
  seconds_per_turn?: Maybe<Scalars['Int']>;
};

export type GamesSumOrderBy = {
  host_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  num_entries_per_player?: Maybe<OrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
};

export enum GamesUpdateColumn {
  CreatedAt = 'created_at',
  HostId = 'host_id',
  Id = 'id',
  JoinCode = 'join_code',
  NumEntriesPerPlayer = 'num_entries_per_player',
  SecondsPerTurn = 'seconds_per_turn',
  StartingLetter = 'starting_letter'
}

export type GamesVarPopFields = {
  host_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  num_entries_per_player?: Maybe<Scalars['Float']>;
  seconds_per_turn?: Maybe<Scalars['Float']>;
};

export type GamesVarPopOrderBy = {
  host_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  num_entries_per_player?: Maybe<OrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
};

export type GamesVarSampFields = {
  host_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  num_entries_per_player?: Maybe<Scalars['Float']>;
  seconds_per_turn?: Maybe<Scalars['Float']>;
};

export type GamesVarSampOrderBy = {
  host_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  num_entries_per_player?: Maybe<OrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
};

export type GamesVarianceFields = {
  host_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  num_entries_per_player?: Maybe<Scalars['Float']>;
  seconds_per_turn?: Maybe<Scalars['Float']>;
};

export type GamesVarianceOrderBy = {
  host_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  num_entries_per_player?: Maybe<OrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
};

export type IntComparisonExp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type MutationRoot = {
  delete_games?: Maybe<GamesMutationResponse>;
  delete_games_by_pk?: Maybe<Games>;
  delete_players?: Maybe<PlayersMutationResponse>;
  delete_players_by_pk?: Maybe<Players>;
  insert_games?: Maybe<GamesMutationResponse>;
  insert_games_one?: Maybe<Games>;
  insert_players?: Maybe<PlayersMutationResponse>;
  insert_players_one?: Maybe<Players>;
  update_games?: Maybe<GamesMutationResponse>;
  update_games_by_pk?: Maybe<Games>;
  update_players?: Maybe<PlayersMutationResponse>;
  update_players_by_pk?: Maybe<Players>;
};


export type MutationRootDeleteGamesArgs = {
  where: GamesBoolExp;
};


export type MutationRootDeleteGamesByPkArgs = {
  id: Scalars['Int'];
};


export type MutationRootDeletePlayersArgs = {
  where: PlayersBoolExp;
};


export type MutationRootDeletePlayersByPkArgs = {
  id: Scalars['Int'];
};


export type MutationRootInsertGamesArgs = {
  objects: Array<GamesInsertInput>;
  on_conflict?: Maybe<GamesOnConflict>;
};


export type MutationRootInsertGamesOneArgs = {
  object: GamesInsertInput;
  on_conflict?: Maybe<GamesOnConflict>;
};


export type MutationRootInsertPlayersArgs = {
  objects: Array<PlayersInsertInput>;
  on_conflict?: Maybe<PlayersOnConflict>;
};


export type MutationRootInsertPlayersOneArgs = {
  object: PlayersInsertInput;
  on_conflict?: Maybe<PlayersOnConflict>;
};


export type MutationRootUpdateGamesArgs = {
  _inc?: Maybe<GamesIncInput>;
  _set?: Maybe<GamesSetInput>;
  where: GamesBoolExp;
};


export type MutationRootUpdateGamesByPkArgs = {
  _inc?: Maybe<GamesIncInput>;
  _set?: Maybe<GamesSetInput>;
  pk_columns: GamesPkColumnsInput;
};


export type MutationRootUpdatePlayersArgs = {
  _inc?: Maybe<PlayersIncInput>;
  _set?: Maybe<PlayersSetInput>;
  where: PlayersBoolExp;
};


export type MutationRootUpdatePlayersByPkArgs = {
  _inc?: Maybe<PlayersIncInput>;
  _set?: Maybe<PlayersSetInput>;
  pk_columns: PlayersPkColumnsInput;
};

export enum OrderBy {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

export type Players = {
  created_at?: Maybe<Scalars['timestamp']>;
  game?: Maybe<Games>;
  game_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

export type PlayersAggregate = {
  aggregate?: Maybe<PlayersAggregateFields>;
  nodes: Array<Players>;
};

export type PlayersAggregateFields = {
  avg?: Maybe<PlayersAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<PlayersMaxFields>;
  min?: Maybe<PlayersMinFields>;
  stddev?: Maybe<PlayersStddevFields>;
  stddev_pop?: Maybe<PlayersStddevPopFields>;
  stddev_samp?: Maybe<PlayersStddevSampFields>;
  sum?: Maybe<PlayersSumFields>;
  var_pop?: Maybe<PlayersVarPopFields>;
  var_samp?: Maybe<PlayersVarSampFields>;
  variance?: Maybe<PlayersVarianceFields>;
};


export type PlayersAggregateFieldsCountArgs = {
  columns?: Maybe<Array<PlayersSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type PlayersAggregateOrderBy = {
  avg?: Maybe<PlayersAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<PlayersMaxOrderBy>;
  min?: Maybe<PlayersMinOrderBy>;
  stddev?: Maybe<PlayersStddevOrderBy>;
  stddev_pop?: Maybe<PlayersStddevPopOrderBy>;
  stddev_samp?: Maybe<PlayersStddevSampOrderBy>;
  sum?: Maybe<PlayersSumOrderBy>;
  var_pop?: Maybe<PlayersVarPopOrderBy>;
  var_samp?: Maybe<PlayersVarSampOrderBy>;
  variance?: Maybe<PlayersVarianceOrderBy>;
};

export type PlayersArrRelInsertInput = {
  data: Array<PlayersInsertInput>;
  on_conflict?: Maybe<PlayersOnConflict>;
};

export type PlayersAvgFields = {
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type PlayersAvgOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

export type PlayersBoolExp = {
  _and?: Maybe<Array<Maybe<PlayersBoolExp>>>;
  _not?: Maybe<PlayersBoolExp>;
  _or?: Maybe<Array<Maybe<PlayersBoolExp>>>;
  created_at?: Maybe<TimestampComparisonExp>;
  game?: Maybe<GamesBoolExp>;
  game_id?: Maybe<IntComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  username?: Maybe<StringComparisonExp>;
  uuid?: Maybe<UuidComparisonExp>;
};

export enum PlayersConstraint {
  PlayersPkey = 'players_pkey'
}

export type PlayersIncInput = {
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type PlayersInsertInput = {
  created_at?: Maybe<Scalars['timestamp']>;
  game?: Maybe<GamesObjRelInsertInput>;
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

export type PlayersMaxFields = {
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

export type PlayersMaxOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  username?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
};

export type PlayersMinFields = {
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

export type PlayersMinOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  username?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
};

export type PlayersMutationResponse = {
  affected_rows: Scalars['Int'];
  returning: Array<Players>;
};

export type PlayersObjRelInsertInput = {
  data: PlayersInsertInput;
  on_conflict?: Maybe<PlayersOnConflict>;
};

export type PlayersOnConflict = {
  constraint: PlayersConstraint;
  update_columns: Array<PlayersUpdateColumn>;
  where?: Maybe<PlayersBoolExp>;
};

export type PlayersOrderBy = {
  created_at?: Maybe<OrderBy>;
  game?: Maybe<GamesOrderBy>;
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  username?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
};

export type PlayersPkColumnsInput = {
  id: Scalars['Int'];
};

export enum PlayersSelectColumn {
  CreatedAt = 'created_at',
  GameId = 'game_id',
  Id = 'id',
  Username = 'username',
  Uuid = 'uuid'
}

export type PlayersSetInput = {
  created_at?: Maybe<Scalars['timestamp']>;
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

export type PlayersStddevFields = {
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type PlayersStddevOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

export type PlayersStddevPopFields = {
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type PlayersStddevPopOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

export type PlayersStddevSampFields = {
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type PlayersStddevSampOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

export type PlayersSumFields = {
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type PlayersSumOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

export enum PlayersUpdateColumn {
  CreatedAt = 'created_at',
  GameId = 'game_id',
  Id = 'id',
  Username = 'username',
  Uuid = 'uuid'
}

export type PlayersVarPopFields = {
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type PlayersVarPopOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

export type PlayersVarSampFields = {
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type PlayersVarSampOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

export type PlayersVarianceFields = {
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type PlayersVarianceOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

export type QueryRoot = {
  games: Array<Games>;
  games_aggregate: GamesAggregate;
  games_by_pk?: Maybe<Games>;
  players: Array<Players>;
  players_aggregate: PlayersAggregate;
  players_by_pk?: Maybe<Players>;
};


export type QueryRootGamesArgs = {
  distinct_on?: Maybe<Array<GamesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GamesOrderBy>>;
  where?: Maybe<GamesBoolExp>;
};


export type QueryRootGamesAggregateArgs = {
  distinct_on?: Maybe<Array<GamesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GamesOrderBy>>;
  where?: Maybe<GamesBoolExp>;
};


export type QueryRootGamesByPkArgs = {
  id: Scalars['Int'];
};


export type QueryRootPlayersArgs = {
  distinct_on?: Maybe<Array<PlayersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PlayersOrderBy>>;
  where?: Maybe<PlayersBoolExp>;
};


export type QueryRootPlayersAggregateArgs = {
  distinct_on?: Maybe<Array<PlayersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PlayersOrderBy>>;
  where?: Maybe<PlayersBoolExp>;
};


export type QueryRootPlayersByPkArgs = {
  id: Scalars['Int'];
};

export type StringComparisonExp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type SubscriptionRoot = {
  games: Array<Games>;
  games_aggregate: GamesAggregate;
  games_by_pk?: Maybe<Games>;
  players: Array<Players>;
  players_aggregate: PlayersAggregate;
  players_by_pk?: Maybe<Players>;
};


export type SubscriptionRootGamesArgs = {
  distinct_on?: Maybe<Array<GamesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GamesOrderBy>>;
  where?: Maybe<GamesBoolExp>;
};


export type SubscriptionRootGamesAggregateArgs = {
  distinct_on?: Maybe<Array<GamesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GamesOrderBy>>;
  where?: Maybe<GamesBoolExp>;
};


export type SubscriptionRootGamesByPkArgs = {
  id: Scalars['Int'];
};


export type SubscriptionRootPlayersArgs = {
  distinct_on?: Maybe<Array<PlayersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PlayersOrderBy>>;
  where?: Maybe<PlayersBoolExp>;
};


export type SubscriptionRootPlayersAggregateArgs = {
  distinct_on?: Maybe<Array<PlayersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PlayersOrderBy>>;
  where?: Maybe<PlayersBoolExp>;
};


export type SubscriptionRootPlayersByPkArgs = {
  id: Scalars['Int'];
};


export type TimestampComparisonExp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};


export type UuidComparisonExp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type CurrentPlayerQueryVariables = {
  playerUuid: Scalars['uuid'];
  joinCode: Scalars['String'];
};


export type CurrentPlayerQuery = { players: Array<(
    Pick<Players, 'id' | 'uuid' | 'username'>
    & { game?: Maybe<(
      Pick<Games, 'id' | 'join_code'>
      & { host?: Maybe<Pick<Players, 'id' | 'username'>> }
    )> }
  )> };

export type CurrentPlayerByIdQueryVariables = {
  id: Scalars['Int'];
};


export type CurrentPlayerByIdQuery = { players_by_pk?: Maybe<(
    Pick<Players, 'id' | 'uuid' | 'username'>
    & { game?: Maybe<(
      Pick<Games, 'id' | 'join_code'>
      & { host?: Maybe<Pick<Players, 'id' | 'username'>> }
    )> }
  )> };

export type GameSubscriptionVariables = {
  id: Scalars['Int'];
};


export type GameSubscription = { games_by_pk?: Maybe<(
    Pick<Games, 'id' | 'join_code' | 'starting_letter' | 'seconds_per_turn' | 'num_entries_per_player'>
    & { host?: Maybe<Pick<Players, 'id' | 'username'>> }
  )> };

export type GameByJoinCodeQueryVariables = {
  joinCode: Scalars['String'];
};


export type GameByJoinCodeQuery = { games: Array<(
    Pick<Games, 'id' | 'join_code'>
    & { host?: Maybe<Pick<Players, 'id' | 'username'>> }
  )> };

export type StartGameMutationVariables = {
  playerUuid: Scalars['uuid'];
};


export type StartGameMutation = { insert_games_one?: Maybe<(
    Pick<Games, 'id' | 'join_code'>
    & { players: Array<Pick<Players, 'id' | 'uuid'>> }
  )> };

export type BecomeHostMutationVariables = {
  gameId: Scalars['Int'];
  playerId: Scalars['Int'];
};


export type BecomeHostMutation = { update_games_by_pk?: Maybe<Pick<Games, 'id' | 'join_code' | 'starting_letter' | 'seconds_per_turn' | 'num_entries_per_player'>> };

export type JoinGameMutationVariables = {
  gameId: Scalars['Int'];
  playerUuid: Scalars['uuid'];
};


export type JoinGameMutation = { insert_players_one?: Maybe<Pick<Players, 'id'>> };

export type UpdateGameSettingsMutationVariables = {
  id: Scalars['Int'];
  input: GamesSetInput;
};


export type UpdateGameSettingsMutation = { update_games_by_pk?: Maybe<Pick<Games, 'id' | 'join_code' | 'starting_letter' | 'seconds_per_turn' | 'num_entries_per_player'>> };

export type UpdatePlayerMutationVariables = {
  id: Scalars['Int'];
  input: PlayersSetInput;
};


export type UpdatePlayerMutation = { update_players_by_pk?: Maybe<Pick<Players, 'id' | 'username'>> };

export type WaitingRoomSubscriptionVariables = {
  gameId: Scalars['Int'];
};


export type WaitingRoomSubscription = { games_by_pk?: Maybe<(
    Pick<Games, 'id' | 'starting_letter' | 'seconds_per_turn' | 'num_entries_per_player'>
    & { players: Array<Pick<Players, 'id' | 'username'>> }
  )> };


export const CurrentPlayerDocument = gql`
    query CurrentPlayer($playerUuid: uuid!, $joinCode: String!) {
  players(where: {uuid: {_eq: $playerUuid}, game: {join_code: {_eq: $joinCode}}}) {
    id
    uuid
    username
    game {
      id
      join_code
      host {
        id
        username
      }
    }
  }
}
    `;

/**
 * __useCurrentPlayerQuery__
 *
 * To run a query within a React component, call `useCurrentPlayerQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentPlayerQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentPlayerQuery({
 *   variables: {
 *      playerUuid: // value for 'playerUuid'
 *      joinCode: // value for 'joinCode'
 *   },
 * });
 */
export function useCurrentPlayerQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CurrentPlayerQuery, CurrentPlayerQueryVariables>) {
        return ApolloReactHooks.useQuery<CurrentPlayerQuery, CurrentPlayerQueryVariables>(CurrentPlayerDocument, baseOptions);
      }
export function useCurrentPlayerLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CurrentPlayerQuery, CurrentPlayerQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CurrentPlayerQuery, CurrentPlayerQueryVariables>(CurrentPlayerDocument, baseOptions);
        }
export type CurrentPlayerQueryHookResult = ReturnType<typeof useCurrentPlayerQuery>;
export type CurrentPlayerLazyQueryHookResult = ReturnType<typeof useCurrentPlayerLazyQuery>;
export type CurrentPlayerQueryResult = ApolloReactCommon.QueryResult<CurrentPlayerQuery, CurrentPlayerQueryVariables>;
export const CurrentPlayerByIdDocument = gql`
    query CurrentPlayerById($id: Int!) {
  players_by_pk(id: $id) {
    id
    uuid
    username
    game {
      id
      join_code
      host {
        id
        username
      }
    }
  }
}
    `;

/**
 * __useCurrentPlayerByIdQuery__
 *
 * To run a query within a React component, call `useCurrentPlayerByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentPlayerByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentPlayerByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCurrentPlayerByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CurrentPlayerByIdQuery, CurrentPlayerByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<CurrentPlayerByIdQuery, CurrentPlayerByIdQueryVariables>(CurrentPlayerByIdDocument, baseOptions);
      }
export function useCurrentPlayerByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CurrentPlayerByIdQuery, CurrentPlayerByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CurrentPlayerByIdQuery, CurrentPlayerByIdQueryVariables>(CurrentPlayerByIdDocument, baseOptions);
        }
export type CurrentPlayerByIdQueryHookResult = ReturnType<typeof useCurrentPlayerByIdQuery>;
export type CurrentPlayerByIdLazyQueryHookResult = ReturnType<typeof useCurrentPlayerByIdLazyQuery>;
export type CurrentPlayerByIdQueryResult = ApolloReactCommon.QueryResult<CurrentPlayerByIdQuery, CurrentPlayerByIdQueryVariables>;
export const GameDocument = gql`
    subscription Game($id: Int!) {
  games_by_pk(id: $id) {
    id
    join_code
    starting_letter
    seconds_per_turn
    num_entries_per_player
    host {
      id
      username
    }
  }
}
    `;

/**
 * __useGameSubscription__
 *
 * To run a query within a React component, call `useGameSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGameSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGameSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGameSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<GameSubscription, GameSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<GameSubscription, GameSubscriptionVariables>(GameDocument, baseOptions);
      }
export type GameSubscriptionHookResult = ReturnType<typeof useGameSubscription>;
export type GameSubscriptionResult = ApolloReactCommon.SubscriptionResult<GameSubscription>;
export const GameByJoinCodeDocument = gql`
    query GameByJoinCode($joinCode: String!) {
  games(where: {join_code: {_eq: $joinCode}}) {
    id
    join_code
    host {
      id
      username
    }
  }
}
    `;

/**
 * __useGameByJoinCodeQuery__
 *
 * To run a query within a React component, call `useGameByJoinCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGameByJoinCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGameByJoinCodeQuery({
 *   variables: {
 *      joinCode: // value for 'joinCode'
 *   },
 * });
 */
export function useGameByJoinCodeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GameByJoinCodeQuery, GameByJoinCodeQueryVariables>) {
        return ApolloReactHooks.useQuery<GameByJoinCodeQuery, GameByJoinCodeQueryVariables>(GameByJoinCodeDocument, baseOptions);
      }
export function useGameByJoinCodeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GameByJoinCodeQuery, GameByJoinCodeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GameByJoinCodeQuery, GameByJoinCodeQueryVariables>(GameByJoinCodeDocument, baseOptions);
        }
export type GameByJoinCodeQueryHookResult = ReturnType<typeof useGameByJoinCodeQuery>;
export type GameByJoinCodeLazyQueryHookResult = ReturnType<typeof useGameByJoinCodeLazyQuery>;
export type GameByJoinCodeQueryResult = ApolloReactCommon.QueryResult<GameByJoinCodeQuery, GameByJoinCodeQueryVariables>;
export const StartGameDocument = gql`
    mutation StartGame($playerUuid: uuid!) {
  insert_games_one(object: {players: {data: [{uuid: $playerUuid}]}}) {
    id
    join_code
    players {
      id
      uuid
    }
  }
}
    `;
export type StartGameMutationFn = ApolloReactCommon.MutationFunction<StartGameMutation, StartGameMutationVariables>;

/**
 * __useStartGameMutation__
 *
 * To run a mutation, you first call `useStartGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startGameMutation, { data, loading, error }] = useStartGameMutation({
 *   variables: {
 *      playerUuid: // value for 'playerUuid'
 *   },
 * });
 */
export function useStartGameMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<StartGameMutation, StartGameMutationVariables>) {
        return ApolloReactHooks.useMutation<StartGameMutation, StartGameMutationVariables>(StartGameDocument, baseOptions);
      }
export type StartGameMutationHookResult = ReturnType<typeof useStartGameMutation>;
export type StartGameMutationResult = ApolloReactCommon.MutationResult<StartGameMutation>;
export type StartGameMutationOptions = ApolloReactCommon.BaseMutationOptions<StartGameMutation, StartGameMutationVariables>;
export const BecomeHostDocument = gql`
    mutation BecomeHost($gameId: Int!, $playerId: Int!) {
  update_games_by_pk(pk_columns: {id: $gameId}, _set: {host_id: $playerId}) {
    id
    join_code
    starting_letter
    seconds_per_turn
    num_entries_per_player
  }
}
    `;
export type BecomeHostMutationFn = ApolloReactCommon.MutationFunction<BecomeHostMutation, BecomeHostMutationVariables>;

/**
 * __useBecomeHostMutation__
 *
 * To run a mutation, you first call `useBecomeHostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBecomeHostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [becomeHostMutation, { data, loading, error }] = useBecomeHostMutation({
 *   variables: {
 *      gameId: // value for 'gameId'
 *      playerId: // value for 'playerId'
 *   },
 * });
 */
export function useBecomeHostMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<BecomeHostMutation, BecomeHostMutationVariables>) {
        return ApolloReactHooks.useMutation<BecomeHostMutation, BecomeHostMutationVariables>(BecomeHostDocument, baseOptions);
      }
export type BecomeHostMutationHookResult = ReturnType<typeof useBecomeHostMutation>;
export type BecomeHostMutationResult = ApolloReactCommon.MutationResult<BecomeHostMutation>;
export type BecomeHostMutationOptions = ApolloReactCommon.BaseMutationOptions<BecomeHostMutation, BecomeHostMutationVariables>;
export const JoinGameDocument = gql`
    mutation JoinGame($gameId: Int!, $playerUuid: uuid!) {
  insert_players_one(object: {game_id: $gameId, uuid: $playerUuid}) {
    id
  }
}
    `;
export type JoinGameMutationFn = ApolloReactCommon.MutationFunction<JoinGameMutation, JoinGameMutationVariables>;

/**
 * __useJoinGameMutation__
 *
 * To run a mutation, you first call `useJoinGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinGameMutation, { data, loading, error }] = useJoinGameMutation({
 *   variables: {
 *      gameId: // value for 'gameId'
 *      playerUuid: // value for 'playerUuid'
 *   },
 * });
 */
export function useJoinGameMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<JoinGameMutation, JoinGameMutationVariables>) {
        return ApolloReactHooks.useMutation<JoinGameMutation, JoinGameMutationVariables>(JoinGameDocument, baseOptions);
      }
export type JoinGameMutationHookResult = ReturnType<typeof useJoinGameMutation>;
export type JoinGameMutationResult = ApolloReactCommon.MutationResult<JoinGameMutation>;
export type JoinGameMutationOptions = ApolloReactCommon.BaseMutationOptions<JoinGameMutation, JoinGameMutationVariables>;
export const UpdateGameSettingsDocument = gql`
    mutation UpdateGameSettings($id: Int!, $input: games_set_input!) {
  update_games_by_pk(pk_columns: {id: $id}, _set: $input) {
    id
    join_code
    starting_letter
    seconds_per_turn
    num_entries_per_player
  }
}
    `;
export type UpdateGameSettingsMutationFn = ApolloReactCommon.MutationFunction<UpdateGameSettingsMutation, UpdateGameSettingsMutationVariables>;

/**
 * __useUpdateGameSettingsMutation__
 *
 * To run a mutation, you first call `useUpdateGameSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGameSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGameSettingsMutation, { data, loading, error }] = useUpdateGameSettingsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateGameSettingsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateGameSettingsMutation, UpdateGameSettingsMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateGameSettingsMutation, UpdateGameSettingsMutationVariables>(UpdateGameSettingsDocument, baseOptions);
      }
export type UpdateGameSettingsMutationHookResult = ReturnType<typeof useUpdateGameSettingsMutation>;
export type UpdateGameSettingsMutationResult = ApolloReactCommon.MutationResult<UpdateGameSettingsMutation>;
export type UpdateGameSettingsMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateGameSettingsMutation, UpdateGameSettingsMutationVariables>;
export const UpdatePlayerDocument = gql`
    mutation UpdatePlayer($id: Int!, $input: players_set_input!) {
  update_players_by_pk(pk_columns: {id: $id}, _set: $input) {
    id
    username
  }
}
    `;
export type UpdatePlayerMutationFn = ApolloReactCommon.MutationFunction<UpdatePlayerMutation, UpdatePlayerMutationVariables>;

/**
 * __useUpdatePlayerMutation__
 *
 * To run a mutation, you first call `useUpdatePlayerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePlayerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePlayerMutation, { data, loading, error }] = useUpdatePlayerMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePlayerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdatePlayerMutation, UpdatePlayerMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdatePlayerMutation, UpdatePlayerMutationVariables>(UpdatePlayerDocument, baseOptions);
      }
export type UpdatePlayerMutationHookResult = ReturnType<typeof useUpdatePlayerMutation>;
export type UpdatePlayerMutationResult = ApolloReactCommon.MutationResult<UpdatePlayerMutation>;
export type UpdatePlayerMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdatePlayerMutation, UpdatePlayerMutationVariables>;
export const WaitingRoomDocument = gql`
    subscription WaitingRoom($gameId: Int!) {
  games_by_pk(id: $gameId) {
    id
    starting_letter
    seconds_per_turn
    num_entries_per_player
    players(where: {username: {_neq: null}}) {
      id
      username
    }
  }
}
    `;

/**
 * __useWaitingRoomSubscription__
 *
 * To run a query within a React component, call `useWaitingRoomSubscription` and pass it any options that fit your needs.
 * When your component renders, `useWaitingRoomSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWaitingRoomSubscription({
 *   variables: {
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
export function useWaitingRoomSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<WaitingRoomSubscription, WaitingRoomSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<WaitingRoomSubscription, WaitingRoomSubscriptionVariables>(WaitingRoomDocument, baseOptions);
      }
export type WaitingRoomSubscriptionHookResult = ReturnType<typeof useWaitingRoomSubscription>;
export type WaitingRoomSubscriptionResult = ApolloReactCommon.SubscriptionResult<WaitingRoomSubscription>;