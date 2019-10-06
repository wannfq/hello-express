import {Request, Response} from "express"
import {Controller, Delete, Get, Post, Put} from '@overnightjs/core'
import {Logger} from "@overnightjs/logger"

@Controller('api')
export class Users {

	@Get('user')
	getUser(req: Request, res: Response) {
		return res.status(200).json({
			message: 'GET user request successful!!!!'
		})
	}

	@Put('user')
	putUser(req: Request, res: Response) {
		Logger.Info(req.params.msg)
		return res.status(200).json({
			message: 'PUT user request successful!!!!'
		})
	}


	@Post('user')
	postUser(req: Request, res: Response) {
		Logger.Info(req.params.msg)
		return res.status(200).json({
			message: 'POST user request successful!!!!'
		})
	}

	@Delete('user')
	delUser(req: Request, res: Response) {
		try {
			throw new Error(req.params.msg)
		} catch (err) {
			Logger.Err(err, true)
			return res.status(400).json({
				message: 'DELETE user request successful!!!!'
			})
		}
	}
}
