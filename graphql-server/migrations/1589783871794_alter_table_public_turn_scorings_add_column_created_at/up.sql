ALTER TABLE "public"."turn_scorings" ADD COLUMN "created_at" timestamptz NOT NULL DEFAULT now();
