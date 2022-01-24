// Update with your config settings.

module.exports = {
	development: {
		client: "pg",
		connection: {
			host: "40.124.9.20",
			database: "cmsc495db",
			user: "postgres",
			password: "",
			charset: "utf8",
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
