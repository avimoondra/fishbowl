
alter table "public"."games"
           add constraint "games_state_fkey"
           foreign key ("state")
           references "public"."game_state"
           ("value") on update restrict on delete restrict;