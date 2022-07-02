import app from "./start/kernel/app";
import dotenv from "dotenv";
dotenv.config();

app.app.listen(3333, () => {
  console.log("rodando");
});
