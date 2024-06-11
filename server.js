import express from "express";
import cookieParser from "cookie-parser";
import {router as userRouter} from "./routes/route.js";
import { ConnectDB } from "./utils/ConnectDB.js";
import dotenv from "dotenv";
import path from "path";
dotenv.config();


let __dirname = path.resolve();

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended : true}));


ConnectDB();

const PORT = process.env.PORT || 8080;

app.use("/api/user" , userRouter);

// app.use(express.static(path.join(__dirname , "thread-client" , "dist")));
// app.get("*", function(_, res) {
//     res.sendFile(path.join(__dirname, "thread-client", "dist", "index.html"));
//   });
  



app.listen(PORT , ()=>{
    console.log("server online");
})