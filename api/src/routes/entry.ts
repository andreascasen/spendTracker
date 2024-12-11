import fs from 'fs'
import multer from 'multer'
import { Router } from 'express'
import { parseFromBuffer } from '../utils/xlsx'

const upload = multer()

export const entryRouter = Router()

entryRouter.post('/', upload.single('file'), async (req, res) => {
	const { file } = req
	if (file?.buffer) {
		const parsedFileData = await parseFromBuffer(file?.buffer)
		res.end(JSON.stringify({ message: 'received' }))
	} else {
		res.status(400).send('Bad Request')
	}
})

const parseFile = async () => {}
