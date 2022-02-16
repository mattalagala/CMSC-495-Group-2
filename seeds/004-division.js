exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("division")
		.del()
		.then(function () {
			// Seed division entries
			return knex("division").insert([
				{
					division_id: 1,
					division_name: "AFC North",
					division_logo:
						"https://upload.wikimedia.org/wikipedia/commons/e/e6/American_Football_Conference_logo_old.svg",
				},
				{
					division_id: 2,
					division_name: "AFC East",
					division_logo:
						"https://upload.wikimedia.org/wikipedia/commons/e/e6/American_Football_Conference_logo_old.svg",
				},
				{
					division_id: 3,
					division_name: "AFC South",
					division_logo:
						"https://upload.wikimedia.org/wikipedia/commons/e/e6/American_Football_Conference_logo_old.svg",
				},
				{
					division_id: 4,
					division_name: "AFC West",
					division_logo:
						"https://upload.wikimedia.org/wikipedia/commons/e/e6/American_Football_Conference_logo_old.svg",
				},
				{
					division_id: 5,
					division_name: "NFC North",
					division_logo:
						"https://upload.wikimedia.org/wikipedia/commons/e/e6/American_Football_Conference_logo_old.svg",
				},
				{
					division_id: 6,
					division_name: "NFC East",
					division_logo:
						"https://upload.wikimedia.org/wikipedia/commons/e/e6/American_Football_Conference_logo_old.svg",
				},
				{
					division_id: 7,
					division_name: "NFC South",
					division_logo:
						"https://upload.wikimedia.org/wikipedia/commons/e/e6/American_Football_Conference_logo_old.svg",
				},
				{
					division_id: 8,
					division_name: "NFC West",
					division_logo:
						"https://upload.wikimedia.org/wikipedia/commons/e/e6/American_Football_Conference_logo_old.svg",
				},
			]);
		});
};
