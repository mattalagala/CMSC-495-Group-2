exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("divisions")
		.del()
		.then(function () {
			// Seed division entries
			return knex("divisions").insert([
				{ division_id: 1, division_name: "AFC North" },
				{ division_id: 2, division_name: "AFC East" },
				{ division_id: 3, division_name: "AFC South" },
				{ division_id: 4, division_name: "AFC West" },
				{ division_id: 5, division_name: "NFC North" },
				{ division_id: 6, division_name: "NFC East" },
				{ division_id: 7, division_name: "NFC South" },
				{ division_id: 8, division_name: "NFC West" },
			]);
		});
};
