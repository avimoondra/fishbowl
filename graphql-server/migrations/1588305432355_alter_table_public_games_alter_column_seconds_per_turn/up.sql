
ALTER TABLE "public"."games" ALTER COLUMN "seconds_per_turn" TYPE int4;
ALTER TABLE ONLY "public"."games" ALTER COLUMN "seconds_per_turn" SET DEFAULT 60;