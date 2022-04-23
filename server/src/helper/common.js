/**
 * Remove all key if value is null
 * @param {*} obj 
 * @returns object
 */
 export function getCleanObject(obj) {
    Object.keys(obj).forEach(key => {
        if (obj[key] === null) {
          delete obj[key]
        }
    })
    return obj
}

/**
 * Convert origin path file to relative path url
 * @param {*} originPath 
 * @returns string | null
 */
export function convertPathFileToUrl(originPath) {
	if (originPath) {
		return process.platform === "win32" ? 
			originPath.split("\\").slice(1).join("/") : originPath.split("/").slice(1).join("/")
	}
	return null
}