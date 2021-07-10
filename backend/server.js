const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
require("dotenv").config();
const cors = require("cors");
const authenticationRoutes = require("./routes/authenticationRoutes");

const app = express();

const corsOptions = {
  credentials: true,
  origin: "http://localhost:3000",
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

// Server Listen on port
app.listen(5000);
console.log("Server Started...");
