import * as express from "express"
import * as bodyParser from "body-parser"
import { ApiRoutes } from "./routes"


export class App {
  public app: express.Application
  public routePrv: ApiRoutes = new ApiRoutes()

  constructor() {
    this.app = express()
    this.config()
    this.routePrv.routes(this.app)  
  }

  private config(): void {
    // support application/json
    this.app.use(bodyParser.json())
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }))
  }
}