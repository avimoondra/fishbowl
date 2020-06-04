CREATE OR REPLACE VIEW "public"."server_time" AS
    SELECT now() as now;
