
alter table "public"."turns"
           add constraint "turns_round_id_fkey"
           foreign key ("round_id")
           references "public"."rounds"
           ("id") on update restrict on delete restrict;