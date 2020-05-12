
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."games"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "join_code" text NOT NULL, "state" text NOT NULL DEFAULT 'lobby', "host_id" uuid, "starting_letter" text, "seconds_per_turn" integer, "num_entries_per_player" integer, "created_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , UNIQUE ("join_code"), UNIQUE ("id"));