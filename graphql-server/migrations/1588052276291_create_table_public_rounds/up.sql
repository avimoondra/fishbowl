
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."rounds"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "game_id" uuid NOT NULL, "value" text NOT NULL, "order_sequence" integer NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("game_id") REFERENCES "public"."games"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));