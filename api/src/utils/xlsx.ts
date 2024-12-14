import xlsx from 'node-xlsx'

export const parseXlsxFromBuffer = async (buffer: Buffer) => {
	const [{ data }] = xlsx.parse(buffer)
	return data
}
