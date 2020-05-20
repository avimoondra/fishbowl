alter table "public"."turn_scorings" add constraint "turn_scorings_turn_id_card_id_key" unique ("turn_id", "card_id");
