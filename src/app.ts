import * as bodyParser from "body-parser"
import {Server} from '@overnightjs/core'
import {Logger} from '@overnightjs/logger'

import * as routes from './routes'


export class App extends Server {

	private readonly SERVER_STARTED = 'Example server started on port: '

	constructor() {
		super(true)
		this.app.use(bodyParser.json())
		this.app.use(bodyParser.urlencoded({extended: true}))
		this.setupControllers()
	}


	private setupControllers(): void {
		const ctlrInstances = []
		for (const name in routes) {
			if (routes.hasOwnProperty(name)) {
				const controller = (routes as any)[name]
				ctlrInstances.push(new controller())
			}
		}
		super.addControllers(ctlrInstances)
	}


	public start(port: number): void {
		this.app.get('*', (req, res) => {
			res.send(this.SERVER_STARTED + port)
		})
		this.app.listen(port, () => {
			Logger.Imp(this.SERVER_STARTED + port)
		})
	}
}
