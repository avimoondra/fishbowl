DROP TRIGGER IF EXISTS "set_public_games_updated_at" ON "public"."games";
ALTER TABLE "public"."games" DROP COLUMN "updated_at";
