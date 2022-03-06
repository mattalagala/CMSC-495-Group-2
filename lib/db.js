const knexLib = require("knex");
const dbCfg = require("../knexfile");
const { uuid } = require("./utils");

// this will hold our database connection
let conn = null;

// this should return a promise
function connect() {
	return new Promise(function (resolve, reject) {
		conn = knexLib(dbCfg.development);
		conn
			.raw(`SELECT 1 + 1 AS test`)
			.then((result) => {
				if (result.rows.length === 1 && result.rows[0].test === 2) {
					console.log("Database connection established 👍");
					resolve();
				} else {
					reject("Database was unable to do 1 + 1 🤷");
				}
			})
			.catch((err) => {
				reject(err);
			});
	});
}

//Category Query

const getCategoryListQuery = `SELECT * FROM division`;
function getCategoryList() {
	return conn.raw(getCategoryListQuery).then((result) => {
		return result.rows;
	});
}

const getProductsListQuery = `SELECT * FROM teams`;

function getProductsList() {
	return conn.raw(getProductsListQuery).then((result) => {
		return result.rows;
	});
}

const getProductsByCategoryNumberQuery = `SELECT * FROM teams WHERE division_id = ?`;

function getProducts(category_id) {
	return new Promise(function (resolve, reject) {
		console.log("category id:", category_id);
		conn
			.raw(getProductsByCategoryNumberQuery, [category_id])
			.then((result) => {
				resolve(result.rows);
				console.log("is it getting here");
			})
			.catch(() => {
				reject("getProduct query failed");
			});
	});
}

const getCategoryQuery = `SELECT * FROM division WHERE division_id = ?`;

function getCategory(category_id) {
	return new Promise(function (resolve, reject) {
		conn
			.raw(getCategoryQuery, [category_id])
			.then((result) => {
				resolve(result.rows);
				console.log(result.rows, "THIS IS THE CATEGORY ID");
			})
			.catch(() => {
				reject("getCategory query failed");
			});
	});
}

const getPlayerQuery = `SELECT * FROM players JOIN teams USING (team_id) JOIN division USING (division_id) WHERE team_id = ?`;

function getPlayer(team_id) {
	console.log(team_id);
	return new Promise(function (resolve, reject) {
		conn
			.raw(getPlayerQuery, [team_id])
			.then((result) => {
				resolve(result.rows);
			})
			.catch((err) => {
				reject("getPlayer query failed" + err);
			});
	});
}

const getPlayerDataQuery = `SELECT * FROM players JOIN teams USING (team_id) JOIN division USING (division_id) WHERE player_id = ?`;

function getPlayerData(player_id) {
	console.log(player_id);
	return new Promise(function (resolve, reject) {
		conn
			.raw(getPlayerDataQuery, [player_id])
			.then((result) => {
				resolve(result.rows);
			})
			.catch((err) => {
				reject("getPlayerData query failed" + err);
			});
	});
}

module.exports = {
	connect: connect,
	getCategoryList: getCategoryList,
	getProductsList: getProductsList,
	getProducts: getProducts,
	getCategory: getCategory,
	getPlayer: getPlayer,
	getPlayerData: getPlayerData,
};
