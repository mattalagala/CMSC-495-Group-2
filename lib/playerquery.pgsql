SELECT * FROM players JOIN teams USING (player_id) JOIN division USING (division_id) WHERE player_id = 36;