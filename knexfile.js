// Update with your config settings.

module.exports = {
	development: {
		client: "pg",
		connection: {
			database: "p2db",
			user: "p2vmuser",
			password: "password",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
		},
	},
};
