export function validateCode(code) {
    const regex = /^[A-Z]{3}-\d{4}$/
    return regex.test(code)
}


