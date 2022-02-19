const createPlayersTable = `
create table players (
"player_id" serial primary key,
"player_name" text,
"position" text,
"team_id" integer,
"pass_completions" text,
"pass_incomplete" text,
"pass_yards" text,
"pass_touch_downs" text,
"pass_interceptions" text,
"pass_pick_six" text,
"pass_sacks" text,
"pass_first_downs" text,
"rush_attempts" text,
"rush_yards" text,
"rush_touch_downs" text,
"rush_first_downs" text,
"receiving_targetted" text,
"receiving_catches" text,
"receiving_yards" text,
"receiving_touch_downs" text,
"receiving_first_downs" text,
"return_yards" text,
"return_touch_downs" text,
"misc_two_points" text,
"fumble_total" text,
"fumble_lost" text,
ctime timestamptz,
mtime timestamptz default current_timestamp
)
`;
const dropPlayersTable = `
drop table players;
`;

exports.up = function (knex) {
	return knex.raw(createPlayersTable);
};

exports.down = function (knex) {
	return knex.raw(dropPlayersTable);
};
