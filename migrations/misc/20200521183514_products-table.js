const createProductsTable = `
create table products (
"products_id" serial primary key,
"category_id" uuid REFERENCES category (category_id),
"products_manufacturer" text,
"products_model" text,
"products_color" text,
"products_price" text,
"products_picture" text,
"product_summary" text,
"product_description" text,
ctime timestamptz,
mtime timestamptz default current_timestamp
)
`
const dropProductsTable = `
drop table Products;
`

exports.up = function(knex) {
return knex.raw(createProductsTable)
};

exports.down = function(knex) {
return knex.raw(dropProductsTable)
  
};
      