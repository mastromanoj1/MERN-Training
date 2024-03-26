import express from "express";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors'

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;
// Handle CORS
app.use(cors())

app.use(express.json());
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes); 



// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "Welcome to Express Blog App" });
});

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running at: http://localhost:${PORT}`);
    })
  )
  .catch((error) => console.log(error));
