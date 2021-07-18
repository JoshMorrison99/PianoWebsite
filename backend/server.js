const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
require("dotenv").config();
const cors = require("cors");
const authenticationRoutes = require("./routes/authenticationRoutes");
const gameplayRoutes = require("./routes/gameplayRoutes");
const downloadRoutes = require("./routes/downloadRoutes");
const leaderboardRoutes = require("./routes/leaderboardRoutes");

const app = express();

console.log("--> " + process.env.NODE_ENV);

const corsOptions = {
  credentials: true,
  origin:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.PRODUCTION_URL,
};

app.use(cors(corsOptions));

let db = mongoose.connection;
mongoose.connect(process.env.DB_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check for error
db.on("error", (err) => {
  console.log("MONGO Database error occurred");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sessionStore = new MongoStore({
  mongooseConnection: db,
  collection: "sessions",
});

app.use(
  session({
    name: "ppCookie",
    store: sessionStore,
    cookie: {
      httpOnly: false,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 Year
    },
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/api", authenticationRoutes);
app.use("/api", gameplayRoutes);
app.use("/api", downloadRoutes);
app.use("/api", leaderboardRoutes);

// Server Listen on port
app.listen(5000);
console.log("Server Started...");
