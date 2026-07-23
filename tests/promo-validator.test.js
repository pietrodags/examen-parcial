import { describe, it, expect } from "vitest"
import { validateCode } from "../src/scripts/promo-validator.js"

describe("validateCode", () => {
    it("acepta un codigo con el formato correcto", () => {
        expect(validateCode("ABC-1234")).toBe(true)
    })

    it("rechaza un código con el formato incorrecto", () => {
        expect(validateCode("abc-1234")).toBe(false)
    })
})