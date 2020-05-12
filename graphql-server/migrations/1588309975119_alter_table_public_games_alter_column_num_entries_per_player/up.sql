
ALTER TABLE "public"."games" ALTER COLUMN "num_entries_per_player" TYPE int4;
ALTER TABLE ONLY "public"."games" ALTER COLUMN "num_entries_per_player" SET DEFAULT 6;