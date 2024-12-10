import xlsx from 'node-xlsx'

export const parseFileContents = async (file: File) => {
	const workSheetFromFile = xlsx.parse(file.webkitRelativePath)
	console.log('workSheetFromFile:', workSheetFromFile)
	return workSheetFromFile
}
