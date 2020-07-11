DROP TRIGGER IF EXISTS "set_public_turns_updated_at" ON "public"."turns";
ALTER TABLE "public"."turns" DROP COLUMN "updated_at";
