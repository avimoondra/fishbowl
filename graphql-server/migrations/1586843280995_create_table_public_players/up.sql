
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."players"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "client_uuid" uuid, "game_id" uuid NOT NULL, "username" text, "team" text, "team_sequence" integer, "created_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("game_id") REFERENCES "public"."games"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));