const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
const port = require("./authenticate");

//Image Upload
const multer = require("multer");
const path = require("path");
const normalize = require("normalize-path");

const db = require("./lib/db");
const check = require("./lib/validate");
// const { validImage } = require('./lib/validate')
// const validate = require('./lib/validate')

const app = express();

// serve files out of the public directory
app.use(express.static("./public"));

app.use(express.urlencoded({ extended: true }));

//Cookie Sessions
app.use(
	cookieSession({
		name: "musicmonk-session",
		keys: ["key1", "key2"],
	})
);

//Check if User is logged in
const isLoggedIn = (req, res, next) => {
	if (req.user) {
		next();
	} else {
		res.redirect("/login");
	}
};

//Google Authentication functions
app.use(passport.initialize());
app.use(passport.session());

// set the template engine
app.set("view engine", "hbs");

app.get("/logged_out", (req, res) => {
	res.send("You are not logged in!");
});

//Google Route Failure
app.get("/failed", (req, res) => res.send("Login Failed"));
app.get("/success", isLoggedIn, (req, res) => {
	db.getCategoryList().then((lists) => {
		res.render("index", { lists: lists });
	});
});

// Google Authentication
app.get(
	"/login/google",
	passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
	"/google/callback",
	passport.authenticate("google", { failureRedirect: "/failed" }),
	function (req, res) {
		// Successful authentication, redirect home.
		res.redirect("/success");
	}
);

// const isAuthenticated = function authenticate () {
//   if (passport.authenticate.user.id == '') {
//     console.log('#@#@##@ I GUESSSS IT WORKED @##$#@#@#$')
//   } else (
//     console.log('!!!!! GUESS IT DIDNT WORK !!!!')
//   )
// }

app.get("/logout", (req, res) => {
	req.session = null;
	req.logout();
	res.render("login", { logoutMessage: "You've been logged out!" });
	// res.redirect('/login')
});

// // Shows the lists on the homepage
app.get("/", function (req, res) {
	db.getCategoryList().then((lists) => {
		res.render("index", { lists: lists });
	});
});

app.get("/login", function (req, res) {
	db.getCategoryList().then((lists) => {
		res.render("login", { lists: lists });
	});
});

app.get("/form", function (req, res) {
	db.getCategoryList().then((lists) => {
		res.render("form", { lists: lists });
	});
});

//Storage Engine
// const storage = multer.diskStorage({
//   destination: './public/uploads',
//   filename: function (req, file, cb){
//     cb(null, file.fieldname + '-' + Date.now() +
//     path.extname(file.originalname))
//   }
// })

//Init Upload
// const upload = multer({
//   storage: storage
// }).single('projectImage1')

app.get("/contact", function (req, res) {
	res.render("contact");
});

app.get("/add_project", isLoggedIn, function (req, res) {
	res.render("add_project");
});

// app.post("/add_projects", (req, res) => {
//   upload(req, res, (err) => {
//     console.log(req.file);
//     if (err) {
//       res.render("add_project", {
//         msg: err,
//       });
//     } else {
//       if (req.file == undefined) {
//         res.render("add_project", {
//           msg: "Error: No File Selected!",
//         });
//       } else {
//         res.render("add_project", {
//           msg: "File Uploaded!",
//           file: `uploads/${req.file.filename}`,
//         });
//       }
//     }
//   });
// });

// app.get("/add_project", (req, res) => res.render("add_project"));
// const upload = multer({ dest: "./public/uploads/" });

// var cpUpload = upload.fields([
//   { name: "projectImage1", maxCount: 1 },
//   { name: "projectName", maxCount: 1 },
// ]);

//Set The Storage Engine
const storage = multer.diskStorage({
	destination: "./public/uploads/",
	filename: function (req, file, cb) {
		cb(
			null,
			file.fieldname + "-" + Date.now() + path.extname(file.originalname)
		);
	},
});

// // Init Upload

const upload = multer({
	storage: storage,
	limits: { fileSize: 1000000 },
	fileFilter: function (req, file, cb) {
		check.checkFileType(file, cb);
	},
});

var cpUpload = upload.fields([
	{ name: "projectImage1" },
	{ name: "projectImage2" },
	{ name: "projectImage3" },
	{ name: "projectImage4" },
	{ name: "projectImage5" },
	{ name: "projectImage6" },
	{ name: "projectImage7" },
	{ name: "projectImage8" },
	{ name: "onepicture" },
]);

app.post("/add_project", cpUpload, (req, res, next) => {
	const newProjectName = req.body.projectName;
	const newProjectDescription = req.body.projectDescription;
	const newTeamName = req.body.teamName;

	// Pictures uploaded

	const projectImage1 = req.files["projectImage1"][0].filename;
	var projectImage2 = null;
	var projectImage3 = null;
	var projectImage4 = null;
	var projectImage5 = null;
	var projectImage6 = null;
	var projectImage7 = null;
	var projectImage8 = null;
	var onePicture = null;

	if (req.files["projectImage2"] != undefined) {
		projectImage2 = req.files["projectImage2"][0].filename;
	}
	if (req.files["projectImage3"] != undefined) {
		projectImage3 = req.files["projectImage3"][0].filename;
	}
	if (req.files["projectImage4"] != undefined) {
		projectImage4 = req.files["projectImage4"][0].filename;
	}
	if (req.files["projectImage5"] != undefined) {
		projectImage5 = req.files["projectImage5"][0].filename;
	}
	if (req.files["projectImage6"] != undefined) {
		projectImage6 = req.files["projectImage6"][0].filename;
	}
	if (req.files["projectImage7"] != undefined) {
		projectImage7 = req.files["projectImage7"][0].filename;
	}
	if (req.files["projectImage8"] != undefined) {
		projectImage8 = req.files["projectImage8"][0].filename;
	}
	if (req.files["onepicture"] != undefined) {
		onePicture = req.files["onepicture"][0].filename;
	}

	// Technologies Used

	// const langJavascript = req.body.Javascript;
	const languagesUsed = "langJavascript";

	// const langReact = req.body.React;
	// const langHTML = req.body.HTML;
	// const langCSS = req.body.CSS;
	// const langPython = req.body.Python;
	// const langClojure = req.body.Clojure;

	var langJavascript = null;
	var langReact = null;
	var langHTML = null;
	var langCSS = null;
	var langPython = null;
	var langNode = null;
	var langExpress = null;
	var langJSON = null;
	var langREST = null;
	var langSQL = null;
	var langCloud = null;

	if (req.body.javascript != undefined) {
		langJavascript = req.body.javascript;
	}
	if (req.body.react != undefined) {
		langReact = req.body.react;
	}
	if (req.body.html != undefined) {
		langHTML = req.body.html;
	}
	if (req.body.css != undefined) {
		langCSS = req.body.css;
	}
	if (req.body.python != undefined) {
		langPython = req.body.python;
	}
	if (req.body.node != undefined) {
		langNode = req.body.node;
	}
	if (req.body.express != undefined) {
		langExpress = req.body.express;
	}
	if (req.body.json != undefined) {
		langJSON = req.body.json;
	}
	if (req.body.rest != undefined) {
		langREST = req.body.rest;
	}
	if (req.body.sql != undefined) {
		langSQL = req.body.sql;
	}
	if (req.body.cloud != undefined) {
		langCloud = req.body.cloud;
	}

	//Project Info
	var projectURL = null;
	var projectGit = null;
	var projectCohort = null;

	if (req.body.projecturl != undefined) {
		projectURL = req.body.projecturl;
	}
	if (req.body.projectgit != undefined) {
		projectGit = req.body.projectgit;
	}
	if (req.body.projectcohort != undefined) {
		projectCohort = req.body.projectcohort;
	}
	// if (req.body.projecturl != undefined) {
	//   langCloud = req.body.cloud
	// }
	// if (req.body.cloud != undefined) {
	//   langCloud = req.body.cloud
	// }

	//Team info

	var memberOne = null;
	var oneEmail = null;
	var oneGit = null;
	var oneLinkedin = null;
	var oneTwitter = null;
	var onePortfolio = null;

	if (req.body.memberone != undefined) {
		memberOne = req.body.memberone;
	}
	if (req.body.oneemail != undefined) {
		oneEmail = req.body.oneemail;
	}
	if (req.body.onegit != undefined) {
		oneGit = req.body.onegit;
	}
	if (req.body.onelinkedin != undefined) {
		oneLinkedin = req.body.onelinkedin;
	}
	if (req.body.onetwitter != undefined) {
		oneTwitter = req.body.onetwitter;
	}
	if (req.body.oneportfolio != undefined) {
		onePortfolio = req.body.oneportfolio;
	}

	console.log(req.files, "@#)$(#$)(@#*$)(@#* THIS IS REQ.FIlesO(*#Q*E)QW(*EWE");
	console.log(
		"******************************",
		req.body,
		"******************************"
	);
	if (check.validDescription(newProjectName)) {
		res.render("new_project", {
			name: req.body.projectName,
			description: req.body.projectDescription,
			image: req.files.path,
			filename: req.files.filename,
		});
	} else if (check.validDescription(newProjectDescription)) {
		res.render({ description: req.body.projectDescription });
	} else if (check.validDescription(newTeamName)) {
		res.send("Project Loaded Successfully");
	} else if (check.validDescription(languagesUsed)) {
		res.send("Project Loaded Successfully");
	} else {
		res.status(400).send("bad input");
	}

	console.log(langJavascript, "HEEEYYY ITS WORKING??????????");

	db.createProject(
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
	)
		.then((newProject) => {
			console.log("I AM IN createProject PROMISE");
			res.render("new_project", {
				projectName: newProject.projectName,
			});
		})
		.catch(() => {
			//NEED TO GET THIS FIXED
			// res.status(500).send("The Funcaon Didnt WOrk)
		});

	// res.redirect("/login");
});

app.param("category_id", function (req, res, nextFn, category_id) {
	const getProductsPromise = db.getProducts(category_id);
	const getCategoryPromise = db.getCategory(category_id);
	Promise.all([getProductsPromise, getCategoryPromise])
		.then(([products, category]) => {
			req.monkMusic = req.monkMusic || {};
			req.monkMusic.products = products;
			req.monkMusic.category = category;
			console.log("******* THIS IS THE PRODUCTS *******");
			console.log(category, "*****HEEEEYYYYYYYYYYYYYYY");
			nextFn();
		})
		.catch((err) => {
			console.log("AARHHHHHH DIDNT WORK", err);
			res.status(404).send("error_page");
		});
});

app.get("/category/:category_id", function (req, res) {
	const theProducts = req.monkMusic.products;
	const theCategory = req.monkMusic.category;
	console.log(theCategory, "**#*#*#*#*#*#* CHECK THIS OUT!!");
	db.getCategoryList().then((lists) => {
		res.render("products_page", {
			theProducts: theProducts,
			theCategory: theCategory,
		});
	});
});

app.param("products_id", function (req, res, nextFn, products_id) {
	db.getItem(products_id)
		.then((item) => {
			req.monkMusic = req.monkMusic || {};
			req.monkMusic.item = item;
			console.log("******* THIS IS THE PRODUCTS *******");
			console.log(item, "*****HEEEEYYYYYYYYYYYYYYY");
			nextFn();
		})
		.catch((err) => {
			console.log("AARHHHHHH DIDNT WORK", err);
			res.status(404).send("uh oh");
		});
});

app.get("/category/:category_id/:products_id", function (req, res) {
	const theItem = req.monkMusic.item;
	console.log(theItem, "**#*#*#*#*#*#* getItem PROMISE");
	db.getProductsList()
		.then((result) => {
			res.render("item_page", { theItem: theItem });
		})
		.catch((err) => {
			res.status(404).send("error_page");
		});
});

const startExpressApp = () => {
	app.listen(port, () => {
		console.log("express is listening on port " + port);
	});
};

function bootupSequenceFailed(err) {
	console.error("Uh Ohh... could not connect to the database!:", err);
	console.error("Goodbye!");
	process.exit(1);
}

function fetchCategoryList() {
	db.getCategoryList().then((lists) => {});
}

function fetchProductsList() {
	db.getProductsList().then((products) => {});
}

// Global kickoff point
db.connect()
	.then(startExpressApp)
	.then(fetchProductsList)
	.then(fetchCategoryList)

	.then(() => {
		console.log("You connected to the database!");
	})
	.catch(bootupSequenceFailed);

app.get("/image", function (req, res) {
	res.render("image");
});

module.exports = port;
