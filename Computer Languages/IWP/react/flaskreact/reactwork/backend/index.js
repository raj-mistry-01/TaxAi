const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieparser = require("cookie-parser")
dotenv.config();
const connectToMongo = require("./database.js")
connectToMongo();
const app = express();
app.use(cors());
app.use(express.json());
const port = 7000
const server = app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
app.use(cookieparser())
app.use("/api/auth",require("./routes/auth/login.js"));
app.use("/api/auth",require("./routes/auth/SignUp.js"))
app.use("/api/getOrganizationDetail",require("./routes/Details/GetOrganizationDetail.js"));
app.use("/api/getUserDetails",require("./routes/GetDetailsOFUser/GetIdOfUserBuyMail.js"))