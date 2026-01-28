// const express = require("express");
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const cors = require("cors");

// const app = express();
// app.use(express.json());
// app.use(cors());
// app.use(express.static('public'));

// /* ===== DATABASE ===== */
// mongoose.connect("mongodb://127.0.0.1:27017/discover_india", {
//   // useNewUrlParser: true,
//   // useUnifiedTopology: true
// }).then(() => console.log("MongoDB Connected"));

// /* ===== USER MODEL ===== */
// const UserSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String
// });
// const User = mongoose.model("User", UserSchema);

// app.get("/",(req,res)=>{
//   res.send("running")
// });
// app.get("/login",(req,res)=>{
//   res.render("login.ejs")
// });
// app.get("/signup",(req,res)=>{
//   res.render("signup.ejs")
// });

// /* ===== SIGN UP ===== */
// app.post("/api/signup", async (req, res) => {
//   const { name, email, password } = req.body;

//   const userExist = await User.findOne({ email });
//   if (userExist) {
//     return res.status(400).json({ message: "User already exists" });
//   }

//   const hashedPassword = await bcrypt.hash(password, 10);
//   const user = new User({ name, email, password: hashedPassword });
//   await user.save();

//   res.json({ message: "Signup successful" });
// });

// /* ===== LOGIN ===== */
// app.post("/api/login", async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });
//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) {
//     return res.status(401).json({ message: "Invalid password" });
//   }

//   res.json({
//     message: "Login successful",
//     name: user.name
//   });
// });
// app.get("/register",(req,res)=>{
//   res.render("register.ejs")
// });

// /* ===== SERVER ===== */
// app.listen(5000, () => {
//   console.log("Server running on http://localhost:5000");
// });
const express = require("express");
const path = require("path");

const app = express();

// serve all frontend files
app.use(express.static(path.join(__dirname, "public")));

// home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "front.html"));
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
