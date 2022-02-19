const createPlayersTable = `
create table players (
"player_id" serial primary key,
"player_name" text,
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
