
ALTER TABLE "public"."cards" ALTER COLUMN "created_at" TYPE timestamptz;
ALTER TABLE ONLY "public"."cards" ALTER COLUMN "created_at" SET DEFAULT now();