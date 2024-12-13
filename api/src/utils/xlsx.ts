import xlsx from 'node-xlsx'

export const parseFileContents = async (file: File) => {
	const workSheetFromFile = xlsx.parse(file.webkitRelativePath)
	console.log('workSheetFromFile:', workSheetFromFile)
	return workSheetFromFile
}

export const parseFromBuffer = async (buffer: Buffer) => {
	const [{ data }] = xlsx.parse(buffer)
	const structuredData = structureFileContents(data)
	return structuredData
}

const structureFileContents = (data: any[]) => {
	const [header, categories, ...rows] = data

	const parsedData = rows.filter(row => row.length > 0).map(parseRow)

	console.log('parsedData => ', parsedData)

	return data

	// const structuredData = rows.map(row => {
	// 	const entry = {}
	// 	row.forEach((cell, index) => {
	// 		entry[header[index]] = cell
	// 	})
	// 	return entry
	// })
	// console.log('structuredData:', structuredData)
	// return structuredData
}

type rowContent = number | string

const parseRow = (row: rowContent[]) => {
	const [bookingDate, transactionDate, name, amount, balance] = row
	return {
		bookingDate,
		transactionDate,
		name,
		amount,
		balance,
	}
}
