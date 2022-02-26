const port = 5000;

var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;

console.log(port, "#@#$LDJFLSKDJHFLKSDJFHLKJSDH@#($@#$*(@#)$*");

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});

passport.use(
	new GoogleStrategy(
		{
			clientID:
				"229399177616-3u0bgm5s2nn323g2ntjflqqgmkktsdut.apps.googleusercontent.com",
			clientSecret: "iKdF5Jf_u8cdsA46F_KX1Hbo",
			callbackURL: `https://sportsapp.centralus.cloudapp.azure.com//google/callback`,

			// callbackURL: `http://localhost:${port}/google/callback`,
		},
		function (accessToken, refreshToken, profile, cb) {
			// Register user here.
			console.log(profile);
			cb(null, profile);
		}
	)
);

module.exports = port;
