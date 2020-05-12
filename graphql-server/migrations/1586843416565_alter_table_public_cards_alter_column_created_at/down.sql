
ALTER TABLE "public"."cards" ALTER COLUMN "created_at" TYPE timestamp with time zone;
ALTER TABLE ONLY "public"."cards" ALTER COLUMN "created_at" DROP DEFAULT;