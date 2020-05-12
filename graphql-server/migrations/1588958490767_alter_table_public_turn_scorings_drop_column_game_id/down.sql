
ALTER TABLE "public"."turn_scorings" ADD COLUMN "game_id" uuid;
ALTER TABLE "public"."turn_scorings" ALTER COLUMN "game_id" DROP NOT NULL;
ALTER TABLE "public"."turn_scorings" ADD CONSTRAINT turn_scorings_game_id_fkey FOREIGN KEY (game_id) REFERENCES "public"."games" (id) ON DELETE restrict ON UPDATE restrict;