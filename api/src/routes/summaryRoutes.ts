import multer from 'multer'
import { Router, Request } from 'express'
import { z } from 'zod'

import { parseXlsxFromBuffer } from '../utils/xlsx'
import { handleMonthlyTransactions } from '../transactions/monthly'
import { uploadSummaryResponseSchema } from '../../../schemas/responses.schema'

const upload = multer()

export const summaryRouter = Router()

summaryRouter.post('/', upload.single('file'), async (req, res) => {
	try {
		const { month, file } = parseRequest(req)

		const fileData = await parseXlsxFromBuffer(file?.buffer)
		const monthlySummary = await handleMonthlyTransactions(fileData)

		const response = uploadSummaryResponseSchema.parse({
			month,
			monthlySummary,
		})

		res.end(JSON.stringify(response))
	} catch (error) {
		console.log('Error Handling summary => ', error)
		res.status(400).send('Bad Request')
	}
})

const parseRequest = (req: Request) => {
	const bodySchema = z.object({
		month: z.string().nonempty(),
	})

	const { body, file } = req

	const { month } = bodySchema.parse(body)

	if (!month || !file) {
		throw new Error('Month and file are required')
	}

	return { month, file }
}
