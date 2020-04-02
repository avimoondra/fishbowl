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
  jsonb: any;
};

export type Cards = {
  created_at: Scalars['timestamp'];
  game_id: Scalars['Int'];
  id: Scalars['Int'];
  player_id: Scalars['Int'];
  word: Scalars['String'];
};

export type CardsAggregate = {
  aggregate?: Maybe<CardsAggregateFields>;
  nodes: Array<Cards>;
};

export type CardsAggregateFields = {
  avg?: Maybe<CardsAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<CardsMaxFields>;
  min?: Maybe<CardsMinFields>;
  stddev?: Maybe<CardsStddevFields>;
  stddev_pop?: Maybe<CardsStddevPopFields>;
  stddev_samp?: Maybe<CardsStddevSampFields>;
  sum?: Maybe<CardsSumFields>;
  var_pop?: Maybe<CardsVarPopFields>;
  var_samp?: Maybe<CardsVarSampFields>;
  variance?: Maybe<CardsVarianceFields>;
};


export type CardsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<CardsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type CardsAggregateOrderBy = {
  avg?: Maybe<CardsAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<CardsMaxOrderBy>;
  min?: Maybe<CardsMinOrderBy>;
  stddev?: Maybe<CardsStddevOrderBy>;
  stddev_pop?: Maybe<CardsStddevPopOrderBy>;
  stddev_samp?: Maybe<CardsStddevSampOrderBy>;
  sum?: Maybe<CardsSumOrderBy>;
  var_pop?: Maybe<CardsVarPopOrderBy>;
  var_samp?: Maybe<CardsVarSampOrderBy>;
  variance?: Maybe<CardsVarianceOrderBy>;
};

export type CardsArrRelInsertInput = {
  data: Array<CardsInsertInput>;
  on_conflict?: Maybe<CardsOnConflict>;
};

export type CardsAvgFields = {
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
};

export type CardsAvgOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player_id?: Maybe<OrderBy>;
};

export type CardsBoolExp = {
  _and?: Maybe<Array<Maybe<CardsBoolExp>>>;
  _not?: Maybe<CardsBoolExp>;
  _or?: Maybe<Array<Maybe<CardsBoolExp>>>;
  created_at?: Maybe<TimestampComparisonExp>;
  game_id?: Maybe<IntComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  player_id?: Maybe<IntComparisonExp>;
  word?: Maybe<StringComparisonExp>;
};

export enum CardsConstraint {
  CardsPkey = 'cards_pkey'
}

export type CardsIncInput = {
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  player_id?: Maybe<Scalars['Int']>;
};

export type CardsInsertInput = {
  created_at?: Maybe<Scalars['timestamp']>;
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  player_id?: Maybe<Scalars['Int']>;
  word?: Maybe<Scalars['String']>;
};

export type CardsMaxFields = {
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  player_id?: Maybe<Scalars['Int']>;
  word?: Maybe<Scalars['String']>;
};

export type CardsMaxOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player_id?: Maybe<OrderBy>;
  word?: Maybe<OrderBy>;
};

export type CardsMinFields = {
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  player_id?: Maybe<Scalars['Int']>;
  word?: Maybe<Scalars['String']>;
};

export type CardsMinOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player_id?: Maybe<OrderBy>;
  word?: Maybe<OrderBy>;
};

export type CardsMutationResponse = {
  affected_rows: Scalars['Int'];
  returning: Array<Cards>;
};

export type CardsObjRelInsertInput = {
  data: CardsInsertInput;
  on_conflict?: Maybe<CardsOnConflict>;
};

export type CardsOnConflict = {
  constraint: CardsConstraint;
  update_columns: Array<CardsUpdateColumn>;
  where?: Maybe<CardsBoolExp>;
};

export type CardsOrderBy = {
  created_at?: Maybe<OrderBy>;
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player_id?: Maybe<OrderBy>;
  word?: Maybe<OrderBy>;
};

export type CardsPkColumnsInput = {
  id: Scalars['Int'];
};

export enum CardsSelectColumn {
  CreatedAt = 'created_at',
  GameId = 'game_id',
  Id = 'id',
  PlayerId = 'player_id',
  Word = 'word'
}

export type CardsSetInput = {
  created_at?: Maybe<Scalars['timestamp']>;
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  player_id?: Maybe<Scalars['Int']>;
  word?: Maybe<Scalars['String']>;
};

export type CardsStddevFields = {
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
};

export type CardsStddevOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player_id?: Maybe<OrderBy>;
};

export type CardsStddevPopFields = {
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
};

export type CardsStddevPopOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player_id?: Maybe<OrderBy>;
};

export type CardsStddevSampFields = {
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
};

export type CardsStddevSampOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player_id?: Maybe<OrderBy>;
};

export type CardsSumFields = {
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  player_id?: Maybe<Scalars['Int']>;
};

export type CardsSumOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player_id?: Maybe<OrderBy>;
};

export enum CardsUpdateColumn {
  CreatedAt = 'created_at',
  GameId = 'game_id',
  Id = 'id',
  PlayerId = 'player_id',
  Word = 'word'
}

export type CardsVarPopFields = {
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
};

export type CardsVarPopOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player_id?: Maybe<OrderBy>;
};

export type CardsVarSampFields = {
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
};

export type CardsVarSampOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player_id?: Maybe<OrderBy>;
};

export type CardsVarianceFields = {
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
};

export type CardsVarianceOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player_id?: Maybe<OrderBy>;
};

export type GameState = {
  value: Scalars['String'];
};

export type GameStateAggregate = {
  aggregate?: Maybe<GameStateAggregateFields>;
  nodes: Array<GameState>;
};

export type GameStateAggregateFields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<GameStateMaxFields>;
  min?: Maybe<GameStateMinFields>;
};


export type GameStateAggregateFieldsCountArgs = {
  columns?: Maybe<Array<GameStateSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type GameStateAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<GameStateMaxOrderBy>;
  min?: Maybe<GameStateMinOrderBy>;
};

export type GameStateArrRelInsertInput = {
  data: Array<GameStateInsertInput>;
  on_conflict?: Maybe<GameStateOnConflict>;
};

export type GameStateBoolExp = {
  _and?: Maybe<Array<Maybe<GameStateBoolExp>>>;
  _not?: Maybe<GameStateBoolExp>;
  _or?: Maybe<Array<Maybe<GameStateBoolExp>>>;
  value?: Maybe<StringComparisonExp>;
};

export enum GameStateConstraint {
  GameStatePkey = 'game_state_pkey'
}

export enum GameStateEnum {
  ActivePlay = 'active_play',
  CardSubmission = 'card_submission',
  Ended = 'ended',
  Lobby = 'lobby',
  TeamAssignment = 'team_assignment'
}

export type GameStateEnumComparisonExp = {
  _eq?: Maybe<GameStateEnum>;
  _in?: Maybe<Array<GameStateEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<GameStateEnum>;
  _nin?: Maybe<Array<GameStateEnum>>;
};

export type GameStateInsertInput = {
  value?: Maybe<Scalars['String']>;
};

export type GameStateMaxFields = {
  value?: Maybe<Scalars['String']>;
};

export type GameStateMaxOrderBy = {
  value?: Maybe<OrderBy>;
};

export type GameStateMinFields = {
  value?: Maybe<Scalars['String']>;
};

export type GameStateMinOrderBy = {
  value?: Maybe<OrderBy>;
};

export type GameStateMutationResponse = {
  affected_rows: Scalars['Int'];
  returning: Array<GameState>;
};

export type GameStateObjRelInsertInput = {
  data: GameStateInsertInput;
  on_conflict?: Maybe<GameStateOnConflict>;
};

export type GameStateOnConflict = {
  constraint: GameStateConstraint;
  update_columns: Array<GameStateUpdateColumn>;
  where?: Maybe<GameStateBoolExp>;
};

export type GameStateOrderBy = {
  value?: Maybe<OrderBy>;
};

export type GameStatePkColumnsInput = {
  value: Scalars['String'];
};

export enum GameStateSelectColumn {
  Value = 'value'
}

export type GameStateSetInput = {
  value?: Maybe<Scalars['String']>;
};

export enum GameStateUpdateColumn {
  Value = 'value'
}

export type Games = {
  cards: Array<Cards>;
  cards_aggregate: CardsAggregate;
  created_at: Scalars['timestamp'];
  host?: Maybe<Players>;
  host_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  join_code?: Maybe<Scalars['String']>;
  num_entries_per_player?: Maybe<Scalars['Int']>;
  players: Array<Players>;
  players_aggregate: PlayersAggregate;
  seconds_per_turn?: Maybe<Scalars['Int']>;
  starting_letter?: Maybe<Scalars['String']>;
  state: GameStateEnum;
  turns: Array<Turns>;
  turns_aggregate: TurnsAggregate;
};


export type GamesCardsArgs = {
  distinct_on?: Maybe<Array<CardsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CardsOrderBy>>;
  where?: Maybe<CardsBoolExp>;
};


export type GamesCardsAggregateArgs = {
  distinct_on?: Maybe<Array<CardsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CardsOrderBy>>;
  where?: Maybe<CardsBoolExp>;
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


export type GamesTurnsArgs = {
  distinct_on?: Maybe<Array<TurnsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TurnsOrderBy>>;
  where?: Maybe<TurnsBoolExp>;
};


export type GamesTurnsAggregateArgs = {
  distinct_on?: Maybe<Array<TurnsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TurnsOrderBy>>;
  where?: Maybe<TurnsBoolExp>;
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
  cards?: Maybe<CardsBoolExp>;
  created_at?: Maybe<TimestampComparisonExp>;
  host?: Maybe<PlayersBoolExp>;
  host_id?: Maybe<IntComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  join_code?: Maybe<StringComparisonExp>;
  num_entries_per_player?: Maybe<IntComparisonExp>;
  players?: Maybe<PlayersBoolExp>;
  seconds_per_turn?: Maybe<IntComparisonExp>;
  starting_letter?: Maybe<StringComparisonExp>;
  state?: Maybe<GameStateEnumComparisonExp>;
  turns?: Maybe<TurnsBoolExp>;
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
  cards?: Maybe<CardsArrRelInsertInput>;
  created_at?: Maybe<Scalars['timestamp']>;
  host?: Maybe<PlayersObjRelInsertInput>;
  host_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  join_code?: Maybe<Scalars['String']>;
  num_entries_per_player?: Maybe<Scalars['Int']>;
  players?: Maybe<PlayersArrRelInsertInput>;
  seconds_per_turn?: Maybe<Scalars['Int']>;
  starting_letter?: Maybe<Scalars['String']>;
  state?: Maybe<GameStateEnum>;
  turns?: Maybe<TurnsArrRelInsertInput>;
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
  cards_aggregate?: Maybe<CardsAggregateOrderBy>;
  created_at?: Maybe<OrderBy>;
  host?: Maybe<PlayersOrderBy>;
  host_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  join_code?: Maybe<OrderBy>;
  num_entries_per_player?: Maybe<OrderBy>;
  players_aggregate?: Maybe<PlayersAggregateOrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
  starting_letter?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
  turns_aggregate?: Maybe<TurnsAggregateOrderBy>;
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
  StartingLetter = 'starting_letter',
  State = 'state'
}

export type GamesSetInput = {
  created_at?: Maybe<Scalars['timestamp']>;
  host_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  join_code?: Maybe<Scalars['String']>;
  num_entries_per_player?: Maybe<Scalars['Int']>;
  seconds_per_turn?: Maybe<Scalars['Int']>;
  starting_letter?: Maybe<Scalars['String']>;
  state?: Maybe<GameStateEnum>;
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
  StartingLetter = 'starting_letter',
  State = 'state'
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


export type JsonbComparisonExp = {
  _contained_in?: Maybe<Scalars['jsonb']>;
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  _has_key?: Maybe<Scalars['String']>;
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

export type MutationRoot = {
  delete_cards?: Maybe<CardsMutationResponse>;
  delete_cards_by_pk?: Maybe<Cards>;
  delete_game_state?: Maybe<GameStateMutationResponse>;
  delete_game_state_by_pk?: Maybe<GameState>;
  delete_games?: Maybe<GamesMutationResponse>;
  delete_games_by_pk?: Maybe<Games>;
  delete_players?: Maybe<PlayersMutationResponse>;
  delete_players_by_pk?: Maybe<Players>;
  delete_turns?: Maybe<TurnsMutationResponse>;
  delete_turns_by_pk?: Maybe<Turns>;
  insert_cards?: Maybe<CardsMutationResponse>;
  insert_cards_one?: Maybe<Cards>;
  insert_game_state?: Maybe<GameStateMutationResponse>;
  insert_game_state_one?: Maybe<GameState>;
  insert_games?: Maybe<GamesMutationResponse>;
  insert_games_one?: Maybe<Games>;
  insert_players?: Maybe<PlayersMutationResponse>;
  insert_players_one?: Maybe<Players>;
  insert_turns?: Maybe<TurnsMutationResponse>;
  insert_turns_one?: Maybe<Turns>;
  update_cards?: Maybe<CardsMutationResponse>;
  update_cards_by_pk?: Maybe<Cards>;
  update_game_state?: Maybe<GameStateMutationResponse>;
  update_game_state_by_pk?: Maybe<GameState>;
  update_games?: Maybe<GamesMutationResponse>;
  update_games_by_pk?: Maybe<Games>;
  update_players?: Maybe<PlayersMutationResponse>;
  update_players_by_pk?: Maybe<Players>;
  update_turns?: Maybe<TurnsMutationResponse>;
  update_turns_by_pk?: Maybe<Turns>;
};


export type MutationRootDeleteCardsArgs = {
  where: CardsBoolExp;
};


export type MutationRootDeleteCardsByPkArgs = {
  id: Scalars['Int'];
};


export type MutationRootDeleteGameStateArgs = {
  where: GameStateBoolExp;
};


export type MutationRootDeleteGameStateByPkArgs = {
  value: Scalars['String'];
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


export type MutationRootDeleteTurnsArgs = {
  where: TurnsBoolExp;
};


export type MutationRootDeleteTurnsByPkArgs = {
  id: Scalars['Int'];
};


export type MutationRootInsertCardsArgs = {
  objects: Array<CardsInsertInput>;
  on_conflict?: Maybe<CardsOnConflict>;
};


export type MutationRootInsertCardsOneArgs = {
  object: CardsInsertInput;
  on_conflict?: Maybe<CardsOnConflict>;
};


export type MutationRootInsertGameStateArgs = {
  objects: Array<GameStateInsertInput>;
  on_conflict?: Maybe<GameStateOnConflict>;
};


export type MutationRootInsertGameStateOneArgs = {
  object: GameStateInsertInput;
  on_conflict?: Maybe<GameStateOnConflict>;
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


export type MutationRootInsertTurnsArgs = {
  objects: Array<TurnsInsertInput>;
  on_conflict?: Maybe<TurnsOnConflict>;
};


export type MutationRootInsertTurnsOneArgs = {
  object: TurnsInsertInput;
  on_conflict?: Maybe<TurnsOnConflict>;
};


export type MutationRootUpdateCardsArgs = {
  _inc?: Maybe<CardsIncInput>;
  _set?: Maybe<CardsSetInput>;
  where: CardsBoolExp;
};


export type MutationRootUpdateCardsByPkArgs = {
  _inc?: Maybe<CardsIncInput>;
  _set?: Maybe<CardsSetInput>;
  pk_columns: CardsPkColumnsInput;
};


export type MutationRootUpdateGameStateArgs = {
  _set?: Maybe<GameStateSetInput>;
  where: GameStateBoolExp;
};


export type MutationRootUpdateGameStateByPkArgs = {
  _set?: Maybe<GameStateSetInput>;
  pk_columns: GameStatePkColumnsInput;
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

export enum OrderBy {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

export type Players = {
  created_at: Scalars['timestamp'];
  game?: Maybe<Games>;
  game_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  team?: Maybe<Scalars['String']>;
  team_sequence?: Maybe<Scalars['Int']>;
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
  team_sequence?: Maybe<Scalars['Float']>;
};

export type PlayersAvgOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  team_sequence?: Maybe<OrderBy>;
};

export type PlayersBoolExp = {
  _and?: Maybe<Array<Maybe<PlayersBoolExp>>>;
  _not?: Maybe<PlayersBoolExp>;
  _or?: Maybe<Array<Maybe<PlayersBoolExp>>>;
  created_at?: Maybe<TimestampComparisonExp>;
  game?: Maybe<GamesBoolExp>;
  game_id?: Maybe<IntComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  team?: Maybe<StringComparisonExp>;
  team_sequence?: Maybe<IntComparisonExp>;
  username?: Maybe<StringComparisonExp>;
  uuid?: Maybe<UuidComparisonExp>;
};

export enum PlayersConstraint {
  PlayersPkey = 'players_pkey',
  PlayersUuidGameIdKey = 'players_uuid_game_id_key'
}

export type PlayersIncInput = {
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  team_sequence?: Maybe<Scalars['Int']>;
};

export type PlayersInsertInput = {
  created_at?: Maybe<Scalars['timestamp']>;
  game?: Maybe<GamesObjRelInsertInput>;
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  team?: Maybe<Scalars['String']>;
  team_sequence?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

export type PlayersMaxFields = {
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  team?: Maybe<Scalars['String']>;
  team_sequence?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

export type PlayersMaxOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  team?: Maybe<OrderBy>;
  team_sequence?: Maybe<OrderBy>;
  username?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
};

export type PlayersMinFields = {
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  team?: Maybe<Scalars['String']>;
  team_sequence?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

export type PlayersMinOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  team?: Maybe<OrderBy>;
  team_sequence?: Maybe<OrderBy>;
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
  team?: Maybe<OrderBy>;
  team_sequence?: Maybe<OrderBy>;
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
  Team = 'team',
  TeamSequence = 'team_sequence',
  Username = 'username',
  Uuid = 'uuid'
}

export type PlayersSetInput = {
  created_at?: Maybe<Scalars['timestamp']>;
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  team?: Maybe<Scalars['String']>;
  team_sequence?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

export type PlayersStddevFields = {
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  team_sequence?: Maybe<Scalars['Float']>;
};

export type PlayersStddevOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  team_sequence?: Maybe<OrderBy>;
};

export type PlayersStddevPopFields = {
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  team_sequence?: Maybe<Scalars['Float']>;
};

export type PlayersStddevPopOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  team_sequence?: Maybe<OrderBy>;
};

export type PlayersStddevSampFields = {
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  team_sequence?: Maybe<Scalars['Float']>;
};

export type PlayersStddevSampOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  team_sequence?: Maybe<OrderBy>;
};

export type PlayersSumFields = {
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  team_sequence?: Maybe<Scalars['Int']>;
};

export type PlayersSumOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  team_sequence?: Maybe<OrderBy>;
};

export enum PlayersUpdateColumn {
  CreatedAt = 'created_at',
  GameId = 'game_id',
  Id = 'id',
  Team = 'team',
  TeamSequence = 'team_sequence',
  Username = 'username',
  Uuid = 'uuid'
}

export type PlayersVarPopFields = {
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  team_sequence?: Maybe<Scalars['Float']>;
};

export type PlayersVarPopOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  team_sequence?: Maybe<OrderBy>;
};

export type PlayersVarSampFields = {
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  team_sequence?: Maybe<Scalars['Float']>;
};

export type PlayersVarSampOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  team_sequence?: Maybe<OrderBy>;
};

export type PlayersVarianceFields = {
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  team_sequence?: Maybe<Scalars['Float']>;
};

export type PlayersVarianceOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  team_sequence?: Maybe<OrderBy>;
};

export type QueryRoot = {
  cards: Array<Cards>;
  cards_aggregate: CardsAggregate;
  cards_by_pk?: Maybe<Cards>;
  game_state: Array<GameState>;
  game_state_aggregate: GameStateAggregate;
  game_state_by_pk?: Maybe<GameState>;
  games: Array<Games>;
  games_aggregate: GamesAggregate;
  games_by_pk?: Maybe<Games>;
  players: Array<Players>;
  players_aggregate: PlayersAggregate;
  players_by_pk?: Maybe<Players>;
  turns: Array<Turns>;
  turns_aggregate: TurnsAggregate;
  turns_by_pk?: Maybe<Turns>;
};


export type QueryRootCardsArgs = {
  distinct_on?: Maybe<Array<CardsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CardsOrderBy>>;
  where?: Maybe<CardsBoolExp>;
};


export type QueryRootCardsAggregateArgs = {
  distinct_on?: Maybe<Array<CardsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CardsOrderBy>>;
  where?: Maybe<CardsBoolExp>;
};


export type QueryRootCardsByPkArgs = {
  id: Scalars['Int'];
};


export type QueryRootGameStateArgs = {
  distinct_on?: Maybe<Array<GameStateSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GameStateOrderBy>>;
  where?: Maybe<GameStateBoolExp>;
};


export type QueryRootGameStateAggregateArgs = {
  distinct_on?: Maybe<Array<GameStateSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GameStateOrderBy>>;
  where?: Maybe<GameStateBoolExp>;
};


export type QueryRootGameStateByPkArgs = {
  value: Scalars['String'];
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


export type QueryRootTurnsArgs = {
  distinct_on?: Maybe<Array<TurnsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TurnsOrderBy>>;
  where?: Maybe<TurnsBoolExp>;
};


export type QueryRootTurnsAggregateArgs = {
  distinct_on?: Maybe<Array<TurnsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TurnsOrderBy>>;
  where?: Maybe<TurnsBoolExp>;
};


export type QueryRootTurnsByPkArgs = {
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
  cards: Array<Cards>;
  cards_aggregate: CardsAggregate;
  cards_by_pk?: Maybe<Cards>;
  game_state: Array<GameState>;
  game_state_aggregate: GameStateAggregate;
  game_state_by_pk?: Maybe<GameState>;
  games: Array<Games>;
  games_aggregate: GamesAggregate;
  games_by_pk?: Maybe<Games>;
  players: Array<Players>;
  players_aggregate: PlayersAggregate;
  players_by_pk?: Maybe<Players>;
  turns: Array<Turns>;
  turns_aggregate: TurnsAggregate;
  turns_by_pk?: Maybe<Turns>;
};


export type SubscriptionRootCardsArgs = {
  distinct_on?: Maybe<Array<CardsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CardsOrderBy>>;
  where?: Maybe<CardsBoolExp>;
};


export type SubscriptionRootCardsAggregateArgs = {
  distinct_on?: Maybe<Array<CardsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CardsOrderBy>>;
  where?: Maybe<CardsBoolExp>;
};


export type SubscriptionRootCardsByPkArgs = {
  id: Scalars['Int'];
};


export type SubscriptionRootGameStateArgs = {
  distinct_on?: Maybe<Array<GameStateSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GameStateOrderBy>>;
  where?: Maybe<GameStateBoolExp>;
};


export type SubscriptionRootGameStateAggregateArgs = {
  distinct_on?: Maybe<Array<GameStateSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GameStateOrderBy>>;
  where?: Maybe<GameStateBoolExp>;
};


export type SubscriptionRootGameStateByPkArgs = {
  value: Scalars['String'];
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


export type SubscriptionRootTurnsArgs = {
  distinct_on?: Maybe<Array<TurnsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TurnsOrderBy>>;
  where?: Maybe<TurnsBoolExp>;
};


export type SubscriptionRootTurnsAggregateArgs = {
  distinct_on?: Maybe<Array<TurnsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TurnsOrderBy>>;
  where?: Maybe<TurnsBoolExp>;
};


export type SubscriptionRootTurnsByPkArgs = {
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

export type Turns = {
  completed_card_ids: Scalars['jsonb'];
  created_at: Scalars['timestamp'];
  ended_at?: Maybe<Scalars['timestamp']>;
  game: Games;
  game_id: Scalars['Int'];
  id: Scalars['Int'];
  player: Players;
  player_id: Scalars['Int'];
  seconds_per_turn_override?: Maybe<Scalars['Int']>;
  started_at?: Maybe<Scalars['timestamp']>;
};


export type TurnsCompletedCardIdsArgs = {
  path?: Maybe<Scalars['String']>;
};

export type TurnsAggregate = {
  aggregate?: Maybe<TurnsAggregateFields>;
  nodes: Array<Turns>;
};

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


export type TurnsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<TurnsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

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

export type TurnsAppendInput = {
  completed_card_ids?: Maybe<Scalars['jsonb']>;
};

export type TurnsArrRelInsertInput = {
  data: Array<TurnsInsertInput>;
  on_conflict?: Maybe<TurnsOnConflict>;
};

export type TurnsAvgFields = {
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
  seconds_per_turn_override?: Maybe<Scalars['Float']>;
};

export type TurnsAvgOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player_id?: Maybe<OrderBy>;
  seconds_per_turn_override?: Maybe<OrderBy>;
};

export type TurnsBoolExp = {
  _and?: Maybe<Array<Maybe<TurnsBoolExp>>>;
  _not?: Maybe<TurnsBoolExp>;
  _or?: Maybe<Array<Maybe<TurnsBoolExp>>>;
  completed_card_ids?: Maybe<JsonbComparisonExp>;
  created_at?: Maybe<TimestampComparisonExp>;
  ended_at?: Maybe<TimestampComparisonExp>;
  game?: Maybe<GamesBoolExp>;
  game_id?: Maybe<IntComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  player?: Maybe<PlayersBoolExp>;
  player_id?: Maybe<IntComparisonExp>;
  seconds_per_turn_override?: Maybe<IntComparisonExp>;
  started_at?: Maybe<TimestampComparisonExp>;
};

export enum TurnsConstraint {
  TurnsPkey = 'turns_pkey'
}

export type TurnsDeleteAtPathInput = {
  completed_card_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TurnsDeleteElemInput = {
  completed_card_ids?: Maybe<Scalars['Int']>;
};

export type TurnsDeleteKeyInput = {
  completed_card_ids?: Maybe<Scalars['String']>;
};

export type TurnsIncInput = {
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  player_id?: Maybe<Scalars['Int']>;
  seconds_per_turn_override?: Maybe<Scalars['Int']>;
};

export type TurnsInsertInput = {
  completed_card_ids?: Maybe<Scalars['jsonb']>;
  created_at?: Maybe<Scalars['timestamp']>;
  ended_at?: Maybe<Scalars['timestamp']>;
  game?: Maybe<GamesObjRelInsertInput>;
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  player?: Maybe<PlayersObjRelInsertInput>;
  player_id?: Maybe<Scalars['Int']>;
  seconds_per_turn_override?: Maybe<Scalars['Int']>;
  started_at?: Maybe<Scalars['timestamp']>;
};

export type TurnsMaxFields = {
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  player_id?: Maybe<Scalars['Int']>;
  seconds_per_turn_override?: Maybe<Scalars['Int']>;
};

export type TurnsMaxOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player_id?: Maybe<OrderBy>;
  seconds_per_turn_override?: Maybe<OrderBy>;
};

export type TurnsMinFields = {
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  player_id?: Maybe<Scalars['Int']>;
  seconds_per_turn_override?: Maybe<Scalars['Int']>;
};

export type TurnsMinOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player_id?: Maybe<OrderBy>;
  seconds_per_turn_override?: Maybe<OrderBy>;
};

export type TurnsMutationResponse = {
  affected_rows: Scalars['Int'];
  returning: Array<Turns>;
};

export type TurnsObjRelInsertInput = {
  data: TurnsInsertInput;
  on_conflict?: Maybe<TurnsOnConflict>;
};

export type TurnsOnConflict = {
  constraint: TurnsConstraint;
  update_columns: Array<TurnsUpdateColumn>;
  where?: Maybe<TurnsBoolExp>;
};

export type TurnsOrderBy = {
  completed_card_ids?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  ended_at?: Maybe<OrderBy>;
  game?: Maybe<GamesOrderBy>;
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player?: Maybe<PlayersOrderBy>;
  player_id?: Maybe<OrderBy>;
  seconds_per_turn_override?: Maybe<OrderBy>;
  started_at?: Maybe<OrderBy>;
};

export type TurnsPkColumnsInput = {
  id: Scalars['Int'];
};

export type TurnsPrependInput = {
  completed_card_ids?: Maybe<Scalars['jsonb']>;
};

export enum TurnsSelectColumn {
  CompletedCardIds = 'completed_card_ids',
  CreatedAt = 'created_at',
  EndedAt = 'ended_at',
  GameId = 'game_id',
  Id = 'id',
  PlayerId = 'player_id',
  SecondsPerTurnOverride = 'seconds_per_turn_override',
  StartedAt = 'started_at'
}

export type TurnsSetInput = {
  completed_card_ids?: Maybe<Scalars['jsonb']>;
  created_at?: Maybe<Scalars['timestamp']>;
  ended_at?: Maybe<Scalars['timestamp']>;
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  player_id?: Maybe<Scalars['Int']>;
  seconds_per_turn_override?: Maybe<Scalars['Int']>;
  started_at?: Maybe<Scalars['timestamp']>;
};

export type TurnsStddevFields = {
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
  seconds_per_turn_override?: Maybe<Scalars['Float']>;
};

export type TurnsStddevOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player_id?: Maybe<OrderBy>;
  seconds_per_turn_override?: Maybe<OrderBy>;
};

export type TurnsStddevPopFields = {
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
  seconds_per_turn_override?: Maybe<Scalars['Float']>;
};

export type TurnsStddevPopOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player_id?: Maybe<OrderBy>;
  seconds_per_turn_override?: Maybe<OrderBy>;
};

export type TurnsStddevSampFields = {
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
  seconds_per_turn_override?: Maybe<Scalars['Float']>;
};

export type TurnsStddevSampOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player_id?: Maybe<OrderBy>;
  seconds_per_turn_override?: Maybe<OrderBy>;
};

export type TurnsSumFields = {
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  player_id?: Maybe<Scalars['Int']>;
  seconds_per_turn_override?: Maybe<Scalars['Int']>;
};

export type TurnsSumOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player_id?: Maybe<OrderBy>;
  seconds_per_turn_override?: Maybe<OrderBy>;
};

export enum TurnsUpdateColumn {
  CompletedCardIds = 'completed_card_ids',
  CreatedAt = 'created_at',
  EndedAt = 'ended_at',
  GameId = 'game_id',
  Id = 'id',
  PlayerId = 'player_id',
  SecondsPerTurnOverride = 'seconds_per_turn_override',
  StartedAt = 'started_at'
}

export type TurnsVarPopFields = {
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
  seconds_per_turn_override?: Maybe<Scalars['Float']>;
};

export type TurnsVarPopOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player_id?: Maybe<OrderBy>;
  seconds_per_turn_override?: Maybe<OrderBy>;
};

export type TurnsVarSampFields = {
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
  seconds_per_turn_override?: Maybe<Scalars['Float']>;
};

export type TurnsVarSampOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player_id?: Maybe<OrderBy>;
  seconds_per_turn_override?: Maybe<OrderBy>;
};

export type TurnsVarianceFields = {
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
  seconds_per_turn_override?: Maybe<Scalars['Float']>;
};

export type TurnsVarianceOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player_id?: Maybe<OrderBy>;
  seconds_per_turn_override?: Maybe<OrderBy>;
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
    Pick<Players, 'id' | 'uuid' | 'username' | 'team' | 'team_sequence'>
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

export type CurrentGameSubscriptionVariables = {
  joinCode: Scalars['String'];
};


export type CurrentGameSubscription = { games: Array<(
    Pick<Games, 'id' | 'join_code' | 'starting_letter' | 'seconds_per_turn' | 'num_entries_per_player' | 'state'>
    & { host?: Maybe<Pick<Players, 'id' | 'username'>>, cards: Array<Pick<Cards, 'id' | 'word'>>, players: Array<Pick<Players, 'id' | 'username' | 'team' | 'team_sequence'>>, turns: Array<Pick<Turns, 'id' | 'player_id' | 'started_at' | 'completed_card_ids'>> }
  )> };

export type GameByJoinCodeQueryVariables = {
  joinCode: Scalars['String'];
};


export type GameByJoinCodeQuery = { games: Array<(
    Pick<Games, 'id' | 'join_code'>
    & { host?: Maybe<Pick<Players, 'id' | 'username'>> }
  )> };

export type GameByIdSubscriptionVariables = {
  id: Scalars['Int'];
};


export type GameByIdSubscription = { games_by_pk?: Maybe<Pick<Games, 'id' | 'join_code'>> };

export type UpdateGameStateMutationVariables = {
  id: Scalars['Int'];
  state: GameStateEnum;
};


export type UpdateGameStateMutation = { update_games_by_pk?: Maybe<Pick<Games, 'id' | 'state'>> };

export type YourCardsSubscriptionVariables = {
  playerId: Scalars['Int'];
  gameId: Scalars['Int'];
};


export type YourCardsSubscription = { cards_aggregate: { aggregate?: Maybe<Pick<CardsAggregateFields, 'count'>> } };

export type SubmitCardsMutationVariables = {
  cards: Array<CardsInsertInput>;
};


export type SubmitCardsMutation = { insert_cards?: Maybe<{ returning: Array<Pick<Cards, 'id'>> }> };

export type SubmittedCardsSubscriptionVariables = {
  gameId: Scalars['Int'];
};


export type SubmittedCardsSubscription = { cards_aggregate: { aggregate?: Maybe<Pick<CardsAggregateFields, 'count'>> } };

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


export type JoinGameMutation = { insert_players_one?: Maybe<Pick<Players, 'id' | 'uuid' | 'game_id'>> };

export type UpdateGameSettingsMutationVariables = {
  id: Scalars['Int'];
  input: GamesSetInput;
};


export type UpdateGameSettingsMutation = { update_games_by_pk?: Maybe<Pick<Games, 'id' | 'join_code' | 'starting_letter' | 'seconds_per_turn' | 'num_entries_per_player'>> };

export type UpdatePlayerMutationVariables = {
  id: Scalars['Int'];
  input: PlayersSetInput;
};


export type UpdatePlayerMutation = { update_players_by_pk?: Maybe<Pick<Players, 'id' | 'username' | 'team' | 'team_sequence'>> };

export type WaitingRoomSubscriptionVariables = {
  gameId: Scalars['Int'];
};


export type WaitingRoomSubscription = { games_by_pk?: Maybe<(
    Pick<Games, 'id' | 'starting_letter' | 'seconds_per_turn' | 'num_entries_per_player'>
    & { players: Array<Pick<Players, 'id' | 'username'>> }
  )> };

export type CreateTurnMutationVariables = {
  gameId: Scalars['Int'];
  playerId: Scalars['Int'];
};


export type CreateTurnMutation = { insert_turns_one?: Maybe<Pick<Turns, 'id' | 'game_id' | 'player_id'>> };

export type StartTurnMutationVariables = {
  currentTurnId: Scalars['Int'];
  startedAt: Scalars['timestamp'];
};


export type StartTurnMutation = { update_turns_by_pk?: Maybe<Pick<Turns, 'id' | 'started_at'>> };

export type EndCurrentTurnAndStartNextTurnMutationVariables = {
  currentTurnId: Scalars['Int'];
  completedCardIds: Scalars['jsonb'];
  endedAt: Scalars['timestamp'];
  gameId: Scalars['Int'];
  nextTurnplayerId: Scalars['Int'];
  nextTurnSecondsPerTurnOverride?: Maybe<Scalars['Int']>;
};


export type EndCurrentTurnAndStartNextTurnMutation = { update_turns_by_pk?: Maybe<Pick<Turns, 'id' | 'ended_at' | 'completed_card_ids'>>, insert_turns_one?: Maybe<Pick<Turns, 'id' | 'game_id' | 'player_id'>> };

export type UpdateAllPlayersMutationVariables = {
  gameId: Scalars['Int'];
  players: Array<PlayersInsertInput>;
};


export type UpdateAllPlayersMutation = { insert_games_one?: Maybe<(
    Pick<Games, 'id'>
    & { players: Array<Pick<Players, 'id' | 'game_id' | 'team' | 'team_sequence'>> }
  )> };


export const CurrentPlayerDocument = gql`
    query CurrentPlayer($playerUuid: uuid!, $joinCode: String!) {
  players(where: {uuid: {_eq: $playerUuid}, game: {join_code: {_eq: $joinCode}}}) {
    id
    uuid
    username
    team
    team_sequence
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
export const CurrentGameDocument = gql`
    subscription CurrentGame($joinCode: String!) {
  games(where: {join_code: {_eq: $joinCode}}) {
    id
    join_code
    starting_letter
    seconds_per_turn
    num_entries_per_player
    state
    host {
      id
      username
    }
    cards {
      id
      word
    }
    players {
      id
      username
      team
      team_sequence
    }
    turns {
      id
      player_id
      started_at
      completed_card_ids
    }
  }
}
    `;

/**
 * __useCurrentGameSubscription__
 *
 * To run a query within a React component, call `useCurrentGameSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCurrentGameSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentGameSubscription({
 *   variables: {
 *      joinCode: // value for 'joinCode'
 *   },
 * });
 */
export function useCurrentGameSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<CurrentGameSubscription, CurrentGameSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<CurrentGameSubscription, CurrentGameSubscriptionVariables>(CurrentGameDocument, baseOptions);
      }
export type CurrentGameSubscriptionHookResult = ReturnType<typeof useCurrentGameSubscription>;
export type CurrentGameSubscriptionResult = ApolloReactCommon.SubscriptionResult<CurrentGameSubscription>;
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
export const GameByIdDocument = gql`
    subscription GameById($id: Int!) {
  games_by_pk(id: $id) {
    id
    join_code
  }
}
    `;

/**
 * __useGameByIdSubscription__
 *
 * To run a query within a React component, call `useGameByIdSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGameByIdSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGameByIdSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGameByIdSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<GameByIdSubscription, GameByIdSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<GameByIdSubscription, GameByIdSubscriptionVariables>(GameByIdDocument, baseOptions);
      }
export type GameByIdSubscriptionHookResult = ReturnType<typeof useGameByIdSubscription>;
export type GameByIdSubscriptionResult = ApolloReactCommon.SubscriptionResult<GameByIdSubscription>;
export const UpdateGameStateDocument = gql`
    mutation UpdateGameState($id: Int!, $state: game_state_enum!) {
  update_games_by_pk(pk_columns: {id: $id}, _set: {state: $state}) {
    id
    state
  }
}
    `;
export type UpdateGameStateMutationFn = ApolloReactCommon.MutationFunction<UpdateGameStateMutation, UpdateGameStateMutationVariables>;

/**
 * __useUpdateGameStateMutation__
 *
 * To run a mutation, you first call `useUpdateGameStateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGameStateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGameStateMutation, { data, loading, error }] = useUpdateGameStateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      state: // value for 'state'
 *   },
 * });
 */
export function useUpdateGameStateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateGameStateMutation, UpdateGameStateMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateGameStateMutation, UpdateGameStateMutationVariables>(UpdateGameStateDocument, baseOptions);
      }
export type UpdateGameStateMutationHookResult = ReturnType<typeof useUpdateGameStateMutation>;
export type UpdateGameStateMutationResult = ApolloReactCommon.MutationResult<UpdateGameStateMutation>;
export type UpdateGameStateMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateGameStateMutation, UpdateGameStateMutationVariables>;
export const YourCardsDocument = gql`
    subscription YourCards($playerId: Int!, $gameId: Int!) {
  cards_aggregate(where: {game_id: {_eq: $gameId}, player_id: {_eq: $playerId}}) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useYourCardsSubscription__
 *
 * To run a query within a React component, call `useYourCardsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useYourCardsSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useYourCardsSubscription({
 *   variables: {
 *      playerId: // value for 'playerId'
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
export function useYourCardsSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<YourCardsSubscription, YourCardsSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<YourCardsSubscription, YourCardsSubscriptionVariables>(YourCardsDocument, baseOptions);
      }
export type YourCardsSubscriptionHookResult = ReturnType<typeof useYourCardsSubscription>;
export type YourCardsSubscriptionResult = ApolloReactCommon.SubscriptionResult<YourCardsSubscription>;
export const SubmitCardsDocument = gql`
    mutation SubmitCards($cards: [cards_insert_input!]!) {
  insert_cards(objects: $cards) {
    returning {
      id
    }
  }
}
    `;
export type SubmitCardsMutationFn = ApolloReactCommon.MutationFunction<SubmitCardsMutation, SubmitCardsMutationVariables>;

/**
 * __useSubmitCardsMutation__
 *
 * To run a mutation, you first call `useSubmitCardsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitCardsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitCardsMutation, { data, loading, error }] = useSubmitCardsMutation({
 *   variables: {
 *      cards: // value for 'cards'
 *   },
 * });
 */
export function useSubmitCardsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SubmitCardsMutation, SubmitCardsMutationVariables>) {
        return ApolloReactHooks.useMutation<SubmitCardsMutation, SubmitCardsMutationVariables>(SubmitCardsDocument, baseOptions);
      }
export type SubmitCardsMutationHookResult = ReturnType<typeof useSubmitCardsMutation>;
export type SubmitCardsMutationResult = ApolloReactCommon.MutationResult<SubmitCardsMutation>;
export type SubmitCardsMutationOptions = ApolloReactCommon.BaseMutationOptions<SubmitCardsMutation, SubmitCardsMutationVariables>;
export const SubmittedCardsDocument = gql`
    subscription SubmittedCards($gameId: Int!) {
  cards_aggregate(where: {game_id: {_eq: $gameId}}) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useSubmittedCardsSubscription__
 *
 * To run a query within a React component, call `useSubmittedCardsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubmittedCardsSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubmittedCardsSubscription({
 *   variables: {
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
export function useSubmittedCardsSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<SubmittedCardsSubscription, SubmittedCardsSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<SubmittedCardsSubscription, SubmittedCardsSubscriptionVariables>(SubmittedCardsDocument, baseOptions);
      }
export type SubmittedCardsSubscriptionHookResult = ReturnType<typeof useSubmittedCardsSubscription>;
export type SubmittedCardsSubscriptionResult = ApolloReactCommon.SubscriptionResult<SubmittedCardsSubscription>;
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
  insert_players_one(object: {game_id: $gameId, uuid: $playerUuid}, on_conflict: {constraint: players_uuid_game_id_key, update_columns: []}) {
    id
    uuid
    game_id
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
    team
    team_sequence
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
export const CreateTurnDocument = gql`
    mutation CreateTurn($gameId: Int!, $playerId: Int!) {
  insert_turns_one(object: {game_id: $gameId, player_id: $playerId}) {
    id
    game_id
    player_id
  }
}
    `;
export type CreateTurnMutationFn = ApolloReactCommon.MutationFunction<CreateTurnMutation, CreateTurnMutationVariables>;

/**
 * __useCreateTurnMutation__
 *
 * To run a mutation, you first call `useCreateTurnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTurnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTurnMutation, { data, loading, error }] = useCreateTurnMutation({
 *   variables: {
 *      gameId: // value for 'gameId'
 *      playerId: // value for 'playerId'
 *   },
 * });
 */
export function useCreateTurnMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTurnMutation, CreateTurnMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTurnMutation, CreateTurnMutationVariables>(CreateTurnDocument, baseOptions);
      }
export type CreateTurnMutationHookResult = ReturnType<typeof useCreateTurnMutation>;
export type CreateTurnMutationResult = ApolloReactCommon.MutationResult<CreateTurnMutation>;
export type CreateTurnMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTurnMutation, CreateTurnMutationVariables>;
export const StartTurnDocument = gql`
    mutation StartTurn($currentTurnId: Int!, $startedAt: timestamp!) {
  update_turns_by_pk(pk_columns: {id: $currentTurnId}, _set: {started_at: $startedAt}) {
    id
    started_at
  }
}
    `;
export type StartTurnMutationFn = ApolloReactCommon.MutationFunction<StartTurnMutation, StartTurnMutationVariables>;

/**
 * __useStartTurnMutation__
 *
 * To run a mutation, you first call `useStartTurnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartTurnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startTurnMutation, { data, loading, error }] = useStartTurnMutation({
 *   variables: {
 *      currentTurnId: // value for 'currentTurnId'
 *      startedAt: // value for 'startedAt'
 *   },
 * });
 */
export function useStartTurnMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<StartTurnMutation, StartTurnMutationVariables>) {
        return ApolloReactHooks.useMutation<StartTurnMutation, StartTurnMutationVariables>(StartTurnDocument, baseOptions);
      }
export type StartTurnMutationHookResult = ReturnType<typeof useStartTurnMutation>;
export type StartTurnMutationResult = ApolloReactCommon.MutationResult<StartTurnMutation>;
export type StartTurnMutationOptions = ApolloReactCommon.BaseMutationOptions<StartTurnMutation, StartTurnMutationVariables>;
export const EndCurrentTurnAndStartNextTurnDocument = gql`
    mutation EndCurrentTurnAndStartNextTurn($currentTurnId: Int!, $completedCardIds: jsonb!, $endedAt: timestamp!, $gameId: Int!, $nextTurnplayerId: Int!, $nextTurnSecondsPerTurnOverride: Int) {
  update_turns_by_pk(pk_columns: {id: $currentTurnId}, _set: {ended_at: $endedAt, completed_card_ids: $completedCardIds}) {
    id
    ended_at
    completed_card_ids
  }
  insert_turns_one(object: {game_id: $gameId, player_id: $nextTurnplayerId, seconds_per_turn_override: $nextTurnSecondsPerTurnOverride}) {
    id
    game_id
    player_id
  }
}
    `;
export type EndCurrentTurnAndStartNextTurnMutationFn = ApolloReactCommon.MutationFunction<EndCurrentTurnAndStartNextTurnMutation, EndCurrentTurnAndStartNextTurnMutationVariables>;

/**
 * __useEndCurrentTurnAndStartNextTurnMutation__
 *
 * To run a mutation, you first call `useEndCurrentTurnAndStartNextTurnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEndCurrentTurnAndStartNextTurnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [endCurrentTurnAndStartNextTurnMutation, { data, loading, error }] = useEndCurrentTurnAndStartNextTurnMutation({
 *   variables: {
 *      currentTurnId: // value for 'currentTurnId'
 *      completedCardIds: // value for 'completedCardIds'
 *      endedAt: // value for 'endedAt'
 *      gameId: // value for 'gameId'
 *      nextTurnplayerId: // value for 'nextTurnplayerId'
 *      nextTurnSecondsPerTurnOverride: // value for 'nextTurnSecondsPerTurnOverride'
 *   },
 * });
 */
export function useEndCurrentTurnAndStartNextTurnMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EndCurrentTurnAndStartNextTurnMutation, EndCurrentTurnAndStartNextTurnMutationVariables>) {
        return ApolloReactHooks.useMutation<EndCurrentTurnAndStartNextTurnMutation, EndCurrentTurnAndStartNextTurnMutationVariables>(EndCurrentTurnAndStartNextTurnDocument, baseOptions);
      }
export type EndCurrentTurnAndStartNextTurnMutationHookResult = ReturnType<typeof useEndCurrentTurnAndStartNextTurnMutation>;
export type EndCurrentTurnAndStartNextTurnMutationResult = ApolloReactCommon.MutationResult<EndCurrentTurnAndStartNextTurnMutation>;
export type EndCurrentTurnAndStartNextTurnMutationOptions = ApolloReactCommon.BaseMutationOptions<EndCurrentTurnAndStartNextTurnMutation, EndCurrentTurnAndStartNextTurnMutationVariables>;
export const UpdateAllPlayersDocument = gql`
    mutation UpdateAllPlayers($gameId: Int!, $players: [players_insert_input!]!) {
  insert_games_one(object: {id: $gameId, players: {data: $players, on_conflict: {constraint: players_pkey, update_columns: [team]}}}, on_conflict: {constraint: games_pkey, update_columns: [id]}) {
    id
    players {
      id
      game_id
      team
      team_sequence
    }
  }
}
    `;
export type UpdateAllPlayersMutationFn = ApolloReactCommon.MutationFunction<UpdateAllPlayersMutation, UpdateAllPlayersMutationVariables>;

/**
 * __useUpdateAllPlayersMutation__
 *
 * To run a mutation, you first call `useUpdateAllPlayersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAllPlayersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAllPlayersMutation, { data, loading, error }] = useUpdateAllPlayersMutation({
 *   variables: {
 *      gameId: // value for 'gameId'
 *      players: // value for 'players'
 *   },
 * });
 */
export function useUpdateAllPlayersMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAllPlayersMutation, UpdateAllPlayersMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateAllPlayersMutation, UpdateAllPlayersMutationVariables>(UpdateAllPlayersDocument, baseOptions);
      }
export type UpdateAllPlayersMutationHookResult = ReturnType<typeof useUpdateAllPlayersMutation>;
export type UpdateAllPlayersMutationResult = ApolloReactCommon.MutationResult<UpdateAllPlayersMutation>;
export type UpdateAllPlayersMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateAllPlayersMutation, UpdateAllPlayersMutationVariables>;