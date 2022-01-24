const createSupplierTable = `
create table supplier (
"supplier_id" serial primary key,
"company_name" text,
"company_logo" text,
ctime timestamptz,
mtime timestamptz default current_timestamp
)
`
const dropSupplierTable = `
drop table supplier;
`

exports.up = function(knex) {
return knex.raw(createSupplierTable)
};

exports.down = function(knex) {
return knex.raw(dropSupplierTable)
  
};
       