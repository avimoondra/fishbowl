
alter table "public"."games"
           add constraint "games_host_id_fkey"
           foreign key ("host_id")
           references "public"."players"
           ("id") on update restrict on delete restrict;