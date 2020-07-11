DROP TRIGGER IF EXISTS "set_public_cards_updated_at" ON "public"."cards";
ALTER TABLE "public"."cards" DROP COLUMN "updated_at";
