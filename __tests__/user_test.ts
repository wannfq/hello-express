import {Users} from '../src/routes'

it('should be able to test get ', async () => {
	const request: any = {
		params: {
			msg: 'message'
		}
	}

	const response: any = {
		json: jest.fn(),
		status: jest.fn(() => ({
			json: jest.fn(),
		})),
	}

	await new Users().getUser(request, response)

	expect(response.status).toBeCalledWith(200)
})

it('should be able to test put', async () => {
	const request: any = {
		params: {
			msg: 'message'
		}
	}

	const response: any = {
		json: jest.fn(),
		status: jest.fn(() => ({
			json: jest.fn(),
		})),
	}

	await new Users().putUser(request, response)

	expect(response.status).toBeCalledWith(200)
})

it('should be able to test post', async () => {
	const request: any = {
		params: {
			msg: 'message'
		}
	}

	const response: any = {
		json: jest.fn(),
		status: jest.fn(() => ({
			json: jest.fn(),
		})),
	}

	await new Users().postUser(request, response)

	expect(response.status).toBeCalledWith(200)
})

it('should be able to test delete', async () => {
	const request: any = {
		params: {
			msg: 'message'
		}
	}

	const response: any = {
		json: jest.fn(),
		status: jest.fn(() => ({
			json: jest.fn(),
		})),
	}

	await new Users().delUser(request, response)

	expect(response.status).toBeCalledWith(400)
})
