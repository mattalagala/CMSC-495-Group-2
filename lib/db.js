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
//::Begin:: SearchBox queries
const joinTablesQuery = `SELECT * FROM division JOIN team ON division.division_id = team.division_id JOIN player on team.team_id = player,team_id`;
const whereClauseQuery = 'WHERE team.team_name = ? OR player.player_name = ? OR division.division_name = ?'
function getSearchResults(searchString) {
	return new Promise(function (resolve, reject) {
		conn
			.raw(joinTablesQuery + whereClauseQuery, [searchString])
			.then((result) => {
				resolve(result.rows);
			})
			.catch(() => {
				reject("searchBar query failed");
			});
	});
}

//::End:: SearchBox queries

//::BEGIN:: Division Queries
const getDivisionListQuery = `SELECT * FROM division`;
function getDivisionList() {
	return conn.raw(getDivisionListQuery).then((result) => {
		return result.rows;
	});
}

const getDivisionByIdQuery = `SELECT * FROM division WHERE division_id = ?`;

function getDivisionById(division_id) {
	return new Promise(function (resolve, reject) {
		conn
			.raw(getDivisionByIdQuery, [division_id])
			.then((result) => {
				resolve(result.rows);
			})
			.catch(() => {
				reject("getDivisionByIdQuery query failed");
			});
	});
}
//::END:: Division Queries


//::BEGIN:: Teams Queries
const getTeamListQuery = `SELECT * FROM teams`;

function getTeamsList() {
	return conn.raw(getTeamListQuery).then((result) => {
		return result.rows;
	});
}

const getTeamByIdQuery = `SELECT * FROM team WHERE team_id = ?`;

function getTeamById(team_id) {
	return new Promise(function (resolve, reject) {
		conn
			.raw(getTeamByIdQuery, [team_id])
			.then((result) => {
				resolve(result.rows);
			})
			.catch(() => {
				reject("getTeamByIdQuery query failed");
			});
	});
}

const getTeamByDivisionQuery = `SEECT * FROM team WHERE division_id = ?`;

function getTeamByDivision(division_id) {
	return new Promise(function (resolve, reject) {
		conn
			.raw(getTeamByDivisionQuery, [division_id])
			.then((result) => {
				resolve(result.rows);
			})
			.catch(() => {
				reject("getTeamByDivisionQuery query failed");
			});
	});
}
//::End:: Teams Queries

//::BEGIN:: Players Queries
const getPlayerListQuery = `SELECT * FROM player`;

function getPlayerList() {
	return conn.raw(getPlayerListQuery).then((result) => {
		return result.rows;
	});
}

const getPlayersByIdQuery = `SELECT * FROM players WHERE player_id = ?`;

function getPlayersById(player_id) {
	return new Promise(function (resolve, reject) {
		conn
			.raw(getPlayersByIdQuery, [player_id])
			.then((result) => {
				resolve(result.rows);
			})
			.catch(() => {
				reject("getPlayersById query failed");
			});
	});
}
//::End:: Players Queries



//TODO: We can remove this correct?

// const addProjectQuery = `
//   INSERT INTO category (category_id, category_name, category_description, category_url, category_team_name, category_git, category_cohort, category_languages, category_picture, category_picture2, category_picture3, category_picture4, category_picture5, category_picture6, category_picture7, category_picture8, category_javascript, category_react, category_html, category_css, category_python, category_node, category_express, category_json, category_rest, category_sql, category_cloud, category_memberone, category_oneemail, category_onegit, category_onelinkedin, category_oneportfolio, category_onetwitter, category_onepicture)
//   VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
//   RETURNING *;
//   `;

// function createProject(
// 	newProjectName,
// 	newProjectDescription,
// 	projectURL,
// 	newTeamName,
// 	projectGit,
// 	projectCohort,
// 	languagesUsed,
// 	projectImage1,
// 	projectImage2,
// 	projectImage3,
// 	projectImage4,
// 	projectImage5,
// 	projectImage6,
// 	projectImage7,
// 	projectImage8,
// 	langJavascript,
// 	langReact,
// 	langHTML,
// 	langCSS,
// 	langPython,
// 	langNode,
// 	langExpress,
// 	langJSON,
// 	langREST,
// 	langSQL,
// 	langCloud,
// 	memberOne,
// 	oneEmail,
// 	oneGit,
// 	oneLinkedin,
// 	onePortfolio,
// 	oneTwitter,
// 	onePicture
// ) {
// 	return new Promise(function (resolve, reject) {
// 		conn
// 			.raw(addProjectQuery, [
// 				uuid(),
// 				newProjectName,
// 				newProjectDescription,
// 				projectURL,
// 				newTeamName,
// 				projectGit,
// 				projectCohort,
// 				languagesUsed,
// 				projectImage1,
// 				projectImage2,
// 				projectImage3,
// 				projectImage4,
// 				projectImage5,
// 				projectImage6,
// 				projectImage7,
// 				projectImage8,
// 				langJavascript,
// 				langReact,
// 				langHTML,
// 				langCSS,
// 				langPython,
// 				langNode,
// 				langExpress,
// 				langJSON,
// 				langREST,
// 				langSQL,
// 				langCloud,
// 				memberOne,
// 				oneEmail,
// 				oneGit,
// 				oneLinkedin,
// 				onePortfolio,
// 				oneTwitter,
// 				onePicture,
// 			])
// 			.then((result) => {
// 				console.log(uuid());
// 				return result.rows;
// 			})
// 			.catch((err) => {
// 				reject("addProject query failed" + err);
// 			});
// 	});
// }

module.exports = {
	connect: connect,


	getSearchResults: getSearchResults,

	getDivisionList: getDivisionList,
	getDivisionById: getDivisionById,

	getTeamsList: getTeamsList,
	getTeamById: getTeamById,
	getTeamByDivision: getTeamByDivision,

	getPlayerList: getPlayerList,
	getPlayersById: getPlayersById,


	// getProductsList: getProductsList,

	// getCategory: getCategory,
	// getItem: getItem,
	// createProject: createProject,
};
