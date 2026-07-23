import { validateCode } from "./src/scripts/promo-validator.js"
import { error, error2, success } from "./src/scripts/promo-ui.js"


const inputCode = document.querySelector("#code-input")
const button = document.querySelector("#check")
const output = document.querySelector("#output-area")

const history = []

function showResult() {
    const codeToCheck = inputCode.value.trim()
    let message

    if (validateCode(codeToCheck)) {
        const newCode = { promoCode: codeToCheck}

        if (history.some(code => code.promoCode === codeToCheck)) {
            output.innerHTML = error2(codeToCheck)
            return
        }

        history.push(newCode)
    
        const listaHtml = history.map(code => `${code.promoCode}`).join("<br>")
        const intro = success(codeToCheck)
        message = `${intro}<br>${listaHtml}`

        
    } else {
        message = error(codeToCheck)
    }

    output.innerHTML = message
}

button.addEventListener("click", showResult)