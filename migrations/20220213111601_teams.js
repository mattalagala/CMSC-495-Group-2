const createTeamsTable = `
create table teams (
"team_id" serial primary key,
"team_name" text,
ctime timestamptz,
mtime timestamptz default current_timestamp
)
`;
const dropTeamsTable = `
drop table teams;
`;

exports.up = function (knex) {
	return knex.raw(createTeamsTable);
};

exports.down = function (knex) {
	return knex.raw(dropTeamsTable);
};
