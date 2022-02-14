// Update with your config settings.

module.exports = {
	development: {
		client: "pg",
		connection: {
			database: "postgres",
			user: "postgres",
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
