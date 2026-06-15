let mivariable
var miotravariable
const miValorInalterable = "cualquiercosa"

mivariable = "Alexandre"
miotravariable = "Muñoz"

let num1 = 15
let num2 = 5
let resultado = num1 + num2

console.log(mivariable + " " + miotravariable)
console.log(resultado)


const elementoHtmlBoton = document.querySelector("#boton")

elementoHtmlBoton.addEventListener("click", function (){
    elementoHtmlBoton.style.backgroundColor="pink"
    elementoHtmlBoton.style.color="green"

})

// recojo todos los elementos html que tengan la clase "boton"
// La constante en la que los recojo guarda una colección de items
const botones = document.querySelectorAll(".boton")

// función normal
// botones.forEach(function(boton){
//     boton.addEventListener("click", function(){
//         boton.style.backgroundColor="pink"
//         boton.style.color="green"
//     })
// })

// función flecha
botones.forEach((boton)=>{
    boton.addEventListener("click", ()=>{
        boton.style.backgroundColor="pink"
        boton.style.color="green"
    })
})


