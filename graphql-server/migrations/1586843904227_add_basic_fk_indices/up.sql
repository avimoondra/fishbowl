
CREATE INDEX cards_game_player_idx ON cards (game_id, player_id);
CREATE UNIQUE INDEX games_join_code_idx ON games (join_code);
CREATE INDEX players_uuid_idx ON players (client_uuid);
CREATE INDEX players_game_idx ON players (game_id);
CREATE INDEX turns_game_idx ON turns (game_id);