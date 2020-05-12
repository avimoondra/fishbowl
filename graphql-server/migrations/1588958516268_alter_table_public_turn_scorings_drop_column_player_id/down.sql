
ALTER TABLE "public"."turn_scorings" ADD COLUMN "player_id" uuid;
ALTER TABLE "public"."turn_scorings" ALTER COLUMN "player_id" DROP NOT NULL;
ALTER TABLE "public"."turn_scorings" ADD CONSTRAINT turn_scorings_player_id_fkey FOREIGN KEY (player_id) REFERENCES "public"."players" (id) ON DELETE restrict ON UPDATE restrict;