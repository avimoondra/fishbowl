DROP TRIGGER IF EXISTS "set_public_rounds_updated_at" ON "public"."rounds";
ALTER TABLE "public"."rounds" DROP COLUMN "updated_at";
