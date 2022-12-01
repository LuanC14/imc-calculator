import { Modal } from './Modal.js'
import { AlertError } from './alert.js'
import {imcCalculator} from './calculator.js'

let form = document.querySelector('form')
let weightInput = document.querySelector('#weightInput')
let heightInput = document.querySelector('#heightInput')

form.onsubmit = (event) => {
    event.preventDefault()
    AlertError.close()

    let weight = Number(weightInput.value)
    let height = Number(heightInput.value)
    let result = imcCalculator(weight, height)

    isNaN(result) === true || "" ? AlertError.open() : Modal.open()  // Ternário com função que verifica se o dado for verdadeiro, ele é um NaN (Not a Number)

    return Modal.message.textContent = `Seu IMC é de ${result}`
}

