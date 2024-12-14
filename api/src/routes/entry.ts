import multer from 'multer'
import { Router } from 'express'
import { parseXlsxFromBuffer } from '../utils/xlsx'
import { handleMonthlyTransactions } from '../transactions/monthly'

const upload = multer()

export const entryRouter = Router()

entryRouter.post('/', upload.single('file'), async (req, res) => {
	const { file } = req
	if (file?.buffer) {
		const fileData = await parseXlsxFromBuffer(file?.buffer)
		const monthlyTransactions = await handleMonthlyTransactions(fileData)
		res.end(JSON.stringify({ monthlyTransactions }))
	} else {
		res.status(400).send('Bad Request')
	}
})

const parseFile = async () => {}
