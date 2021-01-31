import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import { GraphQLError } from 'graphql-request/dist/types';
import { Headers } from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  json: any;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
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

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
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

/** columns and relationships of "cards" */
export type Cards = {
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  game: Games;
  game_id: Scalars['uuid'];
  id: Scalars['uuid'];
  is_allowed?: Maybe<Scalars['Boolean']>;
  player_id: Scalars['uuid'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  word: Scalars['String'];
};

/** aggregated selection of "cards" */
export type CardsAggregate = {
  aggregate?: Maybe<CardsAggregateFields>;
  nodes: Array<Cards>;
};

/** aggregate fields of "cards" */
export type CardsAggregateFields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<CardsMaxFields>;
  min?: Maybe<CardsMinFields>;
};


/** aggregate fields of "cards" */
export type CardsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<CardsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "cards" */
export type CardsAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<CardsMaxOrderBy>;
  min?: Maybe<CardsMinOrderBy>;
};

/** input type for inserting array relation for remote table "cards" */
export type CardsArrRelInsertInput = {
  data: Array<CardsInsertInput>;
  on_conflict?: Maybe<CardsOnConflict>;
};

/** Boolean expression to filter rows from the table "cards". All fields are combined with a logical 'AND'. */
export type CardsBoolExp = {
  _and?: Maybe<Array<Maybe<CardsBoolExp>>>;
  _not?: Maybe<CardsBoolExp>;
  _or?: Maybe<Array<Maybe<CardsBoolExp>>>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  game?: Maybe<GamesBoolExp>;
  game_id?: Maybe<UuidComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  is_allowed?: Maybe<BooleanComparisonExp>;
  player_id?: Maybe<UuidComparisonExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
  word?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "cards" */
export enum CardsConstraint {
  /** unique or primary key constraint */
  CardsPkey = 'cards_pkey'
}

/** input type for inserting data into table "cards" */
export type CardsInsertInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  game?: Maybe<GamesObjRelInsertInput>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  is_allowed?: Maybe<Scalars['Boolean']>;
  player_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  word?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type CardsMaxFields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  player_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  word?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "cards" */
export type CardsMaxOrderBy = {
  created_at?: Maybe<OrderBy>;
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  word?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type CardsMinFields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  player_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  word?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "cards" */
export type CardsMinOrderBy = {
  created_at?: Maybe<OrderBy>;
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  word?: Maybe<OrderBy>;
};

/** response of any mutation on the table "cards" */
export type CardsMutationResponse = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Cards>;
};

/** input type for inserting object relation for remote table "cards" */
export type CardsObjRelInsertInput = {
  data: CardsInsertInput;
  on_conflict?: Maybe<CardsOnConflict>;
};

/** on conflict condition type for table "cards" */
export type CardsOnConflict = {
  constraint: CardsConstraint;
  update_columns: Array<CardsUpdateColumn>;
  where?: Maybe<CardsBoolExp>;
};

/** ordering options when selecting data from "cards" */
export type CardsOrderBy = {
  created_at?: Maybe<OrderBy>;
  game?: Maybe<GamesOrderBy>;
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  is_allowed?: Maybe<OrderBy>;
  player_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  word?: Maybe<OrderBy>;
};

/** primary key columns input for table: "cards" */
export type CardsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "cards" */
export enum CardsSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsAllowed = 'is_allowed',
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Word = 'word'
}

/** input type for updating data in table "cards" */
export type CardsSetInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  is_allowed?: Maybe<Scalars['Boolean']>;
  player_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  word?: Maybe<Scalars['String']>;
};

/** update columns of table "cards" */
export enum CardsUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsAllowed = 'is_allowed',
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Word = 'word'
}

/** columns and relationships of "game_card_play_style" */
export type GameCardPlayStyle = {
  value: Scalars['String'];
};

/** aggregated selection of "game_card_play_style" */
export type GameCardPlayStyleAggregate = {
  aggregate?: Maybe<GameCardPlayStyleAggregateFields>;
  nodes: Array<GameCardPlayStyle>;
};

/** aggregate fields of "game_card_play_style" */
export type GameCardPlayStyleAggregateFields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<GameCardPlayStyleMaxFields>;
  min?: Maybe<GameCardPlayStyleMinFields>;
};


/** aggregate fields of "game_card_play_style" */
export type GameCardPlayStyleAggregateFieldsCountArgs = {
  columns?: Maybe<Array<GameCardPlayStyleSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "game_card_play_style" */
export type GameCardPlayStyleAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<GameCardPlayStyleMaxOrderBy>;
  min?: Maybe<GameCardPlayStyleMinOrderBy>;
};

/** input type for inserting array relation for remote table "game_card_play_style" */
export type GameCardPlayStyleArrRelInsertInput = {
  data: Array<GameCardPlayStyleInsertInput>;
  on_conflict?: Maybe<GameCardPlayStyleOnConflict>;
};

/** Boolean expression to filter rows from the table "game_card_play_style". All fields are combined with a logical 'AND'. */
export type GameCardPlayStyleBoolExp = {
  _and?: Maybe<Array<Maybe<GameCardPlayStyleBoolExp>>>;
  _not?: Maybe<GameCardPlayStyleBoolExp>;
  _or?: Maybe<Array<Maybe<GameCardPlayStyleBoolExp>>>;
  value?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "game_card_play_style" */
export enum GameCardPlayStyleConstraint {
  /** unique or primary key constraint */
  GameCardPlayStylePkey = 'game_card_play_style_pkey'
}

export enum GameCardPlayStyleEnum {
  HostProvidesWords = 'host_provides_words',
  PackWords = 'pack_words',
  PlayersSubmitWords = 'players_submit_words'
}

/** expression to compare columns of type game_card_play_style_enum. All fields are combined with logical 'AND'. */
export type GameCardPlayStyleEnumComparisonExp = {
  _eq?: Maybe<GameCardPlayStyleEnum>;
  _in?: Maybe<Array<GameCardPlayStyleEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<GameCardPlayStyleEnum>;
  _nin?: Maybe<Array<GameCardPlayStyleEnum>>;
};

/** input type for inserting data into table "game_card_play_style" */
export type GameCardPlayStyleInsertInput = {
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type GameCardPlayStyleMaxFields = {
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "game_card_play_style" */
export type GameCardPlayStyleMaxOrderBy = {
  value?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type GameCardPlayStyleMinFields = {
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "game_card_play_style" */
export type GameCardPlayStyleMinOrderBy = {
  value?: Maybe<OrderBy>;
};

/** response of any mutation on the table "game_card_play_style" */
export type GameCardPlayStyleMutationResponse = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<GameCardPlayStyle>;
};

/** input type for inserting object relation for remote table "game_card_play_style" */
export type GameCardPlayStyleObjRelInsertInput = {
  data: GameCardPlayStyleInsertInput;
  on_conflict?: Maybe<GameCardPlayStyleOnConflict>;
};

/** on conflict condition type for table "game_card_play_style" */
export type GameCardPlayStyleOnConflict = {
  constraint: GameCardPlayStyleConstraint;
  update_columns: Array<GameCardPlayStyleUpdateColumn>;
  where?: Maybe<GameCardPlayStyleBoolExp>;
};

/** ordering options when selecting data from "game_card_play_style" */
export type GameCardPlayStyleOrderBy = {
  value?: Maybe<OrderBy>;
};

/** primary key columns input for table: "game_card_play_style" */
export type GameCardPlayStylePkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "game_card_play_style" */
export enum GameCardPlayStyleSelectColumn {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "game_card_play_style" */
export type GameCardPlayStyleSetInput = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "game_card_play_style" */
export enum GameCardPlayStyleUpdateColumn {
  /** column name */
  Value = 'value'
}

/** columns and relationships of "game_state" */
export type GameState = {
  value: Scalars['String'];
};

/** aggregated selection of "game_state" */
export type GameStateAggregate = {
  aggregate?: Maybe<GameStateAggregateFields>;
  nodes: Array<GameState>;
};

/** aggregate fields of "game_state" */
export type GameStateAggregateFields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<GameStateMaxFields>;
  min?: Maybe<GameStateMinFields>;
};


/** aggregate fields of "game_state" */
export type GameStateAggregateFieldsCountArgs = {
  columns?: Maybe<Array<GameStateSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "game_state" */
export type GameStateAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<GameStateMaxOrderBy>;
  min?: Maybe<GameStateMinOrderBy>;
};

/** input type for inserting array relation for remote table "game_state" */
export type GameStateArrRelInsertInput = {
  data: Array<GameStateInsertInput>;
  on_conflict?: Maybe<GameStateOnConflict>;
};

/** Boolean expression to filter rows from the table "game_state". All fields are combined with a logical 'AND'. */
export type GameStateBoolExp = {
  _and?: Maybe<Array<Maybe<GameStateBoolExp>>>;
  _not?: Maybe<GameStateBoolExp>;
  _or?: Maybe<Array<Maybe<GameStateBoolExp>>>;
  value?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "game_state" */
export enum GameStateConstraint {
  /** unique or primary key constraint */
  GameStatePkey = 'game_state_pkey'
}

export enum GameStateEnum {
  ActivePlay = 'active_play',
  CardSubmission = 'card_submission',
  Ended = 'ended',
  Lobby = 'lobby',
  TeamAssignment = 'team_assignment'
}

/** expression to compare columns of type game_state_enum. All fields are combined with logical 'AND'. */
export type GameStateEnumComparisonExp = {
  _eq?: Maybe<GameStateEnum>;
  _in?: Maybe<Array<GameStateEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<GameStateEnum>;
  _nin?: Maybe<Array<GameStateEnum>>;
};

/** input type for inserting data into table "game_state" */
export type GameStateInsertInput = {
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type GameStateMaxFields = {
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "game_state" */
export type GameStateMaxOrderBy = {
  value?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type GameStateMinFields = {
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "game_state" */
export type GameStateMinOrderBy = {
  value?: Maybe<OrderBy>;
};

/** response of any mutation on the table "game_state" */
export type GameStateMutationResponse = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<GameState>;
};

/** input type for inserting object relation for remote table "game_state" */
export type GameStateObjRelInsertInput = {
  data: GameStateInsertInput;
  on_conflict?: Maybe<GameStateOnConflict>;
};

/** on conflict condition type for table "game_state" */
export type GameStateOnConflict = {
  constraint: GameStateConstraint;
  update_columns: Array<GameStateUpdateColumn>;
  where?: Maybe<GameStateBoolExp>;
};

/** ordering options when selecting data from "game_state" */
export type GameStateOrderBy = {
  value?: Maybe<OrderBy>;
};

/** primary key columns input for table: "game_state" */
export type GameStatePkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "game_state" */
export enum GameStateSelectColumn {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "game_state" */
export type GameStateSetInput = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "game_state" */
export enum GameStateUpdateColumn {
  /** column name */
  Value = 'value'
}

/** columns and relationships of "games" */
export type Games = {
  allow_card_skips: Scalars['Boolean'];
  card_play_style: GameCardPlayStyleEnum;
  /** An array relationship */
  cards: Array<Cards>;
  /** An aggregated array relationship */
  cards_aggregate: CardsAggregate;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  host?: Maybe<Players>;
  host_id?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  join_code?: Maybe<Scalars['String']>;
  num_entries_per_player?: Maybe<Scalars['Int']>;
  /** An array relationship */
  players: Array<Players>;
  /** An aggregated array relationship */
  players_aggregate: PlayersAggregate;
  /** An array relationship */
  rounds: Array<Rounds>;
  /** An aggregated array relationship */
  rounds_aggregate: RoundsAggregate;
  screen_cards: Scalars['Boolean'];
  seconds_per_turn?: Maybe<Scalars['Int']>;
  starting_letter?: Maybe<Scalars['String']>;
  state: GameStateEnum;
  /** An array relationship */
  turns: Array<Turns>;
  /** An aggregated array relationship */
  turns_aggregate: TurnsAggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "games" */
export type GamesCardsArgs = {
  distinct_on?: Maybe<Array<CardsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CardsOrderBy>>;
  where?: Maybe<CardsBoolExp>;
};


/** columns and relationships of "games" */
export type GamesCardsAggregateArgs = {
  distinct_on?: Maybe<Array<CardsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CardsOrderBy>>;
  where?: Maybe<CardsBoolExp>;
};


/** columns and relationships of "games" */
export type GamesPlayersArgs = {
  distinct_on?: Maybe<Array<PlayersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PlayersOrderBy>>;
  where?: Maybe<PlayersBoolExp>;
};


/** columns and relationships of "games" */
export type GamesPlayersAggregateArgs = {
  distinct_on?: Maybe<Array<PlayersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PlayersOrderBy>>;
  where?: Maybe<PlayersBoolExp>;
};


/** columns and relationships of "games" */
export type GamesRoundsArgs = {
  distinct_on?: Maybe<Array<RoundsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<RoundsOrderBy>>;
  where?: Maybe<RoundsBoolExp>;
};


/** columns and relationships of "games" */
export type GamesRoundsAggregateArgs = {
  distinct_on?: Maybe<Array<RoundsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<RoundsOrderBy>>;
  where?: Maybe<RoundsBoolExp>;
};


/** columns and relationships of "games" */
export type GamesTurnsArgs = {
  distinct_on?: Maybe<Array<TurnsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TurnsOrderBy>>;
  where?: Maybe<TurnsBoolExp>;
};


/** columns and relationships of "games" */
export type GamesTurnsAggregateArgs = {
  distinct_on?: Maybe<Array<TurnsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TurnsOrderBy>>;
  where?: Maybe<TurnsBoolExp>;
};

/** aggregated selection of "games" */
export type GamesAggregate = {
  aggregate?: Maybe<GamesAggregateFields>;
  nodes: Array<Games>;
};

/** aggregate fields of "games" */
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


/** aggregate fields of "games" */
export type GamesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<GamesSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "games" */
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

/** input type for inserting array relation for remote table "games" */
export type GamesArrRelInsertInput = {
  data: Array<GamesInsertInput>;
  on_conflict?: Maybe<GamesOnConflict>;
};

/** aggregate avg on columns */
export type GamesAvgFields = {
  num_entries_per_player?: Maybe<Scalars['Float']>;
  seconds_per_turn?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "games" */
export type GamesAvgOrderBy = {
  num_entries_per_player?: Maybe<OrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "games". All fields are combined with a logical 'AND'. */
export type GamesBoolExp = {
  _and?: Maybe<Array<Maybe<GamesBoolExp>>>;
  _not?: Maybe<GamesBoolExp>;
  _or?: Maybe<Array<Maybe<GamesBoolExp>>>;
  allow_card_skips?: Maybe<BooleanComparisonExp>;
  card_play_style?: Maybe<GameCardPlayStyleEnumComparisonExp>;
  cards?: Maybe<CardsBoolExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  host?: Maybe<PlayersBoolExp>;
  host_id?: Maybe<UuidComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  join_code?: Maybe<StringComparisonExp>;
  num_entries_per_player?: Maybe<IntComparisonExp>;
  players?: Maybe<PlayersBoolExp>;
  rounds?: Maybe<RoundsBoolExp>;
  screen_cards?: Maybe<BooleanComparisonExp>;
  seconds_per_turn?: Maybe<IntComparisonExp>;
  starting_letter?: Maybe<StringComparisonExp>;
  state?: Maybe<GameStateEnumComparisonExp>;
  turns?: Maybe<TurnsBoolExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "games" */
export enum GamesConstraint {
  /** unique or primary key constraint */
  GamesJoinCodeIdx = 'games_join_code_idx',
  /** unique or primary key constraint */
  GamesJoinCodeKey = 'games_join_code_key',
  /** unique or primary key constraint */
  GamesPkey = 'games_pkey'
}

/** input type for incrementing integer column in table "games" */
export type GamesIncInput = {
  num_entries_per_player?: Maybe<Scalars['Int']>;
  seconds_per_turn?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "games" */
export type GamesInsertInput = {
  allow_card_skips?: Maybe<Scalars['Boolean']>;
  card_play_style?: Maybe<GameCardPlayStyleEnum>;
  cards?: Maybe<CardsArrRelInsertInput>;
  created_at?: Maybe<Scalars['timestamptz']>;
  host?: Maybe<PlayersObjRelInsertInput>;
  host_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  join_code?: Maybe<Scalars['String']>;
  num_entries_per_player?: Maybe<Scalars['Int']>;
  players?: Maybe<PlayersArrRelInsertInput>;
  rounds?: Maybe<RoundsArrRelInsertInput>;
  screen_cards?: Maybe<Scalars['Boolean']>;
  seconds_per_turn?: Maybe<Scalars['Int']>;
  starting_letter?: Maybe<Scalars['String']>;
  state?: Maybe<GameStateEnum>;
  turns?: Maybe<TurnsArrRelInsertInput>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type GamesMaxFields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  host_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  join_code?: Maybe<Scalars['String']>;
  num_entries_per_player?: Maybe<Scalars['Int']>;
  seconds_per_turn?: Maybe<Scalars['Int']>;
  starting_letter?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "games" */
export type GamesMaxOrderBy = {
  created_at?: Maybe<OrderBy>;
  host_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  join_code?: Maybe<OrderBy>;
  num_entries_per_player?: Maybe<OrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
  starting_letter?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type GamesMinFields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  host_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  join_code?: Maybe<Scalars['String']>;
  num_entries_per_player?: Maybe<Scalars['Int']>;
  seconds_per_turn?: Maybe<Scalars['Int']>;
  starting_letter?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "games" */
export type GamesMinOrderBy = {
  created_at?: Maybe<OrderBy>;
  host_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  join_code?: Maybe<OrderBy>;
  num_entries_per_player?: Maybe<OrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
  starting_letter?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** response of any mutation on the table "games" */
export type GamesMutationResponse = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Games>;
};

/** input type for inserting object relation for remote table "games" */
export type GamesObjRelInsertInput = {
  data: GamesInsertInput;
  on_conflict?: Maybe<GamesOnConflict>;
};

/** on conflict condition type for table "games" */
export type GamesOnConflict = {
  constraint: GamesConstraint;
  update_columns: Array<GamesUpdateColumn>;
  where?: Maybe<GamesBoolExp>;
};

/** ordering options when selecting data from "games" */
export type GamesOrderBy = {
  allow_card_skips?: Maybe<OrderBy>;
  card_play_style?: Maybe<OrderBy>;
  cards_aggregate?: Maybe<CardsAggregateOrderBy>;
  created_at?: Maybe<OrderBy>;
  host?: Maybe<PlayersOrderBy>;
  host_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  join_code?: Maybe<OrderBy>;
  num_entries_per_player?: Maybe<OrderBy>;
  players_aggregate?: Maybe<PlayersAggregateOrderBy>;
  rounds_aggregate?: Maybe<RoundsAggregateOrderBy>;
  screen_cards?: Maybe<OrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
  starting_letter?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
  turns_aggregate?: Maybe<TurnsAggregateOrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** primary key columns input for table: "games" */
export type GamesPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "games" */
export enum GamesSelectColumn {
  /** column name */
  AllowCardSkips = 'allow_card_skips',
  /** column name */
  CardPlayStyle = 'card_play_style',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HostId = 'host_id',
  /** column name */
  Id = 'id',
  /** column name */
  JoinCode = 'join_code',
  /** column name */
  NumEntriesPerPlayer = 'num_entries_per_player',
  /** column name */
  ScreenCards = 'screen_cards',
  /** column name */
  SecondsPerTurn = 'seconds_per_turn',
  /** column name */
  StartingLetter = 'starting_letter',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "games" */
export type GamesSetInput = {
  allow_card_skips?: Maybe<Scalars['Boolean']>;
  card_play_style?: Maybe<GameCardPlayStyleEnum>;
  created_at?: Maybe<Scalars['timestamptz']>;
  host_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  join_code?: Maybe<Scalars['String']>;
  num_entries_per_player?: Maybe<Scalars['Int']>;
  screen_cards?: Maybe<Scalars['Boolean']>;
  seconds_per_turn?: Maybe<Scalars['Int']>;
  starting_letter?: Maybe<Scalars['String']>;
  state?: Maybe<GameStateEnum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type GamesStddevFields = {
  num_entries_per_player?: Maybe<Scalars['Float']>;
  seconds_per_turn?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "games" */
export type GamesStddevOrderBy = {
  num_entries_per_player?: Maybe<OrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type GamesStddevPopFields = {
  num_entries_per_player?: Maybe<Scalars['Float']>;
  seconds_per_turn?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "games" */
export type GamesStddevPopOrderBy = {
  num_entries_per_player?: Maybe<OrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type GamesStddevSampFields = {
  num_entries_per_player?: Maybe<Scalars['Float']>;
  seconds_per_turn?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "games" */
export type GamesStddevSampOrderBy = {
  num_entries_per_player?: Maybe<OrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type GamesSumFields = {
  num_entries_per_player?: Maybe<Scalars['Int']>;
  seconds_per_turn?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "games" */
export type GamesSumOrderBy = {
  num_entries_per_player?: Maybe<OrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
};

/** update columns of table "games" */
export enum GamesUpdateColumn {
  /** column name */
  AllowCardSkips = 'allow_card_skips',
  /** column name */
  CardPlayStyle = 'card_play_style',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HostId = 'host_id',
  /** column name */
  Id = 'id',
  /** column name */
  JoinCode = 'join_code',
  /** column name */
  NumEntriesPerPlayer = 'num_entries_per_player',
  /** column name */
  ScreenCards = 'screen_cards',
  /** column name */
  SecondsPerTurn = 'seconds_per_turn',
  /** column name */
  StartingLetter = 'starting_letter',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type GamesVarPopFields = {
  num_entries_per_player?: Maybe<Scalars['Float']>;
  seconds_per_turn?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "games" */
export type GamesVarPopOrderBy = {
  num_entries_per_player?: Maybe<OrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type GamesVarSampFields = {
  num_entries_per_player?: Maybe<Scalars['Float']>;
  seconds_per_turn?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "games" */
export type GamesVarSampOrderBy = {
  num_entries_per_player?: Maybe<OrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type GamesVarianceFields = {
  num_entries_per_player?: Maybe<Scalars['Float']>;
  seconds_per_turn?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "games" */
export type GamesVarianceOrderBy = {
  num_entries_per_player?: Maybe<OrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
};

export type JoinGameOutput = {
  id: Scalars['String'];
  jwt_token: Scalars['String'];
};


/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type JsonComparisonExp = {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
};


/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type JsonbComparisonExp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type MutationRoot = {
  /** delete data from the table: "cards" */
  delete_cards?: Maybe<CardsMutationResponse>;
  /** delete single row from the table: "cards" */
  delete_cards_by_pk?: Maybe<Cards>;
  /** delete data from the table: "game_card_play_style" */
  delete_game_card_play_style?: Maybe<GameCardPlayStyleMutationResponse>;
  /** delete single row from the table: "game_card_play_style" */
  delete_game_card_play_style_by_pk?: Maybe<GameCardPlayStyle>;
  /** delete data from the table: "game_state" */
  delete_game_state?: Maybe<GameStateMutationResponse>;
  /** delete single row from the table: "game_state" */
  delete_game_state_by_pk?: Maybe<GameState>;
  /** delete data from the table: "games" */
  delete_games?: Maybe<GamesMutationResponse>;
  /** delete single row from the table: "games" */
  delete_games_by_pk?: Maybe<Games>;
  /** delete data from the table: "players" */
  delete_players?: Maybe<PlayersMutationResponse>;
  /** delete single row from the table: "players" */
  delete_players_by_pk?: Maybe<Players>;
  /** delete data from the table: "rounds" */
  delete_rounds?: Maybe<RoundsMutationResponse>;
  /** delete single row from the table: "rounds" */
  delete_rounds_by_pk?: Maybe<Rounds>;
  /** delete data from the table: "turn_scorings" */
  delete_turn_scorings?: Maybe<TurnScoringsMutationResponse>;
  /** delete single row from the table: "turn_scorings" */
  delete_turn_scorings_by_pk?: Maybe<TurnScorings>;
  /** delete data from the table: "turns" */
  delete_turns?: Maybe<TurnsMutationResponse>;
  /** delete single row from the table: "turns" */
  delete_turns_by_pk?: Maybe<Turns>;
  /** insert data into the table: "cards" */
  insert_cards?: Maybe<CardsMutationResponse>;
  /** insert a single row into the table: "cards" */
  insert_cards_one?: Maybe<Cards>;
  /** insert data into the table: "game_card_play_style" */
  insert_game_card_play_style?: Maybe<GameCardPlayStyleMutationResponse>;
  /** insert a single row into the table: "game_card_play_style" */
  insert_game_card_play_style_one?: Maybe<GameCardPlayStyle>;
  /** insert data into the table: "game_state" */
  insert_game_state?: Maybe<GameStateMutationResponse>;
  /** insert a single row into the table: "game_state" */
  insert_game_state_one?: Maybe<GameState>;
  /** insert data into the table: "games" */
  insert_games?: Maybe<GamesMutationResponse>;
  /** insert a single row into the table: "games" */
  insert_games_one?: Maybe<Games>;
  /** insert data into the table: "players" */
  insert_players?: Maybe<PlayersMutationResponse>;
  /** insert a single row into the table: "players" */
  insert_players_one?: Maybe<Players>;
  /** insert data into the table: "rounds" */
  insert_rounds?: Maybe<RoundsMutationResponse>;
  /** insert a single row into the table: "rounds" */
  insert_rounds_one?: Maybe<Rounds>;
  /** insert data into the table: "turn_scorings" */
  insert_turn_scorings?: Maybe<TurnScoringsMutationResponse>;
  /** insert a single row into the table: "turn_scorings" */
  insert_turn_scorings_one?: Maybe<TurnScorings>;
  /** insert data into the table: "turns" */
  insert_turns?: Maybe<TurnsMutationResponse>;
  /** insert a single row into the table: "turns" */
  insert_turns_one?: Maybe<Turns>;
  /** perform the action: "joinGame" */
  joinGame?: Maybe<JoinGameOutput>;
  /** perform the action: "newGame" */
  newGame?: Maybe<NewGameOutput>;
  /** update data of the table: "cards" */
  update_cards?: Maybe<CardsMutationResponse>;
  /** update single row of the table: "cards" */
  update_cards_by_pk?: Maybe<Cards>;
  /** update data of the table: "game_card_play_style" */
  update_game_card_play_style?: Maybe<GameCardPlayStyleMutationResponse>;
  /** update single row of the table: "game_card_play_style" */
  update_game_card_play_style_by_pk?: Maybe<GameCardPlayStyle>;
  /** update data of the table: "game_state" */
  update_game_state?: Maybe<GameStateMutationResponse>;
  /** update single row of the table: "game_state" */
  update_game_state_by_pk?: Maybe<GameState>;
  /** update data of the table: "games" */
  update_games?: Maybe<GamesMutationResponse>;
  /** update single row of the table: "games" */
  update_games_by_pk?: Maybe<Games>;
  /** update data of the table: "players" */
  update_players?: Maybe<PlayersMutationResponse>;
  /** update single row of the table: "players" */
  update_players_by_pk?: Maybe<Players>;
  /** update data of the table: "rounds" */
  update_rounds?: Maybe<RoundsMutationResponse>;
  /** update single row of the table: "rounds" */
  update_rounds_by_pk?: Maybe<Rounds>;
  /** update data of the table: "turn_scorings" */
  update_turn_scorings?: Maybe<TurnScoringsMutationResponse>;
  /** update single row of the table: "turn_scorings" */
  update_turn_scorings_by_pk?: Maybe<TurnScorings>;
  /** update data of the table: "turns" */
  update_turns?: Maybe<TurnsMutationResponse>;
  /** update single row of the table: "turns" */
  update_turns_by_pk?: Maybe<Turns>;
};


/** mutation root */
export type MutationRootDeleteCardsArgs = {
  where: CardsBoolExp;
};


/** mutation root */
export type MutationRootDeleteCardsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteGameCardPlayStyleArgs = {
  where: GameCardPlayStyleBoolExp;
};


/** mutation root */
export type MutationRootDeleteGameCardPlayStyleByPkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteGameStateArgs = {
  where: GameStateBoolExp;
};


/** mutation root */
export type MutationRootDeleteGameStateByPkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteGamesArgs = {
  where: GamesBoolExp;
};


/** mutation root */
export type MutationRootDeleteGamesByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeletePlayersArgs = {
  where: PlayersBoolExp;
};


/** mutation root */
export type MutationRootDeletePlayersByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteRoundsArgs = {
  where: RoundsBoolExp;
};


/** mutation root */
export type MutationRootDeleteRoundsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteTurnScoringsArgs = {
  where: TurnScoringsBoolExp;
};


/** mutation root */
export type MutationRootDeleteTurnScoringsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteTurnsArgs = {
  where: TurnsBoolExp;
};


/** mutation root */
export type MutationRootDeleteTurnsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootInsertCardsArgs = {
  objects: Array<CardsInsertInput>;
  on_conflict?: Maybe<CardsOnConflict>;
};


/** mutation root */
export type MutationRootInsertCardsOneArgs = {
  object: CardsInsertInput;
  on_conflict?: Maybe<CardsOnConflict>;
};


/** mutation root */
export type MutationRootInsertGameCardPlayStyleArgs = {
  objects: Array<GameCardPlayStyleInsertInput>;
  on_conflict?: Maybe<GameCardPlayStyleOnConflict>;
};


/** mutation root */
export type MutationRootInsertGameCardPlayStyleOneArgs = {
  object: GameCardPlayStyleInsertInput;
  on_conflict?: Maybe<GameCardPlayStyleOnConflict>;
};


/** mutation root */
export type MutationRootInsertGameStateArgs = {
  objects: Array<GameStateInsertInput>;
  on_conflict?: Maybe<GameStateOnConflict>;
};


/** mutation root */
export type MutationRootInsertGameStateOneArgs = {
  object: GameStateInsertInput;
  on_conflict?: Maybe<GameStateOnConflict>;
};


/** mutation root */
export type MutationRootInsertGamesArgs = {
  objects: Array<GamesInsertInput>;
  on_conflict?: Maybe<GamesOnConflict>;
};


/** mutation root */
export type MutationRootInsertGamesOneArgs = {
  object: GamesInsertInput;
  on_conflict?: Maybe<GamesOnConflict>;
};


/** mutation root */
export type MutationRootInsertPlayersArgs = {
  objects: Array<PlayersInsertInput>;
  on_conflict?: Maybe<PlayersOnConflict>;
};


/** mutation root */
export type MutationRootInsertPlayersOneArgs = {
  object: PlayersInsertInput;
  on_conflict?: Maybe<PlayersOnConflict>;
};


/** mutation root */
export type MutationRootInsertRoundsArgs = {
  objects: Array<RoundsInsertInput>;
  on_conflict?: Maybe<RoundsOnConflict>;
};


/** mutation root */
export type MutationRootInsertRoundsOneArgs = {
  object: RoundsInsertInput;
  on_conflict?: Maybe<RoundsOnConflict>;
};


/** mutation root */
export type MutationRootInsertTurnScoringsArgs = {
  objects: Array<TurnScoringsInsertInput>;
  on_conflict?: Maybe<TurnScoringsOnConflict>;
};


/** mutation root */
export type MutationRootInsertTurnScoringsOneArgs = {
  object: TurnScoringsInsertInput;
  on_conflict?: Maybe<TurnScoringsOnConflict>;
};


/** mutation root */
export type MutationRootInsertTurnsArgs = {
  objects: Array<TurnsInsertInput>;
  on_conflict?: Maybe<TurnsOnConflict>;
};


/** mutation root */
export type MutationRootInsertTurnsOneArgs = {
  object: TurnsInsertInput;
  on_conflict?: Maybe<TurnsOnConflict>;
};


/** mutation root */
export type MutationRootJoinGameArgs = {
  clientUuid: Scalars['String'];
  gameId: Scalars['String'];
};


/** mutation root */
export type MutationRootUpdateCardsArgs = {
  _set?: Maybe<CardsSetInput>;
  where: CardsBoolExp;
};


/** mutation root */
export type MutationRootUpdateCardsByPkArgs = {
  _set?: Maybe<CardsSetInput>;
  pk_columns: CardsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateGameCardPlayStyleArgs = {
  _set?: Maybe<GameCardPlayStyleSetInput>;
  where: GameCardPlayStyleBoolExp;
};


/** mutation root */
export type MutationRootUpdateGameCardPlayStyleByPkArgs = {
  _set?: Maybe<GameCardPlayStyleSetInput>;
  pk_columns: GameCardPlayStylePkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateGameStateArgs = {
  _set?: Maybe<GameStateSetInput>;
  where: GameStateBoolExp;
};


/** mutation root */
export type MutationRootUpdateGameStateByPkArgs = {
  _set?: Maybe<GameStateSetInput>;
  pk_columns: GameStatePkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateGamesArgs = {
  _inc?: Maybe<GamesIncInput>;
  _set?: Maybe<GamesSetInput>;
  where: GamesBoolExp;
};


/** mutation root */
export type MutationRootUpdateGamesByPkArgs = {
  _inc?: Maybe<GamesIncInput>;
  _set?: Maybe<GamesSetInput>;
  pk_columns: GamesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdatePlayersArgs = {
  _inc?: Maybe<PlayersIncInput>;
  _set?: Maybe<PlayersSetInput>;
  where: PlayersBoolExp;
};


/** mutation root */
export type MutationRootUpdatePlayersByPkArgs = {
  _inc?: Maybe<PlayersIncInput>;
  _set?: Maybe<PlayersSetInput>;
  pk_columns: PlayersPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateRoundsArgs = {
  _inc?: Maybe<RoundsIncInput>;
  _set?: Maybe<RoundsSetInput>;
  where: RoundsBoolExp;
};


/** mutation root */
export type MutationRootUpdateRoundsByPkArgs = {
  _inc?: Maybe<RoundsIncInput>;
  _set?: Maybe<RoundsSetInput>;
  pk_columns: RoundsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateTurnScoringsArgs = {
  _inc?: Maybe<TurnScoringsIncInput>;
  _set?: Maybe<TurnScoringsSetInput>;
  where: TurnScoringsBoolExp;
};


/** mutation root */
export type MutationRootUpdateTurnScoringsByPkArgs = {
  _inc?: Maybe<TurnScoringsIncInput>;
  _set?: Maybe<TurnScoringsSetInput>;
  pk_columns: TurnScoringsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateTurnsArgs = {
  _append?: Maybe<TurnsAppendInput>;
  _delete_at_path?: Maybe<TurnsDeleteAtPathInput>;
  _delete_elem?: Maybe<TurnsDeleteElemInput>;
  _delete_key?: Maybe<TurnsDeleteKeyInput>;
  _inc?: Maybe<TurnsIncInput>;
  _prepend?: Maybe<TurnsPrependInput>;
  _set?: Maybe<TurnsSetInput>;
  where: TurnsBoolExp;
};


/** mutation root */
export type MutationRootUpdateTurnsByPkArgs = {
  _append?: Maybe<TurnsAppendInput>;
  _delete_at_path?: Maybe<TurnsDeleteAtPathInput>;
  _delete_elem?: Maybe<TurnsDeleteElemInput>;
  _delete_key?: Maybe<TurnsDeleteKeyInput>;
  _inc?: Maybe<TurnsIncInput>;
  _prepend?: Maybe<TurnsPrependInput>;
  _set?: Maybe<TurnsSetInput>;
  pk_columns: TurnsPkColumnsInput;
};

export type NewGameOutput = {
  join_code: Scalars['String'];
};

/** column ordering options */
export enum OrderBy {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "players" */
export type Players = {
  client_uuid?: Maybe<Scalars['uuid']>;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  game: Games;
  game_id: Scalars['uuid'];
  id: Scalars['uuid'];
  team?: Maybe<Scalars['String']>;
  team_sequence?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregated selection of "players" */
export type PlayersAggregate = {
  aggregate?: Maybe<PlayersAggregateFields>;
  nodes: Array<Players>;
};

/** aggregate fields of "players" */
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


/** aggregate fields of "players" */
export type PlayersAggregateFieldsCountArgs = {
  columns?: Maybe<Array<PlayersSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "players" */
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

/** input type for inserting array relation for remote table "players" */
export type PlayersArrRelInsertInput = {
  data: Array<PlayersInsertInput>;
  on_conflict?: Maybe<PlayersOnConflict>;
};

/** aggregate avg on columns */
export type PlayersAvgFields = {
  team_sequence?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "players" */
export type PlayersAvgOrderBy = {
  team_sequence?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "players". All fields are combined with a logical 'AND'. */
export type PlayersBoolExp = {
  _and?: Maybe<Array<Maybe<PlayersBoolExp>>>;
  _not?: Maybe<PlayersBoolExp>;
  _or?: Maybe<Array<Maybe<PlayersBoolExp>>>;
  client_uuid?: Maybe<UuidComparisonExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  game?: Maybe<GamesBoolExp>;
  game_id?: Maybe<UuidComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  team?: Maybe<StringComparisonExp>;
  team_sequence?: Maybe<IntComparisonExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
  username?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "players" */
export enum PlayersConstraint {
  /** unique or primary key constraint */
  PlayersClientUuidGameIdKey = 'players_client_uuid_game_id_key',
  /** unique or primary key constraint */
  PlayersPkey = 'players_pkey'
}

/** input type for incrementing integer column in table "players" */
export type PlayersIncInput = {
  team_sequence?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "players" */
export type PlayersInsertInput = {
  client_uuid?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  game?: Maybe<GamesObjRelInsertInput>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  team?: Maybe<Scalars['String']>;
  team_sequence?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type PlayersMaxFields = {
  client_uuid?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  team?: Maybe<Scalars['String']>;
  team_sequence?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "players" */
export type PlayersMaxOrderBy = {
  client_uuid?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  team?: Maybe<OrderBy>;
  team_sequence?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  username?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type PlayersMinFields = {
  client_uuid?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  team?: Maybe<Scalars['String']>;
  team_sequence?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "players" */
export type PlayersMinOrderBy = {
  client_uuid?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  team?: Maybe<OrderBy>;
  team_sequence?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  username?: Maybe<OrderBy>;
};

/** response of any mutation on the table "players" */
export type PlayersMutationResponse = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Players>;
};

/** input type for inserting object relation for remote table "players" */
export type PlayersObjRelInsertInput = {
  data: PlayersInsertInput;
  on_conflict?: Maybe<PlayersOnConflict>;
};

/** on conflict condition type for table "players" */
export type PlayersOnConflict = {
  constraint: PlayersConstraint;
  update_columns: Array<PlayersUpdateColumn>;
  where?: Maybe<PlayersBoolExp>;
};

/** ordering options when selecting data from "players" */
export type PlayersOrderBy = {
  client_uuid?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  game?: Maybe<GamesOrderBy>;
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  team?: Maybe<OrderBy>;
  team_sequence?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  username?: Maybe<OrderBy>;
};

/** primary key columns input for table: "players" */
export type PlayersPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "players" */
export enum PlayersSelectColumn {
  /** column name */
  ClientUuid = 'client_uuid',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  Team = 'team',
  /** column name */
  TeamSequence = 'team_sequence',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "players" */
export type PlayersSetInput = {
  client_uuid?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  team?: Maybe<Scalars['String']>;
  team_sequence?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type PlayersStddevFields = {
  team_sequence?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "players" */
export type PlayersStddevOrderBy = {
  team_sequence?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type PlayersStddevPopFields = {
  team_sequence?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "players" */
export type PlayersStddevPopOrderBy = {
  team_sequence?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type PlayersStddevSampFields = {
  team_sequence?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "players" */
export type PlayersStddevSampOrderBy = {
  team_sequence?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type PlayersSumFields = {
  team_sequence?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "players" */
export type PlayersSumOrderBy = {
  team_sequence?: Maybe<OrderBy>;
};

/** update columns of table "players" */
export enum PlayersUpdateColumn {
  /** column name */
  ClientUuid = 'client_uuid',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  Team = 'team',
  /** column name */
  TeamSequence = 'team_sequence',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** aggregate var_pop on columns */
export type PlayersVarPopFields = {
  team_sequence?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "players" */
export type PlayersVarPopOrderBy = {
  team_sequence?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type PlayersVarSampFields = {
  team_sequence?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "players" */
export type PlayersVarSampOrderBy = {
  team_sequence?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type PlayersVarianceFields = {
  team_sequence?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "players" */
export type PlayersVarianceOrderBy = {
  team_sequence?: Maybe<OrderBy>;
};

/** query root */
export type QueryRoot = {
  /** fetch data from the table: "cards" */
  cards: Array<Cards>;
  /** fetch aggregated fields from the table: "cards" */
  cards_aggregate: CardsAggregate;
  /** fetch data from the table: "cards" using primary key columns */
  cards_by_pk?: Maybe<Cards>;
  /** fetch data from the table: "game_card_play_style" */
  game_card_play_style: Array<GameCardPlayStyle>;
  /** fetch aggregated fields from the table: "game_card_play_style" */
  game_card_play_style_aggregate: GameCardPlayStyleAggregate;
  /** fetch data from the table: "game_card_play_style" using primary key columns */
  game_card_play_style_by_pk?: Maybe<GameCardPlayStyle>;
  /** fetch data from the table: "game_state" */
  game_state: Array<GameState>;
  /** fetch aggregated fields from the table: "game_state" */
  game_state_aggregate: GameStateAggregate;
  /** fetch data from the table: "game_state" using primary key columns */
  game_state_by_pk?: Maybe<GameState>;
  /** fetch data from the table: "games" */
  games: Array<Games>;
  /** fetch aggregated fields from the table: "games" */
  games_aggregate: GamesAggregate;
  /** fetch data from the table: "games" using primary key columns */
  games_by_pk?: Maybe<Games>;
  /** fetch data from the table: "players" */
  players: Array<Players>;
  /** fetch aggregated fields from the table: "players" */
  players_aggregate: PlayersAggregate;
  /** fetch data from the table: "players" using primary key columns */
  players_by_pk?: Maybe<Players>;
  /** fetch data from the table: "rounds" */
  rounds: Array<Rounds>;
  /** fetch aggregated fields from the table: "rounds" */
  rounds_aggregate: RoundsAggregate;
  /** fetch data from the table: "rounds" using primary key columns */
  rounds_by_pk?: Maybe<Rounds>;
  /** fetch data from the table: "server_time" */
  server_time: Array<ServerTime>;
  /** fetch aggregated fields from the table: "server_time" */
  server_time_aggregate: ServerTimeAggregate;
  /** fetch data from the table: "turn_scorings" */
  turn_scorings: Array<TurnScorings>;
  /** fetch aggregated fields from the table: "turn_scorings" */
  turn_scorings_aggregate: TurnScoringsAggregate;
  /** fetch data from the table: "turn_scorings" using primary key columns */
  turn_scorings_by_pk?: Maybe<TurnScorings>;
  /** fetch data from the table: "turns" */
  turns: Array<Turns>;
  /** fetch aggregated fields from the table: "turns" */
  turns_aggregate: TurnsAggregate;
  /** fetch data from the table: "turns" using primary key columns */
  turns_by_pk?: Maybe<Turns>;
};


/** query root */
export type QueryRootCardsArgs = {
  distinct_on?: Maybe<Array<CardsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CardsOrderBy>>;
  where?: Maybe<CardsBoolExp>;
};


/** query root */
export type QueryRootCardsAggregateArgs = {
  distinct_on?: Maybe<Array<CardsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CardsOrderBy>>;
  where?: Maybe<CardsBoolExp>;
};


/** query root */
export type QueryRootCardsByPkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type QueryRootGameCardPlayStyleArgs = {
  distinct_on?: Maybe<Array<GameCardPlayStyleSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GameCardPlayStyleOrderBy>>;
  where?: Maybe<GameCardPlayStyleBoolExp>;
};


/** query root */
export type QueryRootGameCardPlayStyleAggregateArgs = {
  distinct_on?: Maybe<Array<GameCardPlayStyleSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GameCardPlayStyleOrderBy>>;
  where?: Maybe<GameCardPlayStyleBoolExp>;
};


/** query root */
export type QueryRootGameCardPlayStyleByPkArgs = {
  value: Scalars['String'];
};


/** query root */
export type QueryRootGameStateArgs = {
  distinct_on?: Maybe<Array<GameStateSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GameStateOrderBy>>;
  where?: Maybe<GameStateBoolExp>;
};


/** query root */
export type QueryRootGameStateAggregateArgs = {
  distinct_on?: Maybe<Array<GameStateSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GameStateOrderBy>>;
  where?: Maybe<GameStateBoolExp>;
};


/** query root */
export type QueryRootGameStateByPkArgs = {
  value: Scalars['String'];
};


/** query root */
export type QueryRootGamesArgs = {
  distinct_on?: Maybe<Array<GamesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GamesOrderBy>>;
  where?: Maybe<GamesBoolExp>;
};


/** query root */
export type QueryRootGamesAggregateArgs = {
  distinct_on?: Maybe<Array<GamesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GamesOrderBy>>;
  where?: Maybe<GamesBoolExp>;
};


/** query root */
export type QueryRootGamesByPkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type QueryRootPlayersArgs = {
  distinct_on?: Maybe<Array<PlayersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PlayersOrderBy>>;
  where?: Maybe<PlayersBoolExp>;
};


/** query root */
export type QueryRootPlayersAggregateArgs = {
  distinct_on?: Maybe<Array<PlayersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PlayersOrderBy>>;
  where?: Maybe<PlayersBoolExp>;
};


/** query root */
export type QueryRootPlayersByPkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type QueryRootRoundsArgs = {
  distinct_on?: Maybe<Array<RoundsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<RoundsOrderBy>>;
  where?: Maybe<RoundsBoolExp>;
};


/** query root */
export type QueryRootRoundsAggregateArgs = {
  distinct_on?: Maybe<Array<RoundsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<RoundsOrderBy>>;
  where?: Maybe<RoundsBoolExp>;
};


/** query root */
export type QueryRootRoundsByPkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type QueryRootServerTimeArgs = {
  distinct_on?: Maybe<Array<ServerTimeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ServerTimeOrderBy>>;
  where?: Maybe<ServerTimeBoolExp>;
};


/** query root */
export type QueryRootServerTimeAggregateArgs = {
  distinct_on?: Maybe<Array<ServerTimeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ServerTimeOrderBy>>;
  where?: Maybe<ServerTimeBoolExp>;
};


/** query root */
export type QueryRootTurnScoringsArgs = {
  distinct_on?: Maybe<Array<TurnScoringsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TurnScoringsOrderBy>>;
  where?: Maybe<TurnScoringsBoolExp>;
};


/** query root */
export type QueryRootTurnScoringsAggregateArgs = {
  distinct_on?: Maybe<Array<TurnScoringsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TurnScoringsOrderBy>>;
  where?: Maybe<TurnScoringsBoolExp>;
};


/** query root */
export type QueryRootTurnScoringsByPkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type QueryRootTurnsArgs = {
  distinct_on?: Maybe<Array<TurnsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TurnsOrderBy>>;
  where?: Maybe<TurnsBoolExp>;
};


/** query root */
export type QueryRootTurnsAggregateArgs = {
  distinct_on?: Maybe<Array<TurnsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TurnsOrderBy>>;
  where?: Maybe<TurnsBoolExp>;
};


/** query root */
export type QueryRootTurnsByPkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "rounds" */
export type Rounds = {
  created_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  game: Games;
  game_id: Scalars['uuid'];
  id: Scalars['uuid'];
  order_sequence: Scalars['Int'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  value: Scalars['String'];
};

/** aggregated selection of "rounds" */
export type RoundsAggregate = {
  aggregate?: Maybe<RoundsAggregateFields>;
  nodes: Array<Rounds>;
};

/** aggregate fields of "rounds" */
export type RoundsAggregateFields = {
  avg?: Maybe<RoundsAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<RoundsMaxFields>;
  min?: Maybe<RoundsMinFields>;
  stddev?: Maybe<RoundsStddevFields>;
  stddev_pop?: Maybe<RoundsStddevPopFields>;
  stddev_samp?: Maybe<RoundsStddevSampFields>;
  sum?: Maybe<RoundsSumFields>;
  var_pop?: Maybe<RoundsVarPopFields>;
  var_samp?: Maybe<RoundsVarSampFields>;
  variance?: Maybe<RoundsVarianceFields>;
};


/** aggregate fields of "rounds" */
export type RoundsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<RoundsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "rounds" */
export type RoundsAggregateOrderBy = {
  avg?: Maybe<RoundsAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<RoundsMaxOrderBy>;
  min?: Maybe<RoundsMinOrderBy>;
  stddev?: Maybe<RoundsStddevOrderBy>;
  stddev_pop?: Maybe<RoundsStddevPopOrderBy>;
  stddev_samp?: Maybe<RoundsStddevSampOrderBy>;
  sum?: Maybe<RoundsSumOrderBy>;
  var_pop?: Maybe<RoundsVarPopOrderBy>;
  var_samp?: Maybe<RoundsVarSampOrderBy>;
  variance?: Maybe<RoundsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "rounds" */
export type RoundsArrRelInsertInput = {
  data: Array<RoundsInsertInput>;
  on_conflict?: Maybe<RoundsOnConflict>;
};

/** aggregate avg on columns */
export type RoundsAvgFields = {
  order_sequence?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "rounds" */
export type RoundsAvgOrderBy = {
  order_sequence?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "rounds". All fields are combined with a logical 'AND'. */
export type RoundsBoolExp = {
  _and?: Maybe<Array<Maybe<RoundsBoolExp>>>;
  _not?: Maybe<RoundsBoolExp>;
  _or?: Maybe<Array<Maybe<RoundsBoolExp>>>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  game?: Maybe<GamesBoolExp>;
  game_id?: Maybe<UuidComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  order_sequence?: Maybe<IntComparisonExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
  value?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "rounds" */
export enum RoundsConstraint {
  /** unique or primary key constraint */
  RoundsPkey = 'rounds_pkey'
}

/** input type for incrementing integer column in table "rounds" */
export type RoundsIncInput = {
  order_sequence?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "rounds" */
export type RoundsInsertInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  game?: Maybe<GamesObjRelInsertInput>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  order_sequence?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type RoundsMaxFields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  order_sequence?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "rounds" */
export type RoundsMaxOrderBy = {
  created_at?: Maybe<OrderBy>;
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  order_sequence?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  value?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type RoundsMinFields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  order_sequence?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "rounds" */
export type RoundsMinOrderBy = {
  created_at?: Maybe<OrderBy>;
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  order_sequence?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  value?: Maybe<OrderBy>;
};

/** response of any mutation on the table "rounds" */
export type RoundsMutationResponse = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Rounds>;
};

/** input type for inserting object relation for remote table "rounds" */
export type RoundsObjRelInsertInput = {
  data: RoundsInsertInput;
  on_conflict?: Maybe<RoundsOnConflict>;
};

/** on conflict condition type for table "rounds" */
export type RoundsOnConflict = {
  constraint: RoundsConstraint;
  update_columns: Array<RoundsUpdateColumn>;
  where?: Maybe<RoundsBoolExp>;
};

/** ordering options when selecting data from "rounds" */
export type RoundsOrderBy = {
  created_at?: Maybe<OrderBy>;
  game?: Maybe<GamesOrderBy>;
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  order_sequence?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  value?: Maybe<OrderBy>;
};

/** primary key columns input for table: "rounds" */
export type RoundsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "rounds" */
export enum RoundsSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  OrderSequence = 'order_sequence',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "rounds" */
export type RoundsSetInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  order_sequence?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type RoundsStddevFields = {
  order_sequence?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "rounds" */
export type RoundsStddevOrderBy = {
  order_sequence?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type RoundsStddevPopFields = {
  order_sequence?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "rounds" */
export type RoundsStddevPopOrderBy = {
  order_sequence?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type RoundsStddevSampFields = {
  order_sequence?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "rounds" */
export type RoundsStddevSampOrderBy = {
  order_sequence?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type RoundsSumFields = {
  order_sequence?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "rounds" */
export type RoundsSumOrderBy = {
  order_sequence?: Maybe<OrderBy>;
};

/** update columns of table "rounds" */
export enum RoundsUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  OrderSequence = 'order_sequence',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** aggregate var_pop on columns */
export type RoundsVarPopFields = {
  order_sequence?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "rounds" */
export type RoundsVarPopOrderBy = {
  order_sequence?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type RoundsVarSampFields = {
  order_sequence?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "rounds" */
export type RoundsVarSampOrderBy = {
  order_sequence?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type RoundsVarianceFields = {
  order_sequence?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "rounds" */
export type RoundsVarianceOrderBy = {
  order_sequence?: Maybe<OrderBy>;
};

/** columns and relationships of "server_time" */
export type ServerTime = {
  now?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "server_time" */
export type ServerTimeAggregate = {
  aggregate?: Maybe<ServerTimeAggregateFields>;
  nodes: Array<ServerTime>;
};

/** aggregate fields of "server_time" */
export type ServerTimeAggregateFields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ServerTimeMaxFields>;
  min?: Maybe<ServerTimeMinFields>;
};


/** aggregate fields of "server_time" */
export type ServerTimeAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ServerTimeSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "server_time" */
export type ServerTimeAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<ServerTimeMaxOrderBy>;
  min?: Maybe<ServerTimeMinOrderBy>;
};

/** Boolean expression to filter rows from the table "server_time". All fields are combined with a logical 'AND'. */
export type ServerTimeBoolExp = {
  _and?: Maybe<Array<Maybe<ServerTimeBoolExp>>>;
  _not?: Maybe<ServerTimeBoolExp>;
  _or?: Maybe<Array<Maybe<ServerTimeBoolExp>>>;
  now?: Maybe<TimestamptzComparisonExp>;
};

/** aggregate max on columns */
export type ServerTimeMaxFields = {
  now?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "server_time" */
export type ServerTimeMaxOrderBy = {
  now?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ServerTimeMinFields = {
  now?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "server_time" */
export type ServerTimeMinOrderBy = {
  now?: Maybe<OrderBy>;
};

/** ordering options when selecting data from "server_time" */
export type ServerTimeOrderBy = {
  now?: Maybe<OrderBy>;
};

/** select columns of table "server_time" */
export enum ServerTimeSelectColumn {
  /** column name */
  Now = 'now'
}

/** subscription root */
export type SubscriptionRoot = {
  /** fetch data from the table: "cards" */
  cards: Array<Cards>;
  /** fetch aggregated fields from the table: "cards" */
  cards_aggregate: CardsAggregate;
  /** fetch data from the table: "cards" using primary key columns */
  cards_by_pk?: Maybe<Cards>;
  /** fetch data from the table: "game_card_play_style" */
  game_card_play_style: Array<GameCardPlayStyle>;
  /** fetch aggregated fields from the table: "game_card_play_style" */
  game_card_play_style_aggregate: GameCardPlayStyleAggregate;
  /** fetch data from the table: "game_card_play_style" using primary key columns */
  game_card_play_style_by_pk?: Maybe<GameCardPlayStyle>;
  /** fetch data from the table: "game_state" */
  game_state: Array<GameState>;
  /** fetch aggregated fields from the table: "game_state" */
  game_state_aggregate: GameStateAggregate;
  /** fetch data from the table: "game_state" using primary key columns */
  game_state_by_pk?: Maybe<GameState>;
  /** fetch data from the table: "games" */
  games: Array<Games>;
  /** fetch aggregated fields from the table: "games" */
  games_aggregate: GamesAggregate;
  /** fetch data from the table: "games" using primary key columns */
  games_by_pk?: Maybe<Games>;
  /** fetch data from the table: "players" */
  players: Array<Players>;
  /** fetch aggregated fields from the table: "players" */
  players_aggregate: PlayersAggregate;
  /** fetch data from the table: "players" using primary key columns */
  players_by_pk?: Maybe<Players>;
  /** fetch data from the table: "rounds" */
  rounds: Array<Rounds>;
  /** fetch aggregated fields from the table: "rounds" */
  rounds_aggregate: RoundsAggregate;
  /** fetch data from the table: "rounds" using primary key columns */
  rounds_by_pk?: Maybe<Rounds>;
  /** fetch data from the table: "server_time" */
  server_time: Array<ServerTime>;
  /** fetch aggregated fields from the table: "server_time" */
  server_time_aggregate: ServerTimeAggregate;
  /** fetch data from the table: "turn_scorings" */
  turn_scorings: Array<TurnScorings>;
  /** fetch aggregated fields from the table: "turn_scorings" */
  turn_scorings_aggregate: TurnScoringsAggregate;
  /** fetch data from the table: "turn_scorings" using primary key columns */
  turn_scorings_by_pk?: Maybe<TurnScorings>;
  /** fetch data from the table: "turns" */
  turns: Array<Turns>;
  /** fetch aggregated fields from the table: "turns" */
  turns_aggregate: TurnsAggregate;
  /** fetch data from the table: "turns" using primary key columns */
  turns_by_pk?: Maybe<Turns>;
};


/** subscription root */
export type SubscriptionRootCardsArgs = {
  distinct_on?: Maybe<Array<CardsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CardsOrderBy>>;
  where?: Maybe<CardsBoolExp>;
};


/** subscription root */
export type SubscriptionRootCardsAggregateArgs = {
  distinct_on?: Maybe<Array<CardsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CardsOrderBy>>;
  where?: Maybe<CardsBoolExp>;
};


/** subscription root */
export type SubscriptionRootCardsByPkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type SubscriptionRootGameCardPlayStyleArgs = {
  distinct_on?: Maybe<Array<GameCardPlayStyleSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GameCardPlayStyleOrderBy>>;
  where?: Maybe<GameCardPlayStyleBoolExp>;
};


/** subscription root */
export type SubscriptionRootGameCardPlayStyleAggregateArgs = {
  distinct_on?: Maybe<Array<GameCardPlayStyleSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GameCardPlayStyleOrderBy>>;
  where?: Maybe<GameCardPlayStyleBoolExp>;
};


/** subscription root */
export type SubscriptionRootGameCardPlayStyleByPkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootGameStateArgs = {
  distinct_on?: Maybe<Array<GameStateSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GameStateOrderBy>>;
  where?: Maybe<GameStateBoolExp>;
};


/** subscription root */
export type SubscriptionRootGameStateAggregateArgs = {
  distinct_on?: Maybe<Array<GameStateSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GameStateOrderBy>>;
  where?: Maybe<GameStateBoolExp>;
};


/** subscription root */
export type SubscriptionRootGameStateByPkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootGamesArgs = {
  distinct_on?: Maybe<Array<GamesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GamesOrderBy>>;
  where?: Maybe<GamesBoolExp>;
};


/** subscription root */
export type SubscriptionRootGamesAggregateArgs = {
  distinct_on?: Maybe<Array<GamesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GamesOrderBy>>;
  where?: Maybe<GamesBoolExp>;
};


/** subscription root */
export type SubscriptionRootGamesByPkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type SubscriptionRootPlayersArgs = {
  distinct_on?: Maybe<Array<PlayersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PlayersOrderBy>>;
  where?: Maybe<PlayersBoolExp>;
};


/** subscription root */
export type SubscriptionRootPlayersAggregateArgs = {
  distinct_on?: Maybe<Array<PlayersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PlayersOrderBy>>;
  where?: Maybe<PlayersBoolExp>;
};


/** subscription root */
export type SubscriptionRootPlayersByPkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type SubscriptionRootRoundsArgs = {
  distinct_on?: Maybe<Array<RoundsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<RoundsOrderBy>>;
  where?: Maybe<RoundsBoolExp>;
};


/** subscription root */
export type SubscriptionRootRoundsAggregateArgs = {
  distinct_on?: Maybe<Array<RoundsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<RoundsOrderBy>>;
  where?: Maybe<RoundsBoolExp>;
};


/** subscription root */
export type SubscriptionRootRoundsByPkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type SubscriptionRootServerTimeArgs = {
  distinct_on?: Maybe<Array<ServerTimeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ServerTimeOrderBy>>;
  where?: Maybe<ServerTimeBoolExp>;
};


/** subscription root */
export type SubscriptionRootServerTimeAggregateArgs = {
  distinct_on?: Maybe<Array<ServerTimeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ServerTimeOrderBy>>;
  where?: Maybe<ServerTimeBoolExp>;
};


/** subscription root */
export type SubscriptionRootTurnScoringsArgs = {
  distinct_on?: Maybe<Array<TurnScoringsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TurnScoringsOrderBy>>;
  where?: Maybe<TurnScoringsBoolExp>;
};


/** subscription root */
export type SubscriptionRootTurnScoringsAggregateArgs = {
  distinct_on?: Maybe<Array<TurnScoringsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TurnScoringsOrderBy>>;
  where?: Maybe<TurnScoringsBoolExp>;
};


/** subscription root */
export type SubscriptionRootTurnScoringsByPkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type SubscriptionRootTurnsArgs = {
  distinct_on?: Maybe<Array<TurnsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TurnsOrderBy>>;
  where?: Maybe<TurnsBoolExp>;
};


/** subscription root */
export type SubscriptionRootTurnsAggregateArgs = {
  distinct_on?: Maybe<Array<TurnsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TurnsOrderBy>>;
  where?: Maybe<TurnsBoolExp>;
};


/** subscription root */
export type SubscriptionRootTurnsByPkArgs = {
  id: Scalars['uuid'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "turn_scorings" */
export type TurnScorings = {
  card_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  ended_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  score: Scalars['Int'];
  started_at: Scalars['timestamptz'];
  status: Scalars['String'];
  /** An object relationship */
  turn: Turns;
  turn_id: Scalars['uuid'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "turn_scorings" */
export type TurnScoringsAggregate = {
  aggregate?: Maybe<TurnScoringsAggregateFields>;
  nodes: Array<TurnScorings>;
};

/** aggregate fields of "turn_scorings" */
export type TurnScoringsAggregateFields = {
  avg?: Maybe<TurnScoringsAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<TurnScoringsMaxFields>;
  min?: Maybe<TurnScoringsMinFields>;
  stddev?: Maybe<TurnScoringsStddevFields>;
  stddev_pop?: Maybe<TurnScoringsStddevPopFields>;
  stddev_samp?: Maybe<TurnScoringsStddevSampFields>;
  sum?: Maybe<TurnScoringsSumFields>;
  var_pop?: Maybe<TurnScoringsVarPopFields>;
  var_samp?: Maybe<TurnScoringsVarSampFields>;
  variance?: Maybe<TurnScoringsVarianceFields>;
};


/** aggregate fields of "turn_scorings" */
export type TurnScoringsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<TurnScoringsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "turn_scorings" */
export type TurnScoringsAggregateOrderBy = {
  avg?: Maybe<TurnScoringsAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<TurnScoringsMaxOrderBy>;
  min?: Maybe<TurnScoringsMinOrderBy>;
  stddev?: Maybe<TurnScoringsStddevOrderBy>;
  stddev_pop?: Maybe<TurnScoringsStddevPopOrderBy>;
  stddev_samp?: Maybe<TurnScoringsStddevSampOrderBy>;
  sum?: Maybe<TurnScoringsSumOrderBy>;
  var_pop?: Maybe<TurnScoringsVarPopOrderBy>;
  var_samp?: Maybe<TurnScoringsVarSampOrderBy>;
  variance?: Maybe<TurnScoringsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "turn_scorings" */
export type TurnScoringsArrRelInsertInput = {
  data: Array<TurnScoringsInsertInput>;
  on_conflict?: Maybe<TurnScoringsOnConflict>;
};

/** aggregate avg on columns */
export type TurnScoringsAvgFields = {
  score?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "turn_scorings" */
export type TurnScoringsAvgOrderBy = {
  score?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "turn_scorings". All fields are combined with a logical 'AND'. */
export type TurnScoringsBoolExp = {
  _and?: Maybe<Array<Maybe<TurnScoringsBoolExp>>>;
  _not?: Maybe<TurnScoringsBoolExp>;
  _or?: Maybe<Array<Maybe<TurnScoringsBoolExp>>>;
  card_id?: Maybe<UuidComparisonExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  ended_at?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  score?: Maybe<IntComparisonExp>;
  started_at?: Maybe<TimestamptzComparisonExp>;
  status?: Maybe<StringComparisonExp>;
  turn?: Maybe<TurnsBoolExp>;
  turn_id?: Maybe<UuidComparisonExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "turn_scorings" */
export enum TurnScoringsConstraint {
  /** unique or primary key constraint */
  TurnScoringsPkey = 'turn_scorings_pkey'
}

/** input type for incrementing integer column in table "turn_scorings" */
export type TurnScoringsIncInput = {
  score?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "turn_scorings" */
export type TurnScoringsInsertInput = {
  card_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  ended_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  score?: Maybe<Scalars['Int']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  turn?: Maybe<TurnsObjRelInsertInput>;
  turn_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type TurnScoringsMaxFields = {
  card_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  ended_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  score?: Maybe<Scalars['Int']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  turn_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "turn_scorings" */
export type TurnScoringsMaxOrderBy = {
  card_id?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  ended_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  score?: Maybe<OrderBy>;
  started_at?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  turn_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type TurnScoringsMinFields = {
  card_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  ended_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  score?: Maybe<Scalars['Int']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  turn_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "turn_scorings" */
export type TurnScoringsMinOrderBy = {
  card_id?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  ended_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  score?: Maybe<OrderBy>;
  started_at?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  turn_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** response of any mutation on the table "turn_scorings" */
export type TurnScoringsMutationResponse = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<TurnScorings>;
};

/** input type for inserting object relation for remote table "turn_scorings" */
export type TurnScoringsObjRelInsertInput = {
  data: TurnScoringsInsertInput;
  on_conflict?: Maybe<TurnScoringsOnConflict>;
};

/** on conflict condition type for table "turn_scorings" */
export type TurnScoringsOnConflict = {
  constraint: TurnScoringsConstraint;
  update_columns: Array<TurnScoringsUpdateColumn>;
  where?: Maybe<TurnScoringsBoolExp>;
};

/** ordering options when selecting data from "turn_scorings" */
export type TurnScoringsOrderBy = {
  card_id?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  ended_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  score?: Maybe<OrderBy>;
  started_at?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  turn?: Maybe<TurnsOrderBy>;
  turn_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** primary key columns input for table: "turn_scorings" */
export type TurnScoringsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "turn_scorings" */
export enum TurnScoringsSelectColumn {
  /** column name */
  CardId = 'card_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndedAt = 'ended_at',
  /** column name */
  Id = 'id',
  /** column name */
  Score = 'score',
  /** column name */
  StartedAt = 'started_at',
  /** column name */
  Status = 'status',
  /** column name */
  TurnId = 'turn_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "turn_scorings" */
export type TurnScoringsSetInput = {
  card_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  ended_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  score?: Maybe<Scalars['Int']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  turn_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type TurnScoringsStddevFields = {
  score?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "turn_scorings" */
export type TurnScoringsStddevOrderBy = {
  score?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type TurnScoringsStddevPopFields = {
  score?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "turn_scorings" */
export type TurnScoringsStddevPopOrderBy = {
  score?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type TurnScoringsStddevSampFields = {
  score?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "turn_scorings" */
export type TurnScoringsStddevSampOrderBy = {
  score?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type TurnScoringsSumFields = {
  score?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "turn_scorings" */
export type TurnScoringsSumOrderBy = {
  score?: Maybe<OrderBy>;
};

/** update columns of table "turn_scorings" */
export enum TurnScoringsUpdateColumn {
  /** column name */
  CardId = 'card_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndedAt = 'ended_at',
  /** column name */
  Id = 'id',
  /** column name */
  Score = 'score',
  /** column name */
  StartedAt = 'started_at',
  /** column name */
  Status = 'status',
  /** column name */
  TurnId = 'turn_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type TurnScoringsVarPopFields = {
  score?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "turn_scorings" */
export type TurnScoringsVarPopOrderBy = {
  score?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type TurnScoringsVarSampFields = {
  score?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "turn_scorings" */
export type TurnScoringsVarSampOrderBy = {
  score?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type TurnScoringsVarianceFields = {
  score?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "turn_scorings" */
export type TurnScoringsVarianceOrderBy = {
  score?: Maybe<OrderBy>;
};

/** columns and relationships of "turns" */
export type Turns = {
  completed_card_ids: Scalars['jsonb'];
  created_at: Scalars['timestamptz'];
  ended_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  game: Games;
  game_id: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  player: Players;
  player_id: Scalars['uuid'];
  review_started_at?: Maybe<Scalars['timestamptz']>;
  round_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  scorings: Array<TurnScorings>;
  /** An aggregated array relationship */
  scorings_aggregate: TurnScoringsAggregate;
  seconds_per_turn_override?: Maybe<Scalars['Int']>;
  sequential_id: Scalars['Int'];
  started_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "turns" */
export type TurnsCompletedCardIdsArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "turns" */
export type TurnsScoringsArgs = {
  distinct_on?: Maybe<Array<TurnScoringsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TurnScoringsOrderBy>>;
  where?: Maybe<TurnScoringsBoolExp>;
};


/** columns and relationships of "turns" */
export type TurnsScoringsAggregateArgs = {
  distinct_on?: Maybe<Array<TurnScoringsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TurnScoringsOrderBy>>;
  where?: Maybe<TurnScoringsBoolExp>;
};

/** aggregated selection of "turns" */
export type TurnsAggregate = {
  aggregate?: Maybe<TurnsAggregateFields>;
  nodes: Array<Turns>;
};

/** aggregate fields of "turns" */
export type TurnsAggregateFields = {
  avg?: Maybe<TurnsAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<TurnsMaxFields>;
  min?: Maybe<TurnsMinFields>;
  stddev?: Maybe<TurnsStddevFields>;
  stddev_pop?: Maybe<TurnsStddevPopFields>;
  stddev_samp?: Maybe<TurnsStddevSampFields>;
  sum?: Maybe<TurnsSumFields>;
  var_pop?: Maybe<TurnsVarPopFields>;
  var_samp?: Maybe<TurnsVarSampFields>;
  variance?: Maybe<TurnsVarianceFields>;
};


/** aggregate fields of "turns" */
export type TurnsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<TurnsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "turns" */
export type TurnsAggregateOrderBy = {
  avg?: Maybe<TurnsAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<TurnsMaxOrderBy>;
  min?: Maybe<TurnsMinOrderBy>;
  stddev?: Maybe<TurnsStddevOrderBy>;
  stddev_pop?: Maybe<TurnsStddevPopOrderBy>;
  stddev_samp?: Maybe<TurnsStddevSampOrderBy>;
  sum?: Maybe<TurnsSumOrderBy>;
  var_pop?: Maybe<TurnsVarPopOrderBy>;
  var_samp?: Maybe<TurnsVarSampOrderBy>;
  variance?: Maybe<TurnsVarianceOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type TurnsAppendInput = {
  completed_card_ids?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "turns" */
export type TurnsArrRelInsertInput = {
  data: Array<TurnsInsertInput>;
  on_conflict?: Maybe<TurnsOnConflict>;
};

/** aggregate avg on columns */
export type TurnsAvgFields = {
  seconds_per_turn_override?: Maybe<Scalars['Float']>;
  sequential_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "turns" */
export type TurnsAvgOrderBy = {
  seconds_per_turn_override?: Maybe<OrderBy>;
  sequential_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "turns". All fields are combined with a logical 'AND'. */
export type TurnsBoolExp = {
  _and?: Maybe<Array<Maybe<TurnsBoolExp>>>;
  _not?: Maybe<TurnsBoolExp>;
  _or?: Maybe<Array<Maybe<TurnsBoolExp>>>;
  completed_card_ids?: Maybe<JsonbComparisonExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  ended_at?: Maybe<TimestamptzComparisonExp>;
  game?: Maybe<GamesBoolExp>;
  game_id?: Maybe<UuidComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  player?: Maybe<PlayersBoolExp>;
  player_id?: Maybe<UuidComparisonExp>;
  review_started_at?: Maybe<TimestamptzComparisonExp>;
  round_id?: Maybe<UuidComparisonExp>;
  scorings?: Maybe<TurnScoringsBoolExp>;
  seconds_per_turn_override?: Maybe<IntComparisonExp>;
  sequential_id?: Maybe<IntComparisonExp>;
  started_at?: Maybe<TimestamptzComparisonExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "turns" */
export enum TurnsConstraint {
  /** unique or primary key constraint */
  TurnsPkey = 'turns_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type TurnsDeleteAtPathInput = {
  completed_card_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type TurnsDeleteElemInput = {
  completed_card_ids?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type TurnsDeleteKeyInput = {
  completed_card_ids?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "turns" */
export type TurnsIncInput = {
  seconds_per_turn_override?: Maybe<Scalars['Int']>;
  sequential_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "turns" */
export type TurnsInsertInput = {
  completed_card_ids?: Maybe<Scalars['jsonb']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  ended_at?: Maybe<Scalars['timestamptz']>;
  game?: Maybe<GamesObjRelInsertInput>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  player?: Maybe<PlayersObjRelInsertInput>;
  player_id?: Maybe<Scalars['uuid']>;
  review_started_at?: Maybe<Scalars['timestamptz']>;
  round_id?: Maybe<Scalars['uuid']>;
  scorings?: Maybe<TurnScoringsArrRelInsertInput>;
  seconds_per_turn_override?: Maybe<Scalars['Int']>;
  sequential_id?: Maybe<Scalars['Int']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type TurnsMaxFields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  ended_at?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  player_id?: Maybe<Scalars['uuid']>;
  review_started_at?: Maybe<Scalars['timestamptz']>;
  round_id?: Maybe<Scalars['uuid']>;
  seconds_per_turn_override?: Maybe<Scalars['Int']>;
  sequential_id?: Maybe<Scalars['Int']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "turns" */
export type TurnsMaxOrderBy = {
  created_at?: Maybe<OrderBy>;
  ended_at?: Maybe<OrderBy>;
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player_id?: Maybe<OrderBy>;
  review_started_at?: Maybe<OrderBy>;
  round_id?: Maybe<OrderBy>;
  seconds_per_turn_override?: Maybe<OrderBy>;
  sequential_id?: Maybe<OrderBy>;
  started_at?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type TurnsMinFields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  ended_at?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  player_id?: Maybe<Scalars['uuid']>;
  review_started_at?: Maybe<Scalars['timestamptz']>;
  round_id?: Maybe<Scalars['uuid']>;
  seconds_per_turn_override?: Maybe<Scalars['Int']>;
  sequential_id?: Maybe<Scalars['Int']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "turns" */
export type TurnsMinOrderBy = {
  created_at?: Maybe<OrderBy>;
  ended_at?: Maybe<OrderBy>;
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player_id?: Maybe<OrderBy>;
  review_started_at?: Maybe<OrderBy>;
  round_id?: Maybe<OrderBy>;
  seconds_per_turn_override?: Maybe<OrderBy>;
  sequential_id?: Maybe<OrderBy>;
  started_at?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** response of any mutation on the table "turns" */
export type TurnsMutationResponse = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Turns>;
};

/** input type for inserting object relation for remote table "turns" */
export type TurnsObjRelInsertInput = {
  data: TurnsInsertInput;
  on_conflict?: Maybe<TurnsOnConflict>;
};

/** on conflict condition type for table "turns" */
export type TurnsOnConflict = {
  constraint: TurnsConstraint;
  update_columns: Array<TurnsUpdateColumn>;
  where?: Maybe<TurnsBoolExp>;
};

/** ordering options when selecting data from "turns" */
export type TurnsOrderBy = {
  completed_card_ids?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  ended_at?: Maybe<OrderBy>;
  game?: Maybe<GamesOrderBy>;
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player?: Maybe<PlayersOrderBy>;
  player_id?: Maybe<OrderBy>;
  review_started_at?: Maybe<OrderBy>;
  round_id?: Maybe<OrderBy>;
  scorings_aggregate?: Maybe<TurnScoringsAggregateOrderBy>;
  seconds_per_turn_override?: Maybe<OrderBy>;
  sequential_id?: Maybe<OrderBy>;
  started_at?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** primary key columns input for table: "turns" */
export type TurnsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type TurnsPrependInput = {
  completed_card_ids?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "turns" */
export enum TurnsSelectColumn {
  /** column name */
  CompletedCardIds = 'completed_card_ids',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndedAt = 'ended_at',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  ReviewStartedAt = 'review_started_at',
  /** column name */
  RoundId = 'round_id',
  /** column name */
  SecondsPerTurnOverride = 'seconds_per_turn_override',
  /** column name */
  SequentialId = 'sequential_id',
  /** column name */
  StartedAt = 'started_at',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "turns" */
export type TurnsSetInput = {
  completed_card_ids?: Maybe<Scalars['jsonb']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  ended_at?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  player_id?: Maybe<Scalars['uuid']>;
  review_started_at?: Maybe<Scalars['timestamptz']>;
  round_id?: Maybe<Scalars['uuid']>;
  seconds_per_turn_override?: Maybe<Scalars['Int']>;
  sequential_id?: Maybe<Scalars['Int']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type TurnsStddevFields = {
  seconds_per_turn_override?: Maybe<Scalars['Float']>;
  sequential_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "turns" */
export type TurnsStddevOrderBy = {
  seconds_per_turn_override?: Maybe<OrderBy>;
  sequential_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type TurnsStddevPopFields = {
  seconds_per_turn_override?: Maybe<Scalars['Float']>;
  sequential_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "turns" */
export type TurnsStddevPopOrderBy = {
  seconds_per_turn_override?: Maybe<OrderBy>;
  sequential_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type TurnsStddevSampFields = {
  seconds_per_turn_override?: Maybe<Scalars['Float']>;
  sequential_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "turns" */
export type TurnsStddevSampOrderBy = {
  seconds_per_turn_override?: Maybe<OrderBy>;
  sequential_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type TurnsSumFields = {
  seconds_per_turn_override?: Maybe<Scalars['Int']>;
  sequential_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "turns" */
export type TurnsSumOrderBy = {
  seconds_per_turn_override?: Maybe<OrderBy>;
  sequential_id?: Maybe<OrderBy>;
};

/** update columns of table "turns" */
export enum TurnsUpdateColumn {
  /** column name */
  CompletedCardIds = 'completed_card_ids',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndedAt = 'ended_at',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  ReviewStartedAt = 'review_started_at',
  /** column name */
  RoundId = 'round_id',
  /** column name */
  SecondsPerTurnOverride = 'seconds_per_turn_override',
  /** column name */
  SequentialId = 'sequential_id',
  /** column name */
  StartedAt = 'started_at',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type TurnsVarPopFields = {
  seconds_per_turn_override?: Maybe<Scalars['Float']>;
  sequential_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "turns" */
export type TurnsVarPopOrderBy = {
  seconds_per_turn_override?: Maybe<OrderBy>;
  sequential_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type TurnsVarSampFields = {
  seconds_per_turn_override?: Maybe<Scalars['Float']>;
  sequential_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "turns" */
export type TurnsVarSampOrderBy = {
  seconds_per_turn_override?: Maybe<OrderBy>;
  sequential_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type TurnsVarianceFields = {
  seconds_per_turn_override?: Maybe<Scalars['Float']>;
  sequential_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "turns" */
export type TurnsVarianceOrderBy = {
  seconds_per_turn_override?: Maybe<OrderBy>;
  sequential_id?: Maybe<OrderBy>;
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
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

export type InsertPlayerForGameMutationVariables = Exact<{
  gameId: Scalars['uuid'];
  clientUuid: Scalars['uuid'];
}>;


export type InsertPlayerForGameMutation = { insert_players_one?: Maybe<(
    Pick<Players, 'id'>
    & { game: Pick<Games, 'host_id'> }
  )> };

export type LookupPlayerForGameQueryVariables = Exact<{
  gameId: Scalars['uuid'];
  clientUuid: Scalars['uuid'];
}>;


export type LookupPlayerForGameQuery = { players: Array<(
    Pick<Players, 'id'>
    & { game: Pick<Games, 'host_id'> }
  )> };

export type StartGameMutationVariables = Exact<{ [key: string]: never; }>;


export type StartGameMutation = { insert_games_one?: Maybe<Pick<Games, 'id'>> };

export type GameByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GameByIdQuery = { games_by_pk?: Maybe<Pick<Games, 'id' | 'join_code'>> };

export type BecomeHostMutationVariables = Exact<{
  gameId: Scalars['uuid'];
  playerId: Scalars['uuid'];
}>;


export type BecomeHostMutation = { update_games_by_pk?: Maybe<Pick<Games, 'id'>> };


export const InsertPlayerForGameDocument = gql`
    mutation InsertPlayerForGame($gameId: uuid!, $clientUuid: uuid!) {
  insert_players_one(object: {game_id: $gameId, client_uuid: $clientUuid}) {
    id
    game {
      host_id
    }
  }
}
    `;
export const LookupPlayerForGameDocument = gql`
    query LookupPlayerForGame($gameId: uuid!, $clientUuid: uuid!) {
  players(where: {game_id: {_eq: $gameId}, client_uuid: {_eq: $clientUuid}}) {
    id
    game {
      host_id
    }
  }
}
    `;
export const StartGameDocument = gql`
    mutation StartGame {
  insert_games_one(object: {}) {
    id
  }
}
    `;
export const GameByIdDocument = gql`
    query GameById($id: uuid!) {
  games_by_pk(id: $id) {
    id
    join_code
  }
}
    `;
export const BecomeHostDocument = gql`
    mutation BecomeHost($gameId: uuid!, $playerId: uuid!) {
  update_games_by_pk(pk_columns: {id: $gameId}, _set: {host_id: $playerId}) {
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    InsertPlayerForGame(variables: InsertPlayerForGameMutationVariables): Promise<{ data?: InsertPlayerForGameMutation | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<InsertPlayerForGameMutation>(print(InsertPlayerForGameDocument), variables));
    },
    LookupPlayerForGame(variables: LookupPlayerForGameQueryVariables): Promise<{ data?: LookupPlayerForGameQuery | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<LookupPlayerForGameQuery>(print(LookupPlayerForGameDocument), variables));
    },
    StartGame(variables?: StartGameMutationVariables): Promise<{ data?: StartGameMutation | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<StartGameMutation>(print(StartGameDocument), variables));
    },
    GameById(variables: GameByIdQueryVariables): Promise<{ data?: GameByIdQuery | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<GameByIdQuery>(print(GameByIdDocument), variables));
    },
    BecomeHost(variables: BecomeHostMutationVariables): Promise<{ data?: BecomeHostMutation | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<BecomeHostMutation>(print(BecomeHostDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;