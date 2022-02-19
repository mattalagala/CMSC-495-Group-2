exports.up = function (knex, Promise) {
	return knex.schema.table("division", function (t) {
		t.text("division_logo").nullable();
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.table("division", function (t) {
		t.dropColumn("division_logo");
	});
};
