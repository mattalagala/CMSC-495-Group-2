const createTeamsTable = `
create table teams (
"team_id" serial primary key,
"division_id" integer,
"team_name" text,
"wins" integer,
"losses" integer,
"ties" integer,
"division_rank" integer,
"league_rank" integer,
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
	return knex.raw(createTeamsTable);
};
