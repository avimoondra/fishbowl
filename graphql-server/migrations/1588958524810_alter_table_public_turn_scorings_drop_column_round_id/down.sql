
ALTER TABLE "public"."turn_scorings" ADD COLUMN "round_id" uuid;
ALTER TABLE "public"."turn_scorings" ALTER COLUMN "round_id" DROP NOT NULL;
ALTER TABLE "public"."turn_scorings" ADD CONSTRAINT turn_scorings_round_id_fkey FOREIGN KEY (round_id) REFERENCES "public"."rounds" (id) ON DELETE restrict ON UPDATE restrict;