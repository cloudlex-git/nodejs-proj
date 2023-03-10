require("dotenv").config();
const express = require("express");
const res = require("express/lib/response");
const app = express();
const userRouter = require("./api/users/user.router");
const cors = require('cors');

/*
app.get("/api", (req, res)=>{
    res.json({
        success: 1,
        message: " This is second rest apis working"
    });
});
*/
app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);
app.listen(process.env.APP_PORT, () =>{
    console.log("Server up and running on PORT : ", process.env.APP_PORT );
})



