import { App } from "./app";
// import { MicroServer, Router } from "micro-server"
import { ApiRoutes } from "./routes"

const PORT = 3000;

const serve: App= new App()

serve.app.listen(PORT, () => {
  console.log("Express server listening on port " + PORT);
});