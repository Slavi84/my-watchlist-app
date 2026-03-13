// import { config as configDotenv } from "dotenv";
// configDotenv();
import app from "./app.js";
const port = 9090;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
