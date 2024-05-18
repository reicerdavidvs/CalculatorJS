//Declaración
const body = document.querySelector("body")
const theme = document.querySelector(".theme")
const sunny = document.querySelector(".sunny")
const moon = document.querySelector(".moon")
let operator = document.querySelector("#operator")
let result = document.querySelector("#result")
const buttons = document.querySelectorAll("button")
//Función para tema
theme.addEventListener("click", () => {
    body.classList.toggle("dark")
    sunny.classList.toggle("hidden")
    moon.classList.toggle("hidden")
})
//Calculadora
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const content = btn.textContent
        cambiarTamaño()
        if (content === "Ac") {
            operator.value = ""
            result.value = "=0"
        } else if (btn.id === "delete") {
            if (operator.value === "") {
                result.value = "=0"
            } else {
                operator.value = operator.value.slice(0, -1)
            }
        } else if (content === "=") {
            cambiarTamaño("=")
            result.value = "=" + eval(operator.value)
        } else {
            operator.value += content
        }

    })
})

function cambiarTamaño(e) {
    if (e === "=") {
        operator.style.fontSize = "32px"
        result.style.fontSize = "52px"
    } else {
        operator.style.fontSize = "52px"
        result.style.fontSize = "32px"
    }
}

