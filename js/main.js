import Header from "./header.js"
import Generate from "./generate.js"
import Order from "./order.js"

window.addEventListener('DOMContentLoaded', () => {
    Header()
    Generate()
    Order()

    
    const spinner = document.querySelector(".spinner")
    spinner.classList.add('spinner_off')
    setTimeout(() => spinner.remove(), 1000)
})