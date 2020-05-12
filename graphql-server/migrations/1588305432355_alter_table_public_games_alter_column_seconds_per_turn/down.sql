
ALTER TABLE "public"."games" ALTER COLUMN "seconds_per_turn" TYPE integer;
ALTER TABLE ONLY "public"."games" ALTER COLUMN "seconds_per_turn" DROP DEFAULT;