
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."cards"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "game_id" uuid NOT NULL, "player_id" uuid NOT NULL, "word" text NOT NULL, "created_at" timestamptz NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("game_id") REFERENCES "public"."games"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("player_id") REFERENCES "public"."players"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));