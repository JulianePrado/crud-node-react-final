import express from "express";
import usuariosRoutes from "./routes/usuarios.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", usuariosRoutes)

app.listen(8800);