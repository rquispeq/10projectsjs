import { Password_generator } from "./Password_generator.js";

const btn_generate = document.getElementById('btn_generate')

btn_generate.addEventListener('click',(e)=>{
    const password_length = document.getElementById('input-length').value
    const upper_checkbox = document.getElementById('input-uppercase').checked
    const lower_checkbox = document.getElementById('input-lowercase').checked
    const numbers_checkbox = document.getElementById('input-numbers').checked
    const symbols_checkbox = document.getElementById('input-symbols').checked

    if (!upper_checkbox && !lower_checkbox && !numbers_checkbox && !numbers_checkbox && !symbols_checkbox) {
        document.querySelector('.error').style.display = 'block'
        return false
    }

    const password_gen = new Password_generator(password_length,upper_checkbox,lower_checkbox,numbers_checkbox,symbols_checkbox)
    const password = password_gen.generatePassword()

    const password_container_generated = document.getElementById('password_generated')

    password_container_generated.textContent = password
})
