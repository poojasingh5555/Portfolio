import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db.js";
import contactroute from "./routes/contact.js";
import projectroutes from "./routes/project.js";
import skillsroutes from "./routes/skills.js";



dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact",contactroute);
app.use("/api/project",projectroutes);
app.use("/api/skills",skillsroutes)


const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);