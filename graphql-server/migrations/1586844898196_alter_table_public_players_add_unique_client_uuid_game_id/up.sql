
alter table "public"."players" add constraint "players_client_uuid_game_id_key" unique ("client_uuid", "game_id");