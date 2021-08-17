module.exports = function reverse(n) {
	let nStr = String(n)
	let reverseNStr = []
	let reverseN = ''
	for (let i = 0; i < nStr.length; i++) {
		if (nStr[i] !== '-') {
			reverseNStr.unshift(nStr[i])
		}
	}
	for (let i = 0; i < reverseNStr.length; i++) {
		if (reverseNStr[reverseNStr.length - 1] !== '0') {
			reverseN += reverseNStr[i]
		}
	}
	reverseN = Number(reverseN)
	return reverseN
}
