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

const getCategoryListQuery = `SELECT * FROM category`;
function getCategoryList() {
  return conn.raw(getCategoryListQuery).then((result) => {
    return result.rows;
  });
}

const getProductsListQuery = `SELECT * FROM products`;

function getProductsList() {
  return conn.raw(getProductsListQuery).then((result) => {
    return result.rows;
  });
}

const getProductsByCategoryNumberQuery = `SELECT * FROM products WHERE category_id = ?`;

function getProducts(category_id) {
  return new Promise(function (resolve, reject) {
    conn
      .raw(getProductsByCategoryNumberQuery, [category_id])
      .then((result) => {
        resolve(result.rows);
      })
      .catch(() => {
        reject("getProduct query failed");
      });
  });
}

const getCategoryQuery = `SELECT * FROM category WHERE category_id = ?`;

function getCategory(category_id) {
  return new Promise(function (resolve, reject) {
    conn
      .raw(getCategoryQuery, [category_id])
      .then((result) => {
        resolve(result.rows);
        console.log(result.rows, "THIS IS THE CATEGORY ID");
      })
      .catch(() => {
        reject("getProduct query failed");
      });
  });
}

const getItemQuery = `SELECT * FROM products WHERE products_id = ?`;

function getItem(products_id) {
  console.log(products_id);
  return new Promise(function (resolve, reject) {
    conn
      .raw(getItemQuery, [products_id])
      .then((result) => {
        resolve(result.rows);
      })
      .catch((err) => {
        reject("getItem query failed" + err);
      });
  });
}

// const addProjectQuery = `

//   INSERT INTO category (category_id, category_name, category_description, category_team_name, category_languages, category_picture, category_picture2, category_picture3, category_picture4, category_picture5, category_picture6, category_picture7, category_picture8)
//   VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)
//   RETURNING *;
//   `;

// function createProject(
//   newProjectName,
//   newProjectDescription,
//   newTeamName,
//   languagesUsed,
//   projectImage1,
//   projectImage2,
//   projectImage3,
//   projectImage4,
//   projectImage5,
//   projectImage6,
//   projectImage7,
//   projectImage8,

// ) {
//   return new Promise(function (resolve, reject) {
//     conn
//       .raw(addProjectQuery, [
//         uuid(),
//         newProjectName,
//         newProjectDescription,
//         newTeamName,
//         languagesUsed,
//         projectImage1,
//         projectImage2,
//         projectImage3,
//         projectImage4,
//         projectImage5,
//         projectImage6,
//         projectImage7,
//         projectImage8,

//       ])
//       .then((result) => {
//         console.log(uuid());
//         return result.rows;
//       })
//       .catch((err) => {
//         reject("addProject query failed" + err);
//       });
//   });
// }




const addProjectQuery = `

  INSERT INTO category (category_id, category_name, category_description, category_url, category_team_name, category_git, category_cohort, category_languages, category_picture, category_picture2, category_picture3, category_picture4, category_picture5, category_picture6, category_picture7, category_picture8, category_javascript, category_react, category_html, category_css, category_python, category_node, category_express, category_json, category_rest, category_sql, category_cloud, category_memberone, category_oneemail, category_onegit, category_onelinkedin, category_oneportfolio, category_onetwitter, category_onepicture)
  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
  RETURNING *;
  `;

function createProject(
  newProjectName,
  newProjectDescription,
  projectURL,
  newTeamName,
  projectGit,
  projectCohort,
  languagesUsed,
  projectImage1,
  projectImage2,
  projectImage3,
  projectImage4,
  projectImage5,
  projectImage6,
  projectImage7,
  projectImage8,
  langJavascript,
  langReact,
  langHTML,
  langCSS,
  langPython,
  langNode,
  langExpress,
  langJSON,
  langREST,
  langSQL,
  langCloud,
  memberOne,
  oneEmail,
  oneGit,
  oneLinkedin,
  onePortfolio,
  oneTwitter,
  onePicture

) {
  return new Promise(function (resolve, reject) {
    conn.raw(addProjectQuery, [
      uuid(),
      newProjectName,
      newProjectDescription,
      projectURL,
      newTeamName,
      projectGit,
      projectCohort,
      languagesUsed,
      projectImage1,
      projectImage2,
      projectImage3,
      projectImage4,
      projectImage5,
      projectImage6,
      projectImage7,
      projectImage8,
      langJavascript,
      langReact,
      langHTML,
      langCSS,
      langPython,
      langNode,
      langExpress,
      langJSON,
      langREST,
      langSQL,
      langCloud,
      memberOne,
      oneEmail,
      oneGit,
      oneLinkedin,
      onePortfolio,
      oneTwitter,
      onePicture

    ])
      .then((result) => {
        console.log(uuid());
        return result.rows;
      })
      .catch((err) => {
        reject("addProject query failed" + err);
      });
  });
}




module.exports = {
  connect: connect,
  getCategoryList: getCategoryList,
  getProductsList: getProductsList,
  getProducts: getProducts,
  getCategory: getCategory,
  getItem: getItem,
  createProject: createProject,
};