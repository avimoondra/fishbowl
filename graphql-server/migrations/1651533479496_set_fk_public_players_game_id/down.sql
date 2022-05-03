alter table "public"."players" drop constraint "players_game_id_fkey",
          add constraint "players_game_id_fkey"
          foreign key ("game_id")
          references "public"."games"
          ("id")
          on update restrict
          on delete restrict;
