let sexo = prompt("Qual seu sexo?")
let altura = prompt("Qual sua altura?")
let pesoideal = 0

if (sexo === "Masculino") {
    pesoideal = (72.7 * altura) - 58
    alert("Seu peso ideal é: "+pesoideal)
} else {
    pesoideal = (62.1 * altura) - 44.7
    alert("Seu peso ideal é: "+pesoideal)
}