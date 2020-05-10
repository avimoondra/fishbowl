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
  timestamptz: any;
  uuid: any;
  jsonb: any;
  json: any;
};

export type Cards = {
  created_at: Scalars['timestamptz'];
  game: Games;
  game_id: Scalars['uuid'];
  id: Scalars['uuid'];
  player_id: Scalars['uuid'];
  word: Scalars['String'];
};

export type CardsAggregate = {
  aggregate?: Maybe<CardsAggregateFields>;
  nodes: Array<Cards>;
};

export type CardsAggregateFields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<CardsMaxFields>;
  min?: Maybe<CardsMinFields>;
};


export type CardsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<CardsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type CardsAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<CardsMaxOrderBy>;
  min?: Maybe<CardsMinOrderBy>;
};

export type CardsArrRelInsertInput = {
  data: Array<CardsInsertInput>;
  on_conflict?: Maybe<CardsOnConflict>;
};

export type CardsBoolExp = {
  _and?: Maybe<Array<Maybe<CardsBoolExp>>>;
  _not?: Maybe<CardsBoolExp>;
  _or?: Maybe<Array<Maybe<CardsBoolExp>>>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  game?: Maybe<GamesBoolExp>;
  game_id?: Maybe<UuidComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  player_id?: Maybe<UuidComparisonExp>;
  word?: Maybe<StringComparisonExp>;
};

export enum CardsConstraint {
  CardsPkey = 'cards_pkey'
}

export type CardsInsertInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  game?: Maybe<GamesObjRelInsertInput>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  player_id?: Maybe<Scalars['uuid']>;
  word?: Maybe<Scalars['String']>;
};

export type CardsMaxFields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  player_id?: Maybe<Scalars['uuid']>;
  word?: Maybe<Scalars['String']>;
};

export type CardsMaxOrderBy = {
  created_at?: Maybe<OrderBy>;
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player_id?: Maybe<OrderBy>;
  word?: Maybe<OrderBy>;
};

export type CardsMinFields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  player_id?: Maybe<Scalars['uuid']>;
  word?: Maybe<Scalars['String']>;
};

export type CardsMinOrderBy = {
  created_at?: Maybe<OrderBy>;
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
  game?: Maybe<GamesOrderBy>;
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  player_id?: Maybe<OrderBy>;
  word?: Maybe<OrderBy>;
};

export type CardsPkColumnsInput = {
  id: Scalars['uuid'];
};

export enum CardsSelectColumn {
  CreatedAt = 'created_at',
  GameId = 'game_id',
  Id = 'id',
  PlayerId = 'player_id',
  Word = 'word'
}

export type CardsSetInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  player_id?: Maybe<Scalars['uuid']>;
  word?: Maybe<Scalars['String']>;
};

export enum CardsUpdateColumn {
  CreatedAt = 'created_at',
  GameId = 'game_id',
  Id = 'id',
  PlayerId = 'player_id',
  Word = 'word'
}

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
  created_at: Scalars['timestamptz'];
  host?: Maybe<Players>;
  host_id?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  join_code?: Maybe<Scalars['String']>;
  num_entries_per_player?: Maybe<Scalars['Int']>;
  players: Array<Players>;
  players_aggregate: PlayersAggregate;
  rounds: Array<Rounds>;
  rounds_aggregate: RoundsAggregate;
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


export type GamesRoundsArgs = {
  distinct_on?: Maybe<Array<RoundsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<RoundsOrderBy>>;
  where?: Maybe<RoundsBoolExp>;
};


export type GamesRoundsAggregateArgs = {
  distinct_on?: Maybe<Array<RoundsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<RoundsOrderBy>>;
  where?: Maybe<RoundsBoolExp>;
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
  num_entries_per_player?: Maybe<Scalars['Float']>;
  seconds_per_turn?: Maybe<Scalars['Float']>;
};

export type GamesAvgOrderBy = {
  num_entries_per_player?: Maybe<OrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
};

export type GamesBoolExp = {
  _and?: Maybe<Array<Maybe<GamesBoolExp>>>;
  _not?: Maybe<GamesBoolExp>;
  _or?: Maybe<Array<Maybe<GamesBoolExp>>>;
  cards?: Maybe<CardsBoolExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  host?: Maybe<PlayersBoolExp>;
  host_id?: Maybe<UuidComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  join_code?: Maybe<StringComparisonExp>;
  num_entries_per_player?: Maybe<IntComparisonExp>;
  players?: Maybe<PlayersBoolExp>;
  rounds?: Maybe<RoundsBoolExp>;
  seconds_per_turn?: Maybe<IntComparisonExp>;
  starting_letter?: Maybe<StringComparisonExp>;
  state?: Maybe<GameStateEnumComparisonExp>;
  turns?: Maybe<TurnsBoolExp>;
};

export enum GamesConstraint {
  GamesJoinCodeIdx = 'games_join_code_idx',
  GamesJoinCodeKey = 'games_join_code_key',
  GamesPkey = 'games_pkey'
}

export type GamesIncInput = {
  num_entries_per_player?: Maybe<Scalars['Int']>;
  seconds_per_turn?: Maybe<Scalars['Int']>;
};

export type GamesInsertInput = {
  cards?: Maybe<CardsArrRelInsertInput>;
  created_at?: Maybe<Scalars['timestamptz']>;
  host?: Maybe<PlayersObjRelInsertInput>;
  host_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  join_code?: Maybe<Scalars['String']>;
  num_entries_per_player?: Maybe<Scalars['Int']>;
  players?: Maybe<PlayersArrRelInsertInput>;
  rounds?: Maybe<RoundsArrRelInsertInput>;
  seconds_per_turn?: Maybe<Scalars['Int']>;
  starting_letter?: Maybe<Scalars['String']>;
  state?: Maybe<GameStateEnum>;
  turns?: Maybe<TurnsArrRelInsertInput>;
};

export type GamesMaxFields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  host_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  join_code?: Maybe<Scalars['String']>;
  num_entries_per_player?: Maybe<Scalars['Int']>;
  seconds_per_turn?: Maybe<Scalars['Int']>;
  starting_letter?: Maybe<Scalars['String']>;
};

export type GamesMaxOrderBy = {
  created_at?: Maybe<OrderBy>;
  host_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  join_code?: Maybe<OrderBy>;
  num_entries_per_player?: Maybe<OrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
  starting_letter?: Maybe<OrderBy>;
};

export type GamesMinFields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  host_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  join_code?: Maybe<Scalars['String']>;
  num_entries_per_player?: Maybe<Scalars['Int']>;
  seconds_per_turn?: Maybe<Scalars['Int']>;
  starting_letter?: Maybe<Scalars['String']>;
};

export type GamesMinOrderBy = {
  created_at?: Maybe<OrderBy>;
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
  rounds_aggregate?: Maybe<RoundsAggregateOrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
  starting_letter?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
  turns_aggregate?: Maybe<TurnsAggregateOrderBy>;
};

export type GamesPkColumnsInput = {
  id: Scalars['uuid'];
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
  created_at?: Maybe<Scalars['timestamptz']>;
  host_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  join_code?: Maybe<Scalars['String']>;
  num_entries_per_player?: Maybe<Scalars['Int']>;
  seconds_per_turn?: Maybe<Scalars['Int']>;
  starting_letter?: Maybe<Scalars['String']>;
  state?: Maybe<GameStateEnum>;
};

export type GamesStddevFields = {
  num_entries_per_player?: Maybe<Scalars['Float']>;
  seconds_per_turn?: Maybe<Scalars['Float']>;
};

export type GamesStddevOrderBy = {
  num_entries_per_player?: Maybe<OrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
};

export type GamesStddevPopFields = {
  num_entries_per_player?: Maybe<Scalars['Float']>;
  seconds_per_turn?: Maybe<Scalars['Float']>;
};

export type GamesStddevPopOrderBy = {
  num_entries_per_player?: Maybe<OrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
};

export type GamesStddevSampFields = {
  num_entries_per_player?: Maybe<Scalars['Float']>;
  seconds_per_turn?: Maybe<Scalars['Float']>;
};

export type GamesStddevSampOrderBy = {
  num_entries_per_player?: Maybe<OrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
};

export type GamesSumFields = {
  num_entries_per_player?: Maybe<Scalars['Int']>;
  seconds_per_turn?: Maybe<Scalars['Int']>;
};

export type GamesSumOrderBy = {
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
  num_entries_per_player?: Maybe<Scalars['Float']>;
  seconds_per_turn?: Maybe<Scalars['Float']>;
};

export type GamesVarPopOrderBy = {
  num_entries_per_player?: Maybe<OrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
};

export type GamesVarSampFields = {
  num_entries_per_player?: Maybe<Scalars['Float']>;
  seconds_per_turn?: Maybe<Scalars['Float']>;
};

export type GamesVarSampOrderBy = {
  num_entries_per_player?: Maybe<OrderBy>;
  seconds_per_turn?: Maybe<OrderBy>;
};

export type GamesVarianceFields = {
  num_entries_per_player?: Maybe<Scalars['Float']>;
  seconds_per_turn?: Maybe<Scalars['Float']>;
};

export type GamesVarianceOrderBy = {
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

export type JoinGameOutput = {
  id: Scalars['String'];
  jwt_token: Scalars['String'];
};


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
  delete_rounds?: Maybe<RoundsMutationResponse>;
  delete_rounds_by_pk?: Maybe<Rounds>;
  delete_turn_scorings?: Maybe<TurnScoringsMutationResponse>;
  delete_turn_scorings_by_pk?: Maybe<TurnScorings>;
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
  insert_rounds?: Maybe<RoundsMutationResponse>;
  insert_rounds_one?: Maybe<Rounds>;
  insert_turn_scorings?: Maybe<TurnScoringsMutationResponse>;
  insert_turn_scorings_one?: Maybe<TurnScorings>;
  insert_turns?: Maybe<TurnsMutationResponse>;
  insert_turns_one?: Maybe<Turns>;
  joinGame?: Maybe<JoinGameOutput>;
  update_cards?: Maybe<CardsMutationResponse>;
  update_cards_by_pk?: Maybe<Cards>;
  update_game_state?: Maybe<GameStateMutationResponse>;
  update_game_state_by_pk?: Maybe<GameState>;
  update_games?: Maybe<GamesMutationResponse>;
  update_games_by_pk?: Maybe<Games>;
  update_players?: Maybe<PlayersMutationResponse>;
  update_players_by_pk?: Maybe<Players>;
  update_rounds?: Maybe<RoundsMutationResponse>;
  update_rounds_by_pk?: Maybe<Rounds>;
  update_turn_scorings?: Maybe<TurnScoringsMutationResponse>;
  update_turn_scorings_by_pk?: Maybe<TurnScorings>;
  update_turns?: Maybe<TurnsMutationResponse>;
  update_turns_by_pk?: Maybe<Turns>;
};


export type MutationRootDeleteCardsArgs = {
  where: CardsBoolExp;
};


export type MutationRootDeleteCardsByPkArgs = {
  id: Scalars['uuid'];
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
  id: Scalars['uuid'];
};


export type MutationRootDeletePlayersArgs = {
  where: PlayersBoolExp;
};


export type MutationRootDeletePlayersByPkArgs = {
  id: Scalars['uuid'];
};


export type MutationRootDeleteRoundsArgs = {
  where: RoundsBoolExp;
};


export type MutationRootDeleteRoundsByPkArgs = {
  id: Scalars['uuid'];
};


export type MutationRootDeleteTurnScoringsArgs = {
  where: TurnScoringsBoolExp;
};


export type MutationRootDeleteTurnScoringsByPkArgs = {
  id: Scalars['uuid'];
};


export type MutationRootDeleteTurnsArgs = {
  where: TurnsBoolExp;
};


export type MutationRootDeleteTurnsByPkArgs = {
  id: Scalars['uuid'];
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


export type MutationRootInsertRoundsArgs = {
  objects: Array<RoundsInsertInput>;
  on_conflict?: Maybe<RoundsOnConflict>;
};


export type MutationRootInsertRoundsOneArgs = {
  object: RoundsInsertInput;
  on_conflict?: Maybe<RoundsOnConflict>;
};


export type MutationRootInsertTurnScoringsArgs = {
  objects: Array<TurnScoringsInsertInput>;
  on_conflict?: Maybe<TurnScoringsOnConflict>;
};


export type MutationRootInsertTurnScoringsOneArgs = {
  object: TurnScoringsInsertInput;
  on_conflict?: Maybe<TurnScoringsOnConflict>;
};


export type MutationRootInsertTurnsArgs = {
  objects: Array<TurnsInsertInput>;
  on_conflict?: Maybe<TurnsOnConflict>;
};


export type MutationRootInsertTurnsOneArgs = {
  object: TurnsInsertInput;
  on_conflict?: Maybe<TurnsOnConflict>;
};


export type MutationRootJoinGameArgs = {
  clientUuid: Scalars['String'];
  gameId: Scalars['String'];
};


export type MutationRootUpdateCardsArgs = {
  _set?: Maybe<CardsSetInput>;
  where: CardsBoolExp;
};


export type MutationRootUpdateCardsByPkArgs = {
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


export type MutationRootUpdateRoundsArgs = {
  _inc?: Maybe<RoundsIncInput>;
  _set?: Maybe<RoundsSetInput>;
  where: RoundsBoolExp;
};


export type MutationRootUpdateRoundsByPkArgs = {
  _inc?: Maybe<RoundsIncInput>;
  _set?: Maybe<RoundsSetInput>;
  pk_columns: RoundsPkColumnsInput;
};


export type MutationRootUpdateTurnScoringsArgs = {
  _inc?: Maybe<TurnScoringsIncInput>;
  _set?: Maybe<TurnScoringsSetInput>;
  where: TurnScoringsBoolExp;
};


export type MutationRootUpdateTurnScoringsByPkArgs = {
  _inc?: Maybe<TurnScoringsIncInput>;
  _set?: Maybe<TurnScoringsSetInput>;
  pk_columns: TurnScoringsPkColumnsInput;
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
  client_uuid?: Maybe<Scalars['uuid']>;
  created_at: Scalars['timestamptz'];
  game: Games;
  game_id: Scalars['uuid'];
  id: Scalars['uuid'];
  team?: Maybe<Scalars['String']>;
  team_sequence?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
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
  team_sequence?: Maybe<Scalars['Float']>;
};

export type PlayersAvgOrderBy = {
  team_sequence?: Maybe<OrderBy>;
};

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
  username?: Maybe<StringComparisonExp>;
};

export enum PlayersConstraint {
  PlayersClientUuidGameIdKey = 'players_client_uuid_game_id_key',
  PlayersPkey = 'players_pkey'
}

export type PlayersIncInput = {
  team_sequence?: Maybe<Scalars['Int']>;
};

export type PlayersInsertInput = {
  client_uuid?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  game?: Maybe<GamesObjRelInsertInput>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  team?: Maybe<Scalars['String']>;
  team_sequence?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

export type PlayersMaxFields = {
  client_uuid?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  team?: Maybe<Scalars['String']>;
  team_sequence?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

export type PlayersMaxOrderBy = {
  client_uuid?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  team?: Maybe<OrderBy>;
  team_sequence?: Maybe<OrderBy>;
  username?: Maybe<OrderBy>;
};

export type PlayersMinFields = {
  client_uuid?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  team?: Maybe<Scalars['String']>;
  team_sequence?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

export type PlayersMinOrderBy = {
  client_uuid?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  team?: Maybe<OrderBy>;
  team_sequence?: Maybe<OrderBy>;
  username?: Maybe<OrderBy>;
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
  client_uuid?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  game?: Maybe<GamesOrderBy>;
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  team?: Maybe<OrderBy>;
  team_sequence?: Maybe<OrderBy>;
  username?: Maybe<OrderBy>;
};

export type PlayersPkColumnsInput = {
  id: Scalars['uuid'];
};

export enum PlayersSelectColumn {
  ClientUuid = 'client_uuid',
  CreatedAt = 'created_at',
  GameId = 'game_id',
  Id = 'id',
  Team = 'team',
  TeamSequence = 'team_sequence',
  Username = 'username'
}

export type PlayersSetInput = {
  client_uuid?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  team?: Maybe<Scalars['String']>;
  team_sequence?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

export type PlayersStddevFields = {
  team_sequence?: Maybe<Scalars['Float']>;
};

export type PlayersStddevOrderBy = {
  team_sequence?: Maybe<OrderBy>;
};

export type PlayersStddevPopFields = {
  team_sequence?: Maybe<Scalars['Float']>;
};

export type PlayersStddevPopOrderBy = {
  team_sequence?: Maybe<OrderBy>;
};

export type PlayersStddevSampFields = {
  team_sequence?: Maybe<Scalars['Float']>;
};

export type PlayersStddevSampOrderBy = {
  team_sequence?: Maybe<OrderBy>;
};

export type PlayersSumFields = {
  team_sequence?: Maybe<Scalars['Int']>;
};

export type PlayersSumOrderBy = {
  team_sequence?: Maybe<OrderBy>;
};

export enum PlayersUpdateColumn {
  ClientUuid = 'client_uuid',
  CreatedAt = 'created_at',
  GameId = 'game_id',
  Id = 'id',
  Team = 'team',
  TeamSequence = 'team_sequence',
  Username = 'username'
}

export type PlayersVarPopFields = {
  team_sequence?: Maybe<Scalars['Float']>;
};

export type PlayersVarPopOrderBy = {
  team_sequence?: Maybe<OrderBy>;
};

export type PlayersVarSampFields = {
  team_sequence?: Maybe<Scalars['Float']>;
};

export type PlayersVarSampOrderBy = {
  team_sequence?: Maybe<OrderBy>;
};

export type PlayersVarianceFields = {
  team_sequence?: Maybe<Scalars['Float']>;
};

export type PlayersVarianceOrderBy = {
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
  rounds: Array<Rounds>;
  rounds_aggregate: RoundsAggregate;
  rounds_by_pk?: Maybe<Rounds>;
  turn_scorings: Array<TurnScorings>;
  turn_scorings_aggregate: TurnScoringsAggregate;
  turn_scorings_by_pk?: Maybe<TurnScorings>;
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
  id: Scalars['uuid'];
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
  id: Scalars['uuid'];
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
  id: Scalars['uuid'];
};


export type QueryRootRoundsArgs = {
  distinct_on?: Maybe<Array<RoundsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<RoundsOrderBy>>;
  where?: Maybe<RoundsBoolExp>;
};


export type QueryRootRoundsAggregateArgs = {
  distinct_on?: Maybe<Array<RoundsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<RoundsOrderBy>>;
  where?: Maybe<RoundsBoolExp>;
};


export type QueryRootRoundsByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRootTurnScoringsArgs = {
  distinct_on?: Maybe<Array<TurnScoringsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TurnScoringsOrderBy>>;
  where?: Maybe<TurnScoringsBoolExp>;
};


export type QueryRootTurnScoringsAggregateArgs = {
  distinct_on?: Maybe<Array<TurnScoringsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TurnScoringsOrderBy>>;
  where?: Maybe<TurnScoringsBoolExp>;
};


export type QueryRootTurnScoringsByPkArgs = {
  id: Scalars['uuid'];
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
  id: Scalars['uuid'];
};

export type Rounds = {
  game: Games;
  game_id: Scalars['uuid'];
  id: Scalars['uuid'];
  order_sequence: Scalars['Int'];
  value: Scalars['String'];
};

export type RoundsAggregate = {
  aggregate?: Maybe<RoundsAggregateFields>;
  nodes: Array<Rounds>;
};

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


export type RoundsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<RoundsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

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

export type RoundsArrRelInsertInput = {
  data: Array<RoundsInsertInput>;
  on_conflict?: Maybe<RoundsOnConflict>;
};

export type RoundsAvgFields = {
  order_sequence?: Maybe<Scalars['Float']>;
};

export type RoundsAvgOrderBy = {
  order_sequence?: Maybe<OrderBy>;
};

export type RoundsBoolExp = {
  _and?: Maybe<Array<Maybe<RoundsBoolExp>>>;
  _not?: Maybe<RoundsBoolExp>;
  _or?: Maybe<Array<Maybe<RoundsBoolExp>>>;
  game?: Maybe<GamesBoolExp>;
  game_id?: Maybe<UuidComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  order_sequence?: Maybe<IntComparisonExp>;
  value?: Maybe<StringComparisonExp>;
};

export enum RoundsConstraint {
  RoundsPkey = 'rounds_pkey'
}

export type RoundsIncInput = {
  order_sequence?: Maybe<Scalars['Int']>;
};

export type RoundsInsertInput = {
  game?: Maybe<GamesObjRelInsertInput>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  order_sequence?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type RoundsMaxFields = {
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  order_sequence?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type RoundsMaxOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  order_sequence?: Maybe<OrderBy>;
  value?: Maybe<OrderBy>;
};

export type RoundsMinFields = {
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  order_sequence?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type RoundsMinOrderBy = {
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  order_sequence?: Maybe<OrderBy>;
  value?: Maybe<OrderBy>;
};

export type RoundsMutationResponse = {
  affected_rows: Scalars['Int'];
  returning: Array<Rounds>;
};

export type RoundsObjRelInsertInput = {
  data: RoundsInsertInput;
  on_conflict?: Maybe<RoundsOnConflict>;
};

export type RoundsOnConflict = {
  constraint: RoundsConstraint;
  update_columns: Array<RoundsUpdateColumn>;
  where?: Maybe<RoundsBoolExp>;
};

export type RoundsOrderBy = {
  game?: Maybe<GamesOrderBy>;
  game_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  order_sequence?: Maybe<OrderBy>;
  value?: Maybe<OrderBy>;
};

export type RoundsPkColumnsInput = {
  id: Scalars['uuid'];
};

export enum RoundsSelectColumn {
  GameId = 'game_id',
  Id = 'id',
  OrderSequence = 'order_sequence',
  Value = 'value'
}

export type RoundsSetInput = {
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  order_sequence?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type RoundsStddevFields = {
  order_sequence?: Maybe<Scalars['Float']>;
};

export type RoundsStddevOrderBy = {
  order_sequence?: Maybe<OrderBy>;
};

export type RoundsStddevPopFields = {
  order_sequence?: Maybe<Scalars['Float']>;
};

export type RoundsStddevPopOrderBy = {
  order_sequence?: Maybe<OrderBy>;
};

export type RoundsStddevSampFields = {
  order_sequence?: Maybe<Scalars['Float']>;
};

export type RoundsStddevSampOrderBy = {
  order_sequence?: Maybe<OrderBy>;
};

export type RoundsSumFields = {
  order_sequence?: Maybe<Scalars['Int']>;
};

export type RoundsSumOrderBy = {
  order_sequence?: Maybe<OrderBy>;
};

export enum RoundsUpdateColumn {
  GameId = 'game_id',
  Id = 'id',
  OrderSequence = 'order_sequence',
  Value = 'value'
}

export type RoundsVarPopFields = {
  order_sequence?: Maybe<Scalars['Float']>;
};

export type RoundsVarPopOrderBy = {
  order_sequence?: Maybe<OrderBy>;
};

export type RoundsVarSampFields = {
  order_sequence?: Maybe<Scalars['Float']>;
};

export type RoundsVarSampOrderBy = {
  order_sequence?: Maybe<OrderBy>;
};

export type RoundsVarianceFields = {
  order_sequence?: Maybe<Scalars['Float']>;
};

export type RoundsVarianceOrderBy = {
  order_sequence?: Maybe<OrderBy>;
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
  rounds: Array<Rounds>;
  rounds_aggregate: RoundsAggregate;
  rounds_by_pk?: Maybe<Rounds>;
  turn_scorings: Array<TurnScorings>;
  turn_scorings_aggregate: TurnScoringsAggregate;
  turn_scorings_by_pk?: Maybe<TurnScorings>;
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
  id: Scalars['uuid'];
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
  id: Scalars['uuid'];
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
  id: Scalars['uuid'];
};


export type SubscriptionRootRoundsArgs = {
  distinct_on?: Maybe<Array<RoundsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<RoundsOrderBy>>;
  where?: Maybe<RoundsBoolExp>;
};


export type SubscriptionRootRoundsAggregateArgs = {
  distinct_on?: Maybe<Array<RoundsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<RoundsOrderBy>>;
  where?: Maybe<RoundsBoolExp>;
};


export type SubscriptionRootRoundsByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootTurnScoringsArgs = {
  distinct_on?: Maybe<Array<TurnScoringsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TurnScoringsOrderBy>>;
  where?: Maybe<TurnScoringsBoolExp>;
};


export type SubscriptionRootTurnScoringsAggregateArgs = {
  distinct_on?: Maybe<Array<TurnScoringsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TurnScoringsOrderBy>>;
  where?: Maybe<TurnScoringsBoolExp>;
};


export type SubscriptionRootTurnScoringsByPkArgs = {
  id: Scalars['uuid'];
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
  id: Scalars['uuid'];
};


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

export type TurnScorings = {
  card_id: Scalars['uuid'];
  ended_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  score: Scalars['Int'];
  started_at: Scalars['timestamptz'];
  status: Scalars['String'];
  turn: Turns;
  turn_id: Scalars['uuid'];
};

export type TurnScoringsAggregate = {
  aggregate?: Maybe<TurnScoringsAggregateFields>;
  nodes: Array<TurnScorings>;
};

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


export type TurnScoringsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<TurnScoringsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

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

export type TurnScoringsArrRelInsertInput = {
  data: Array<TurnScoringsInsertInput>;
  on_conflict?: Maybe<TurnScoringsOnConflict>;
};

export type TurnScoringsAvgFields = {
  score?: Maybe<Scalars['Float']>;
};

export type TurnScoringsAvgOrderBy = {
  score?: Maybe<OrderBy>;
};

export type TurnScoringsBoolExp = {
  _and?: Maybe<Array<Maybe<TurnScoringsBoolExp>>>;
  _not?: Maybe<TurnScoringsBoolExp>;
  _or?: Maybe<Array<Maybe<TurnScoringsBoolExp>>>;
  card_id?: Maybe<UuidComparisonExp>;
  ended_at?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  score?: Maybe<IntComparisonExp>;
  started_at?: Maybe<TimestamptzComparisonExp>;
  status?: Maybe<StringComparisonExp>;
  turn?: Maybe<TurnsBoolExp>;
  turn_id?: Maybe<UuidComparisonExp>;
};

export enum TurnScoringsConstraint {
  TurnScoringsPkey = 'turn_scorings_pkey'
}

export type TurnScoringsIncInput = {
  score?: Maybe<Scalars['Int']>;
};

export type TurnScoringsInsertInput = {
  card_id?: Maybe<Scalars['uuid']>;
  ended_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  score?: Maybe<Scalars['Int']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  turn?: Maybe<TurnsObjRelInsertInput>;
  turn_id?: Maybe<Scalars['uuid']>;
};

export type TurnScoringsMaxFields = {
  card_id?: Maybe<Scalars['uuid']>;
  ended_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  score?: Maybe<Scalars['Int']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  turn_id?: Maybe<Scalars['uuid']>;
};

export type TurnScoringsMaxOrderBy = {
  card_id?: Maybe<OrderBy>;
  ended_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  score?: Maybe<OrderBy>;
  started_at?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  turn_id?: Maybe<OrderBy>;
};

export type TurnScoringsMinFields = {
  card_id?: Maybe<Scalars['uuid']>;
  ended_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  score?: Maybe<Scalars['Int']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  turn_id?: Maybe<Scalars['uuid']>;
};

export type TurnScoringsMinOrderBy = {
  card_id?: Maybe<OrderBy>;
  ended_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  score?: Maybe<OrderBy>;
  started_at?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  turn_id?: Maybe<OrderBy>;
};

export type TurnScoringsMutationResponse = {
  affected_rows: Scalars['Int'];
  returning: Array<TurnScorings>;
};

export type TurnScoringsObjRelInsertInput = {
  data: TurnScoringsInsertInput;
  on_conflict?: Maybe<TurnScoringsOnConflict>;
};

export type TurnScoringsOnConflict = {
  constraint: TurnScoringsConstraint;
  update_columns: Array<TurnScoringsUpdateColumn>;
  where?: Maybe<TurnScoringsBoolExp>;
};

export type TurnScoringsOrderBy = {
  card_id?: Maybe<OrderBy>;
  ended_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  score?: Maybe<OrderBy>;
  started_at?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  turn?: Maybe<TurnsOrderBy>;
  turn_id?: Maybe<OrderBy>;
};

export type TurnScoringsPkColumnsInput = {
  id: Scalars['uuid'];
};

export enum TurnScoringsSelectColumn {
  CardId = 'card_id',
  EndedAt = 'ended_at',
  Id = 'id',
  Score = 'score',
  StartedAt = 'started_at',
  Status = 'status',
  TurnId = 'turn_id'
}

export type TurnScoringsSetInput = {
  card_id?: Maybe<Scalars['uuid']>;
  ended_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  score?: Maybe<Scalars['Int']>;
  started_at?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  turn_id?: Maybe<Scalars['uuid']>;
};

export type TurnScoringsStddevFields = {
  score?: Maybe<Scalars['Float']>;
};

export type TurnScoringsStddevOrderBy = {
  score?: Maybe<OrderBy>;
};

export type TurnScoringsStddevPopFields = {
  score?: Maybe<Scalars['Float']>;
};

export type TurnScoringsStddevPopOrderBy = {
  score?: Maybe<OrderBy>;
};

export type TurnScoringsStddevSampFields = {
  score?: Maybe<Scalars['Float']>;
};

export type TurnScoringsStddevSampOrderBy = {
  score?: Maybe<OrderBy>;
};

export type TurnScoringsSumFields = {
  score?: Maybe<Scalars['Int']>;
};

export type TurnScoringsSumOrderBy = {
  score?: Maybe<OrderBy>;
};

export enum TurnScoringsUpdateColumn {
  CardId = 'card_id',
  EndedAt = 'ended_at',
  Id = 'id',
  Score = 'score',
  StartedAt = 'started_at',
  Status = 'status',
  TurnId = 'turn_id'
}

export type TurnScoringsVarPopFields = {
  score?: Maybe<Scalars['Float']>;
};

export type TurnScoringsVarPopOrderBy = {
  score?: Maybe<OrderBy>;
};

export type TurnScoringsVarSampFields = {
  score?: Maybe<Scalars['Float']>;
};

export type TurnScoringsVarSampOrderBy = {
  score?: Maybe<OrderBy>;
};

export type TurnScoringsVarianceFields = {
  score?: Maybe<Scalars['Float']>;
};

export type TurnScoringsVarianceOrderBy = {
  score?: Maybe<OrderBy>;
};

export type Turns = {
  completed_card_ids: Scalars['jsonb'];
  created_at: Scalars['timestamptz'];
  ended_at?: Maybe<Scalars['timestamptz']>;
  game: Games;
  game_id: Scalars['uuid'];
  id: Scalars['uuid'];
  player: Players;
  player_id: Scalars['uuid'];
  review_started_at?: Maybe<Scalars['timestamptz']>;
  round_id?: Maybe<Scalars['uuid']>;
  scorings: Array<TurnScorings>;
  scorings_aggregate: TurnScoringsAggregate;
  seconds_per_turn_override?: Maybe<Scalars['Int']>;
  sequential_id: Scalars['Int'];
  started_at?: Maybe<Scalars['timestamptz']>;
};


export type TurnsCompletedCardIdsArgs = {
  path?: Maybe<Scalars['String']>;
};


export type TurnsScoringsArgs = {
  distinct_on?: Maybe<Array<TurnScoringsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TurnScoringsOrderBy>>;
  where?: Maybe<TurnScoringsBoolExp>;
};


export type TurnsScoringsAggregateArgs = {
  distinct_on?: Maybe<Array<TurnScoringsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TurnScoringsOrderBy>>;
  where?: Maybe<TurnScoringsBoolExp>;
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
  seconds_per_turn_override?: Maybe<Scalars['Float']>;
  sequential_id?: Maybe<Scalars['Float']>;
};

export type TurnsAvgOrderBy = {
  seconds_per_turn_override?: Maybe<OrderBy>;
  sequential_id?: Maybe<OrderBy>;
};

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
  seconds_per_turn_override?: Maybe<Scalars['Int']>;
  sequential_id?: Maybe<Scalars['Int']>;
};

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
};

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
};

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
};

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
};

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
  review_started_at?: Maybe<OrderBy>;
  round_id?: Maybe<OrderBy>;
  scorings_aggregate?: Maybe<TurnScoringsAggregateOrderBy>;
  seconds_per_turn_override?: Maybe<OrderBy>;
  sequential_id?: Maybe<OrderBy>;
  started_at?: Maybe<OrderBy>;
};

export type TurnsPkColumnsInput = {
  id: Scalars['uuid'];
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
  ReviewStartedAt = 'review_started_at',
  RoundId = 'round_id',
  SecondsPerTurnOverride = 'seconds_per_turn_override',
  SequentialId = 'sequential_id',
  StartedAt = 'started_at'
}

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
};

export type TurnsStddevFields = {
  seconds_per_turn_override?: Maybe<Scalars['Float']>;
  sequential_id?: Maybe<Scalars['Float']>;
};

export type TurnsStddevOrderBy = {
  seconds_per_turn_override?: Maybe<OrderBy>;
  sequential_id?: Maybe<OrderBy>;
};

export type TurnsStddevPopFields = {
  seconds_per_turn_override?: Maybe<Scalars['Float']>;
  sequential_id?: Maybe<Scalars['Float']>;
};

export type TurnsStddevPopOrderBy = {
  seconds_per_turn_override?: Maybe<OrderBy>;
  sequential_id?: Maybe<OrderBy>;
};

export type TurnsStddevSampFields = {
  seconds_per_turn_override?: Maybe<Scalars['Float']>;
  sequential_id?: Maybe<Scalars['Float']>;
};

export type TurnsStddevSampOrderBy = {
  seconds_per_turn_override?: Maybe<OrderBy>;
  sequential_id?: Maybe<OrderBy>;
};

export type TurnsSumFields = {
  seconds_per_turn_override?: Maybe<Scalars['Int']>;
  sequential_id?: Maybe<Scalars['Int']>;
};

export type TurnsSumOrderBy = {
  seconds_per_turn_override?: Maybe<OrderBy>;
  sequential_id?: Maybe<OrderBy>;
};

export enum TurnsUpdateColumn {
  CompletedCardIds = 'completed_card_ids',
  CreatedAt = 'created_at',
  EndedAt = 'ended_at',
  GameId = 'game_id',
  Id = 'id',
  PlayerId = 'player_id',
  ReviewStartedAt = 'review_started_at',
  RoundId = 'round_id',
  SecondsPerTurnOverride = 'seconds_per_turn_override',
  SequentialId = 'sequential_id',
  StartedAt = 'started_at'
}

export type TurnsVarPopFields = {
  seconds_per_turn_override?: Maybe<Scalars['Float']>;
  sequential_id?: Maybe<Scalars['Float']>;
};

export type TurnsVarPopOrderBy = {
  seconds_per_turn_override?: Maybe<OrderBy>;
  sequential_id?: Maybe<OrderBy>;
};

export type TurnsVarSampFields = {
  seconds_per_turn_override?: Maybe<Scalars['Float']>;
  sequential_id?: Maybe<Scalars['Float']>;
};

export type TurnsVarSampOrderBy = {
  seconds_per_turn_override?: Maybe<OrderBy>;
  sequential_id?: Maybe<OrderBy>;
};

export type TurnsVarianceFields = {
  seconds_per_turn_override?: Maybe<Scalars['Float']>;
  sequential_id?: Maybe<Scalars['Float']>;
};

export type TurnsVarianceOrderBy = {
  seconds_per_turn_override?: Maybe<OrderBy>;
  sequential_id?: Maybe<OrderBy>;
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
  clientUuid: Scalars['uuid'];
  joinCode: Scalars['String'];
};


export type CurrentPlayerQuery = { players: Array<(
    Pick<Players, 'id' | 'client_uuid' | 'username'>
    & { game: (
      Pick<Games, 'id'>
      & { host?: Maybe<Pick<Players, 'id' | 'username'>> }
    ) }
  )> };

export type CurrentGameSubscriptionVariables = {
  joinCode: Scalars['String'];
};


export type CurrentGameSubscription = { games: Array<(
    Pick<Games, 'id' | 'join_code' | 'starting_letter' | 'seconds_per_turn' | 'num_entries_per_player' | 'state'>
    & { host?: Maybe<Pick<Players, 'id' | 'username'>>, rounds: Array<Pick<Rounds, 'id' | 'value'>>, cards: Array<Pick<Cards, 'id' | 'word' | 'player_id'>>, players: Array<Pick<Players, 'id' | 'username' | 'team' | 'team_sequence'>>, turns: Array<Pick<Turns, 'id' | 'player_id' | 'started_at' | 'completed_card_ids' | 'seconds_per_turn_override'>> }
  )> };

export type UpdateGameStateMutationVariables = {
  id: Scalars['uuid'];
  state: GameStateEnum;
};


export type UpdateGameStateMutation = { update_games_by_pk?: Maybe<Pick<Games, 'id' | 'state'>> };

export type SubmitCardsMutationVariables = {
  cards: Array<CardsInsertInput>;
};


export type SubmitCardsMutation = { insert_cards?: Maybe<{ returning: Array<Pick<Cards, 'id'>> }> };

export type StartGameMutationVariables = {};


export type StartGameMutation = { insert_games_one?: Maybe<Pick<Games, 'id'>> };

export type JoinGameMutationVariables = {
  gameId: Scalars['String'];
  clientUuid: Scalars['String'];
};


export type JoinGameMutation = { joinGame?: Maybe<Pick<JoinGameOutput, 'id' | 'jwt_token'>> };

export type BecomeHostMutationVariables = {
  gameId: Scalars['uuid'];
  playerId: Scalars['uuid'];
};


export type BecomeHostMutation = { update_games_by_pk?: Maybe<Pick<Games, 'id' | 'join_code' | 'starting_letter' | 'seconds_per_turn' | 'num_entries_per_player'>> };

export type GameByJoinCodeQueryVariables = {
  joinCode: Scalars['String'];
};


export type GameByJoinCodeQuery = { games: Array<Pick<Games, 'id'>> };

export type GameByIdSubscriptionVariables = {
  id: Scalars['uuid'];
};


export type GameByIdSubscription = { games_by_pk?: Maybe<Pick<Games, 'id' | 'join_code'>> };

export type InsertPlayerForGameMutationVariables = {
  gameId: Scalars['uuid'];
  clientUuid: Scalars['uuid'];
};


export type InsertPlayerForGameMutation = { insert_players_one?: Maybe<Pick<Players, 'id'>> };

export type LookupPlayerForGameQueryVariables = {
  gameId: Scalars['uuid'];
  clientUuid: Scalars['uuid'];
};


export type LookupPlayerForGameQuery = { players: Array<Pick<Players, 'id'>> };

export type UpdateGameSettingsMutationVariables = {
  id: Scalars['uuid'];
  input: GamesSetInput;
};


export type UpdateGameSettingsMutation = { update_games_by_pk?: Maybe<Pick<Games, 'id' | 'join_code' | 'starting_letter' | 'seconds_per_turn' | 'num_entries_per_player'>> };

export type UpdatePlayerMutationVariables = {
  id: Scalars['uuid'];
  input: PlayersSetInput;
};


export type UpdatePlayerMutation = { update_players_by_pk?: Maybe<Pick<Players, 'id' | 'username' | 'team' | 'team_sequence'>> };

export type RemovePlayerMutationVariables = {
  id: Scalars['uuid'];
};


export type RemovePlayerMutation = { delete_players_by_pk?: Maybe<Pick<Players, 'id'>> };

export type DeleteRoundMutationVariables = {
  id: Scalars['uuid'];
  gameId: Scalars['uuid'];
  rounds: Array<RoundsInsertInput>;
};


export type DeleteRoundMutation = { delete_rounds_by_pk?: Maybe<Pick<Rounds, 'id'>>, insert_games_one?: Maybe<(
    Pick<Games, 'id'>
    & { rounds: Array<Pick<Rounds, 'id' | 'order_sequence'>> }
  )> };

export type UpdateAllRoundsMutationVariables = {
  gameId: Scalars['uuid'];
  rounds: Array<RoundsInsertInput>;
};


export type UpdateAllRoundsMutation = { insert_games_one?: Maybe<(
    Pick<Games, 'id'>
    & { rounds: Array<Pick<Rounds, 'id' | 'order_sequence'>> }
  )> };

export type AddRoundMutationVariables = {
  object: RoundsInsertInput;
};


export type AddRoundMutation = { insert_rounds_one?: Maybe<Pick<Rounds, 'id' | 'value' | 'order_sequence'>> };

export type CreateTurnMutationVariables = {
  gameId: Scalars['uuid'];
  playerId: Scalars['uuid'];
};


export type CreateTurnMutation = { insert_turns_one?: Maybe<Pick<Turns, 'id' | 'game_id' | 'player_id'>> };

export type StartTurnMutationVariables = {
  currentTurnId: Scalars['uuid'];
  startedAt: Scalars['timestamptz'];
};


export type StartTurnMutation = { update_turns_by_pk?: Maybe<Pick<Turns, 'id' | 'started_at'>> };

export type EndCurrentTurnAndStartNextTurnMutationVariables = {
  currentTurnId: Scalars['uuid'];
  completedCardIds: Scalars['jsonb'];
  endedAt: Scalars['timestamptz'];
  gameId: Scalars['uuid'];
  currentTurnScorings: Array<TurnScoringsInsertInput>;
  nextTurnplayerId: Scalars['uuid'];
  nextTurnSecondsPerTurnOverride?: Maybe<Scalars['Int']>;
};


export type EndCurrentTurnAndStartNextTurnMutation = { insert_turn_scorings?: Maybe<{ returning: Array<Pick<TurnScorings, 'id'>> }>, update_turns_by_pk?: Maybe<Pick<Turns, 'id' | 'ended_at' | 'completed_card_ids'>>, insert_turns_one?: Maybe<Pick<Turns, 'id' | 'game_id' | 'player_id' | 'seconds_per_turn_override'>> };

export type StartReviewMutationVariables = {
  currentTurnId: Scalars['uuid'];
  reviewStartedAt: Scalars['timestamptz'];
};


export type StartReviewMutation = { update_turns_by_pk?: Maybe<Pick<Turns, 'id' | 'review_started_at'>> };

export type UpdateAllPlayersMutationVariables = {
  gameId: Scalars['uuid'];
  players: Array<PlayersInsertInput>;
};


export type UpdateAllPlayersMutation = { insert_games_one?: Maybe<(
    Pick<Games, 'id'>
    & { players: Array<Pick<Players, 'id' | 'game_id' | 'team' | 'team_sequence'>> }
  )> };


export const CurrentPlayerDocument = gql`
    query CurrentPlayer($clientUuid: uuid!, $joinCode: String!) {
  players(where: {client_uuid: {_eq: $clientUuid}, game: {join_code: {_eq: $joinCode}}}) {
    id
    client_uuid
    username
    game {
      id
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
 *      clientUuid: // value for 'clientUuid'
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
    rounds(order_by: {order_sequence: asc}) {
      id
      value
    }
    cards {
      id
      word
      player_id
    }
    players {
      id
      username
      team
      team_sequence
    }
    turns(order_by: {sequential_id: asc}) {
      id
      player_id
      started_at
      completed_card_ids
      seconds_per_turn_override
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
export const UpdateGameStateDocument = gql`
    mutation UpdateGameState($id: uuid!, $state: game_state_enum!) {
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
export const StartGameDocument = gql`
    mutation StartGame {
  insert_games_one(object: {}) {
    id
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
 *   },
 * });
 */
export function useStartGameMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<StartGameMutation, StartGameMutationVariables>) {
        return ApolloReactHooks.useMutation<StartGameMutation, StartGameMutationVariables>(StartGameDocument, baseOptions);
      }
export type StartGameMutationHookResult = ReturnType<typeof useStartGameMutation>;
export type StartGameMutationResult = ApolloReactCommon.MutationResult<StartGameMutation>;
export type StartGameMutationOptions = ApolloReactCommon.BaseMutationOptions<StartGameMutation, StartGameMutationVariables>;
export const JoinGameDocument = gql`
    mutation JoinGame($gameId: String!, $clientUuid: String!) {
  joinGame(gameId: $gameId, clientUuid: $clientUuid) {
    id
    jwt_token
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
 *      clientUuid: // value for 'clientUuid'
 *   },
 * });
 */
export function useJoinGameMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<JoinGameMutation, JoinGameMutationVariables>) {
        return ApolloReactHooks.useMutation<JoinGameMutation, JoinGameMutationVariables>(JoinGameDocument, baseOptions);
      }
export type JoinGameMutationHookResult = ReturnType<typeof useJoinGameMutation>;
export type JoinGameMutationResult = ApolloReactCommon.MutationResult<JoinGameMutation>;
export type JoinGameMutationOptions = ApolloReactCommon.BaseMutationOptions<JoinGameMutation, JoinGameMutationVariables>;
export const BecomeHostDocument = gql`
    mutation BecomeHost($gameId: uuid!, $playerId: uuid!) {
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
export const GameByJoinCodeDocument = gql`
    query GameByJoinCode($joinCode: String!) {
  games(where: {join_code: {_eq: $joinCode}}) {
    id
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
    subscription GameById($id: uuid!) {
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
export const InsertPlayerForGameDocument = gql`
    mutation InsertPlayerForGame($gameId: uuid!, $clientUuid: uuid!) {
  insert_players_one(object: {game_id: $gameId, client_uuid: $clientUuid}) {
    id
  }
}
    `;
export type InsertPlayerForGameMutationFn = ApolloReactCommon.MutationFunction<InsertPlayerForGameMutation, InsertPlayerForGameMutationVariables>;

/**
 * __useInsertPlayerForGameMutation__
 *
 * To run a mutation, you first call `useInsertPlayerForGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPlayerForGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPlayerForGameMutation, { data, loading, error }] = useInsertPlayerForGameMutation({
 *   variables: {
 *      gameId: // value for 'gameId'
 *      clientUuid: // value for 'clientUuid'
 *   },
 * });
 */
export function useInsertPlayerForGameMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertPlayerForGameMutation, InsertPlayerForGameMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertPlayerForGameMutation, InsertPlayerForGameMutationVariables>(InsertPlayerForGameDocument, baseOptions);
      }
export type InsertPlayerForGameMutationHookResult = ReturnType<typeof useInsertPlayerForGameMutation>;
export type InsertPlayerForGameMutationResult = ApolloReactCommon.MutationResult<InsertPlayerForGameMutation>;
export type InsertPlayerForGameMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertPlayerForGameMutation, InsertPlayerForGameMutationVariables>;
export const LookupPlayerForGameDocument = gql`
    query LookupPlayerForGame($gameId: uuid!, $clientUuid: uuid!) {
  players(where: {game_id: {_eq: $gameId}, client_uuid: {_eq: $clientUuid}}) {
    id
  }
}
    `;

/**
 * __useLookupPlayerForGameQuery__
 *
 * To run a query within a React component, call `useLookupPlayerForGameQuery` and pass it any options that fit your needs.
 * When your component renders, `useLookupPlayerForGameQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLookupPlayerForGameQuery({
 *   variables: {
 *      gameId: // value for 'gameId'
 *      clientUuid: // value for 'clientUuid'
 *   },
 * });
 */
export function useLookupPlayerForGameQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LookupPlayerForGameQuery, LookupPlayerForGameQueryVariables>) {
        return ApolloReactHooks.useQuery<LookupPlayerForGameQuery, LookupPlayerForGameQueryVariables>(LookupPlayerForGameDocument, baseOptions);
      }
export function useLookupPlayerForGameLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LookupPlayerForGameQuery, LookupPlayerForGameQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LookupPlayerForGameQuery, LookupPlayerForGameQueryVariables>(LookupPlayerForGameDocument, baseOptions);
        }
export type LookupPlayerForGameQueryHookResult = ReturnType<typeof useLookupPlayerForGameQuery>;
export type LookupPlayerForGameLazyQueryHookResult = ReturnType<typeof useLookupPlayerForGameLazyQuery>;
export type LookupPlayerForGameQueryResult = ApolloReactCommon.QueryResult<LookupPlayerForGameQuery, LookupPlayerForGameQueryVariables>;
export const UpdateGameSettingsDocument = gql`
    mutation UpdateGameSettings($id: uuid!, $input: games_set_input!) {
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
    mutation UpdatePlayer($id: uuid!, $input: players_set_input!) {
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
export const RemovePlayerDocument = gql`
    mutation RemovePlayer($id: uuid!) {
  delete_players_by_pk(id: $id) {
    id
  }
}
    `;
export type RemovePlayerMutationFn = ApolloReactCommon.MutationFunction<RemovePlayerMutation, RemovePlayerMutationVariables>;

/**
 * __useRemovePlayerMutation__
 *
 * To run a mutation, you first call `useRemovePlayerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovePlayerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removePlayerMutation, { data, loading, error }] = useRemovePlayerMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemovePlayerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemovePlayerMutation, RemovePlayerMutationVariables>) {
        return ApolloReactHooks.useMutation<RemovePlayerMutation, RemovePlayerMutationVariables>(RemovePlayerDocument, baseOptions);
      }
export type RemovePlayerMutationHookResult = ReturnType<typeof useRemovePlayerMutation>;
export type RemovePlayerMutationResult = ApolloReactCommon.MutationResult<RemovePlayerMutation>;
export type RemovePlayerMutationOptions = ApolloReactCommon.BaseMutationOptions<RemovePlayerMutation, RemovePlayerMutationVariables>;
export const DeleteRoundDocument = gql`
    mutation DeleteRound($id: uuid!, $gameId: uuid!, $rounds: [rounds_insert_input!]!) {
  delete_rounds_by_pk(id: $id) {
    id
  }
  insert_games_one(object: {id: $gameId, rounds: {data: $rounds, on_conflict: {constraint: rounds_pkey, update_columns: [order_sequence]}}}, on_conflict: {constraint: games_pkey, update_columns: [id]}) {
    id
    rounds {
      id
      order_sequence
    }
  }
}
    `;
export type DeleteRoundMutationFn = ApolloReactCommon.MutationFunction<DeleteRoundMutation, DeleteRoundMutationVariables>;

/**
 * __useDeleteRoundMutation__
 *
 * To run a mutation, you first call `useDeleteRoundMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRoundMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRoundMutation, { data, loading, error }] = useDeleteRoundMutation({
 *   variables: {
 *      id: // value for 'id'
 *      gameId: // value for 'gameId'
 *      rounds: // value for 'rounds'
 *   },
 * });
 */
export function useDeleteRoundMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteRoundMutation, DeleteRoundMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteRoundMutation, DeleteRoundMutationVariables>(DeleteRoundDocument, baseOptions);
      }
export type DeleteRoundMutationHookResult = ReturnType<typeof useDeleteRoundMutation>;
export type DeleteRoundMutationResult = ApolloReactCommon.MutationResult<DeleteRoundMutation>;
export type DeleteRoundMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteRoundMutation, DeleteRoundMutationVariables>;
export const UpdateAllRoundsDocument = gql`
    mutation UpdateAllRounds($gameId: uuid!, $rounds: [rounds_insert_input!]!) {
  insert_games_one(object: {id: $gameId, rounds: {data: $rounds, on_conflict: {constraint: rounds_pkey, update_columns: [order_sequence]}}}, on_conflict: {constraint: games_pkey, update_columns: [id]}) {
    id
    rounds {
      id
      order_sequence
    }
  }
}
    `;
export type UpdateAllRoundsMutationFn = ApolloReactCommon.MutationFunction<UpdateAllRoundsMutation, UpdateAllRoundsMutationVariables>;

/**
 * __useUpdateAllRoundsMutation__
 *
 * To run a mutation, you first call `useUpdateAllRoundsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAllRoundsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAllRoundsMutation, { data, loading, error }] = useUpdateAllRoundsMutation({
 *   variables: {
 *      gameId: // value for 'gameId'
 *      rounds: // value for 'rounds'
 *   },
 * });
 */
export function useUpdateAllRoundsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAllRoundsMutation, UpdateAllRoundsMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateAllRoundsMutation, UpdateAllRoundsMutationVariables>(UpdateAllRoundsDocument, baseOptions);
      }
export type UpdateAllRoundsMutationHookResult = ReturnType<typeof useUpdateAllRoundsMutation>;
export type UpdateAllRoundsMutationResult = ApolloReactCommon.MutationResult<UpdateAllRoundsMutation>;
export type UpdateAllRoundsMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateAllRoundsMutation, UpdateAllRoundsMutationVariables>;
export const AddRoundDocument = gql`
    mutation AddRound($object: rounds_insert_input!) {
  insert_rounds_one(object: $object) {
    id
    value
    order_sequence
  }
}
    `;
export type AddRoundMutationFn = ApolloReactCommon.MutationFunction<AddRoundMutation, AddRoundMutationVariables>;

/**
 * __useAddRoundMutation__
 *
 * To run a mutation, you first call `useAddRoundMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddRoundMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addRoundMutation, { data, loading, error }] = useAddRoundMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useAddRoundMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddRoundMutation, AddRoundMutationVariables>) {
        return ApolloReactHooks.useMutation<AddRoundMutation, AddRoundMutationVariables>(AddRoundDocument, baseOptions);
      }
export type AddRoundMutationHookResult = ReturnType<typeof useAddRoundMutation>;
export type AddRoundMutationResult = ApolloReactCommon.MutationResult<AddRoundMutation>;
export type AddRoundMutationOptions = ApolloReactCommon.BaseMutationOptions<AddRoundMutation, AddRoundMutationVariables>;
export const CreateTurnDocument = gql`
    mutation CreateTurn($gameId: uuid!, $playerId: uuid!) {
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
    mutation StartTurn($currentTurnId: uuid!, $startedAt: timestamptz!) {
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
    mutation EndCurrentTurnAndStartNextTurn($currentTurnId: uuid!, $completedCardIds: jsonb!, $endedAt: timestamptz!, $gameId: uuid!, $currentTurnScorings: [turn_scorings_insert_input!]!, $nextTurnplayerId: uuid!, $nextTurnSecondsPerTurnOverride: Int) {
  insert_turn_scorings(objects: $currentTurnScorings) {
    returning {
      id
    }
  }
  update_turns_by_pk(pk_columns: {id: $currentTurnId}, _set: {ended_at: $endedAt, completed_card_ids: $completedCardIds}) {
    id
    ended_at
    completed_card_ids
  }
  insert_turns_one(object: {game_id: $gameId, player_id: $nextTurnplayerId, seconds_per_turn_override: $nextTurnSecondsPerTurnOverride}) {
    id
    game_id
    player_id
    seconds_per_turn_override
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
 *      currentTurnScorings: // value for 'currentTurnScorings'
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
export const StartReviewDocument = gql`
    mutation StartReview($currentTurnId: uuid!, $reviewStartedAt: timestamptz!) {
  update_turns_by_pk(pk_columns: {id: $currentTurnId}, _set: {review_started_at: $reviewStartedAt}) {
    id
    review_started_at
  }
}
    `;
export type StartReviewMutationFn = ApolloReactCommon.MutationFunction<StartReviewMutation, StartReviewMutationVariables>;

/**
 * __useStartReviewMutation__
 *
 * To run a mutation, you first call `useStartReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startReviewMutation, { data, loading, error }] = useStartReviewMutation({
 *   variables: {
 *      currentTurnId: // value for 'currentTurnId'
 *      reviewStartedAt: // value for 'reviewStartedAt'
 *   },
 * });
 */
export function useStartReviewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<StartReviewMutation, StartReviewMutationVariables>) {
        return ApolloReactHooks.useMutation<StartReviewMutation, StartReviewMutationVariables>(StartReviewDocument, baseOptions);
      }
export type StartReviewMutationHookResult = ReturnType<typeof useStartReviewMutation>;
export type StartReviewMutationResult = ApolloReactCommon.MutationResult<StartReviewMutation>;
export type StartReviewMutationOptions = ApolloReactCommon.BaseMutationOptions<StartReviewMutation, StartReviewMutationVariables>;
export const UpdateAllPlayersDocument = gql`
    mutation UpdateAllPlayers($gameId: uuid!, $players: [players_insert_input!]!) {
  insert_games_one(object: {id: $gameId, players: {data: $players, on_conflict: {constraint: players_pkey, update_columns: [team, team_sequence]}}}, on_conflict: {constraint: games_pkey, update_columns: [id]}) {
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