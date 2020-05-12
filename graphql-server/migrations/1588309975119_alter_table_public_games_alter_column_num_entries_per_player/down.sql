
ALTER TABLE "public"."games" ALTER COLUMN "num_entries_per_player" TYPE integer;
ALTER TABLE ONLY "public"."games" ALTER COLUMN "num_entries_per_player" DROP DEFAULT;