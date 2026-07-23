



const inputCode = document.querySelector("#code-input")
const button = document.querySelector("#check")
const output = document.querySelector("#output-area")
const error = code => `El código ${code} no tiene el formato correcto`
const success = code => `Se ha introducido el código ${code} en la base de datos`

const codeList = []

function validateCode(code) {
    const codeFormat = code
    const regex = /^[A-Z]{3}-\d{4}$/
    return regex.test(codeFormat)

}

function showResult() {
    const codeToCheck = inputCode.value.trim()
    let message

    if (validateCode(codeToCheck)) {
        codeList.push(codeToCheck)
        message = success(codeToCheck)
    } else {
        message = error(codeToCheck)
    }

    output.textContent = message




    

}

button.addEventListener("click", showResult)