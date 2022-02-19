const createDivisionTable = `
create table division (
"division_id" serial primary key,
"division_name" text,
"division_logo" text,
ctime timestamptz,
mtime timestamptz default current_timestamp
)
`;
const dropDivisionTable = `
drop table division
`;

exports.up = function (knex) {
	return knex.raw(createDivisionTable);
};

exports.down = function (knex) {
	return knex.raw(dropDivisionTable);
};
