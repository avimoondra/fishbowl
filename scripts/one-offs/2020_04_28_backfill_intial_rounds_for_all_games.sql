DO $$
DECLARE 
    t_row games%rowtype;
BEGIN
    FOR t_row in (SELECT DISTINCT games.id FROM games LEFT JOIN rounds ON games.id = rounds.game_id WHERE rounds.game_id IS NULL) LOOP
        INSERT INTO rounds (game_id, value, order_sequence) VALUES (t_row.id, 'taboo', 0), (t_row.id, 'charades', 1), (t_row.id, 'password', 2);
    END LOOP;
END $$;