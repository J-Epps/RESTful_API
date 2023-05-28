// src/config/passport.js

const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const { User } = require("../models/user");
const { SECRET_KEY } = process.env;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY
};

passport.use(
  new JwtStrategy(options, async (jwtPayload, done) => {
    try {
      const user = await User.findById(jwtPayload.userId);
      if (user) {
        // Attach the user object to the request
        done(null, user);
      } else {
        // User not found
        done(null, false);
      }
    } catch (error) {
      done(error, false);
    }
  })
);
