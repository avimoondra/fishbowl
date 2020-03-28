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
};

export type Games = {
  id: Scalars['Int'];
  join_code?: Maybe<Scalars['String']>;
  num_entries_per_player?: Maybe<Scalars['Int']>;
  starting_letter?: Maybe<Scalars['String']>;
  time_limit_per_turn?: Maybe<Scalars['Int']>;
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
  id?: Maybe<Scalars['Float']>;
  num_entries_per_player?: Maybe<Scalars['Float']>;
  time_limit_per_turn?: Maybe<Scalars['Float']>;
};

export type GamesAvgOrderBy = {
  id?: Maybe<OrderBy>;
  num_entries_per_player?: Maybe<OrderBy>;
  time_limit_per_turn?: Maybe<OrderBy>;
};

export type GamesBoolExp = {
  _and?: Maybe<Array<Maybe<GamesBoolExp>>>;
  _not?: Maybe<GamesBoolExp>;
  _or?: Maybe<Array<Maybe<GamesBoolExp>>>;
  id?: Maybe<IntComparisonExp>;
  join_code?: Maybe<StringComparisonExp>;
  num_entries_per_player?: Maybe<IntComparisonExp>;
  starting_letter?: Maybe<StringComparisonExp>;
  time_limit_per_turn?: Maybe<IntComparisonExp>;
};

export enum GamesConstraint {
  GamesJoinCodeKey = 'games_join_code_key',
  GamesPkey = 'games_pkey'
}

export type GamesIncInput = {
  id?: Maybe<Scalars['Int']>;
  num_entries_per_player?: Maybe<Scalars['Int']>;
  time_limit_per_turn?: Maybe<Scalars['Int']>;
};

export type GamesInsertInput = {
  id?: Maybe<Scalars['Int']>;
  join_code?: Maybe<Scalars['String']>;
  num_entries_per_player?: Maybe<Scalars['Int']>;
  starting_letter?: Maybe<Scalars['String']>;
  time_limit_per_turn?: Maybe<Scalars['Int']>;
};

export type GamesMaxFields = {
  id?: Maybe<Scalars['Int']>;
  join_code?: Maybe<Scalars['String']>;
  num_entries_per_player?: Maybe<Scalars['Int']>;
  starting_letter?: Maybe<Scalars['String']>;
  time_limit_per_turn?: Maybe<Scalars['Int']>;
};

export type GamesMaxOrderBy = {
  id?: Maybe<OrderBy>;
  join_code?: Maybe<OrderBy>;
  num_entries_per_player?: Maybe<OrderBy>;
  starting_letter?: Maybe<OrderBy>;
  time_limit_per_turn?: Maybe<OrderBy>;
};

export type GamesMinFields = {
  id?: Maybe<Scalars['Int']>;
  join_code?: Maybe<Scalars['String']>;
  num_entries_per_player?: Maybe<Scalars['Int']>;
  starting_letter?: Maybe<Scalars['String']>;
  time_limit_per_turn?: Maybe<Scalars['Int']>;
};

export type GamesMinOrderBy = {
  id?: Maybe<OrderBy>;
  join_code?: Maybe<OrderBy>;
  num_entries_per_player?: Maybe<OrderBy>;
  starting_letter?: Maybe<OrderBy>;
  time_limit_per_turn?: Maybe<OrderBy>;
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
  id?: Maybe<OrderBy>;
  join_code?: Maybe<OrderBy>;
  num_entries_per_player?: Maybe<OrderBy>;
  starting_letter?: Maybe<OrderBy>;
  time_limit_per_turn?: Maybe<OrderBy>;
};

export type GamesPkColumnsInput = {
  id: Scalars['Int'];
};

export enum GamesSelectColumn {
  Id = 'id',
  JoinCode = 'join_code',
  NumEntriesPerPlayer = 'num_entries_per_player',
  StartingLetter = 'starting_letter',
  TimeLimitPerTurn = 'time_limit_per_turn'
}

export type GamesSetInput = {
  id?: Maybe<Scalars['Int']>;
  join_code?: Maybe<Scalars['String']>;
  num_entries_per_player?: Maybe<Scalars['Int']>;
  starting_letter?: Maybe<Scalars['String']>;
  time_limit_per_turn?: Maybe<Scalars['Int']>;
};

export type GamesStddevFields = {
  id?: Maybe<Scalars['Float']>;
  num_entries_per_player?: Maybe<Scalars['Float']>;
  time_limit_per_turn?: Maybe<Scalars['Float']>;
};

export type GamesStddevOrderBy = {
  id?: Maybe<OrderBy>;
  num_entries_per_player?: Maybe<OrderBy>;
  time_limit_per_turn?: Maybe<OrderBy>;
};

export type GamesStddevPopFields = {
  id?: Maybe<Scalars['Float']>;
  num_entries_per_player?: Maybe<Scalars['Float']>;
  time_limit_per_turn?: Maybe<Scalars['Float']>;
};

export type GamesStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
  num_entries_per_player?: Maybe<OrderBy>;
  time_limit_per_turn?: Maybe<OrderBy>;
};

export type GamesStddevSampFields = {
  id?: Maybe<Scalars['Float']>;
  num_entries_per_player?: Maybe<Scalars['Float']>;
  time_limit_per_turn?: Maybe<Scalars['Float']>;
};

export type GamesStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
  num_entries_per_player?: Maybe<OrderBy>;
  time_limit_per_turn?: Maybe<OrderBy>;
};

export type GamesSumFields = {
  id?: Maybe<Scalars['Int']>;
  num_entries_per_player?: Maybe<Scalars['Int']>;
  time_limit_per_turn?: Maybe<Scalars['Int']>;
};

export type GamesSumOrderBy = {
  id?: Maybe<OrderBy>;
  num_entries_per_player?: Maybe<OrderBy>;
  time_limit_per_turn?: Maybe<OrderBy>;
};

export enum GamesUpdateColumn {
  Id = 'id',
  JoinCode = 'join_code',
  NumEntriesPerPlayer = 'num_entries_per_player',
  StartingLetter = 'starting_letter',
  TimeLimitPerTurn = 'time_limit_per_turn'
}

export type GamesVarPopFields = {
  id?: Maybe<Scalars['Float']>;
  num_entries_per_player?: Maybe<Scalars['Float']>;
  time_limit_per_turn?: Maybe<Scalars['Float']>;
};

export type GamesVarPopOrderBy = {
  id?: Maybe<OrderBy>;
  num_entries_per_player?: Maybe<OrderBy>;
  time_limit_per_turn?: Maybe<OrderBy>;
};

export type GamesVarSampFields = {
  id?: Maybe<Scalars['Float']>;
  num_entries_per_player?: Maybe<Scalars['Float']>;
  time_limit_per_turn?: Maybe<Scalars['Float']>;
};

export type GamesVarSampOrderBy = {
  id?: Maybe<OrderBy>;
  num_entries_per_player?: Maybe<OrderBy>;
  time_limit_per_turn?: Maybe<OrderBy>;
};

export type GamesVarianceFields = {
  id?: Maybe<Scalars['Float']>;
  num_entries_per_player?: Maybe<Scalars['Float']>;
  time_limit_per_turn?: Maybe<Scalars['Float']>;
};

export type GamesVarianceOrderBy = {
  id?: Maybe<OrderBy>;
  num_entries_per_player?: Maybe<OrderBy>;
  time_limit_per_turn?: Maybe<OrderBy>;
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
  insert_games?: Maybe<GamesMutationResponse>;
  insert_games_one?: Maybe<Games>;
  update_games?: Maybe<GamesMutationResponse>;
  update_games_by_pk?: Maybe<Games>;
};


export type MutationRootDeleteGamesArgs = {
  where: GamesBoolExp;
};


export type MutationRootDeleteGamesByPkArgs = {
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

export enum OrderBy {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

export type QueryRoot = {
  games: Array<Games>;
  games_aggregate: GamesAggregate;
  games_by_pk?: Maybe<Games>;
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

export type StartNewGameMutationVariables = {};


export type StartNewGameMutation = { insert_games_one?: Maybe<Pick<Games, 'id'>> };

export type GameSubscriptionVariables = {
  id: Scalars['Int'];
};


export type GameSubscription = { games_by_pk?: Maybe<Pick<Games, 'id' | 'join_code'>> };


export const StartNewGameDocument = gql`
    mutation StartNewGame {
  insert_games_one(object: {}) {
    id
  }
}
    `;
export type StartNewGameMutationFn = ApolloReactCommon.MutationFunction<StartNewGameMutation, StartNewGameMutationVariables>;

/**
 * __useStartNewGameMutation__
 *
 * To run a mutation, you first call `useStartNewGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartNewGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startNewGameMutation, { data, loading, error }] = useStartNewGameMutation({
 *   variables: {
 *   },
 * });
 */
export function useStartNewGameMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<StartNewGameMutation, StartNewGameMutationVariables>) {
        return ApolloReactHooks.useMutation<StartNewGameMutation, StartNewGameMutationVariables>(StartNewGameDocument, baseOptions);
      }
export type StartNewGameMutationHookResult = ReturnType<typeof useStartNewGameMutation>;
export type StartNewGameMutationResult = ApolloReactCommon.MutationResult<StartNewGameMutation>;
export type StartNewGameMutationOptions = ApolloReactCommon.BaseMutationOptions<StartNewGameMutation, StartNewGameMutationVariables>;
export const GameDocument = gql`
    subscription Game($id: Int!) {
  games_by_pk(id: $id) {
    id
    join_code
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