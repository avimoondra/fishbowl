alter table "public"."games"
           add constraint "games_card_play_style_fkey"
           foreign key ("card_play_style")
           references "public"."game_card_play_style"
           ("value") on update restrict on delete restrict;
