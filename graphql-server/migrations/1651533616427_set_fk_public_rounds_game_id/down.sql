alter table "public"."rounds" drop constraint "rounds_game_id_fkey",
          add constraint "rounds_game_id_fkey"
          foreign key ("game_id")
          references "public"."games"
          ("id")
          on update restrict
          on delete restrict;
