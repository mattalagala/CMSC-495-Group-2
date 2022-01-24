const createCategoryTable = `
create table category (
"category_id" uuid primary key,
"category_name" text,
"category_description" text,
"category_url" text,
"category_team_name" text,
"category_git" text,
"category_cohort" text,
"category_languages" text,
"category_picture" text,
"category_picture2" text,
"category_picture3" text,
"category_picture4" text,
"category_picture5" text,
"category_picture6" text,
"category_picture7" text,
"category_picture8" text,
"category_javascript" text,
"category_react" text,
"category_html" text,
"category_css" text,
"category_python" text,
"category_node" text,
"category_express" text,
"category_json" text,
"category_rest" text,
"category_sql" text,
"category_cloud" text,
"category_memberone" text,
"category_oneemail" text,
"category_onegit" text,
"category_onelinkedin" text,
"category_oneportfolio" text,
"category_onetwitter" text,
"category_onepicture" text,
ctime timestamptz,
mtime timestamptz default current_timestamp
)
`;
const dropCategoryTable = `
drop table Category;
`;

exports.up = function (knex) {
  return knex.raw(createCategoryTable);
};

exports.down = function (knex) {
  return knex.raw(dropCategoryTable);
};

//updated full functionality for Project Vault 