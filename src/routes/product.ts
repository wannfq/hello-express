import {Request, Response} from "express"
import {Controller, Delete, Get, Post, Put} from '@overnightjs/core'
import {Logger} from "@overnightjs/logger"

@Controller('api')
export class Product {

	@Get('product')
	getProduct(req: Request, res: Response) {
		res.status(200).json({
			message: 'GET product request successful!!!!'
		})
	}

	@Put('product')
	putProduct(req: Request, res: Response) {
		Logger.Info(req.params.msg)
		res.status(200).json({
			message: 'PUT product request successful!!!!'
		})
	}


	@Post('product')
	postProduct(req: Request, res: Response) {
		Logger.Info(req.params.msg)
		res.status(200).json({
			message: 'POST product request successful!!!!'
		})
	}

	@Delete('product')
	delProduct(req: Request, res: Response) {
		try {
			throw new Error(req.params.msg)
		} catch (err) {
			Logger.Err(err, true)
			res.status(400).json({
				message: 'DELETE product request successful!!!!'
			})
		}
	}
}
