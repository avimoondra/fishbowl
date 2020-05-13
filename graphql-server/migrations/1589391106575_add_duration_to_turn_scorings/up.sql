CREATE OR REPLACE FUNCTION public.timestamp_difference(started_at timestamp with time zone, ended_at timestamp with time zone)
 RETURNS double precision
 LANGUAGE plpgsql
 IMMUTABLE
AS $function$
    BEGIN
        IF ended_at IS NOT NULL AND started_at IS NOT NULL 
        THEN 
            RETURN (extract('epoch' from ended_at)  - extract('epoch' from started_at));
        ELSE 
            RETURN NULL;
        END IF;
    END;
$function$;


ALTER TABLE turn_scorings 
ADD COLUMN duration FLOAT   
GENERATED ALWAYS AS (timestamp_difference(started_at, ended_at))
STORED;
