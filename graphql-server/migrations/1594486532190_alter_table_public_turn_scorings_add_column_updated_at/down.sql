DROP TRIGGER IF EXISTS "set_public_turn_scorings_updated_at" ON "public"."turn_scorings";
ALTER TABLE "public"."turn_scorings" DROP COLUMN "updated_at";
