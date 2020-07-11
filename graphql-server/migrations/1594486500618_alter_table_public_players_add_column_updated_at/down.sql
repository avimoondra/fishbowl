DROP TRIGGER IF EXISTS "set_public_players_updated_at" ON "public"."players";
ALTER TABLE "public"."players" DROP COLUMN "updated_at";
