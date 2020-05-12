
ALTER TABLE "public"."turn_scorings" ADD COLUMN "skipped" bool;
ALTER TABLE "public"."turn_scorings" ALTER COLUMN "skipped" DROP NOT NULL;