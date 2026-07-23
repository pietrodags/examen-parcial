export function validateCode(code) {
    const codeFormat = code
    const regex = /^[A-Z]{3}-\d{4}$/
    return regex.test(codeFormat)
}


