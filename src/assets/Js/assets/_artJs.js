

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
    boton.addEventListener("click", (e)=>{

        botones.forEach((boton)=>{
            boton.style.backgroundColor="#ff0000"
            boton.style.color="#ffffff"
        })

        boton.style.backgroundColor="pink"
        boton.style.color="green"
    })
})



// Ejercicio desplegable
// recojo el primer párrafo al que quiero modificar la altura
// const parrafoDesplegable = document.querySelector(".desplegable")
// recojo todos los nodos con clase .botonDesplegar
const botonesDesplegar= document.querySelectorAll(".botonDesplegar")

// recorro con forEach y funciones flecha. ClassicList reogeria un estilo de la lista y con toggle haría la función acordeón, de poner y quitar el estilo.
botonesDesplegar.forEach((item)=>{

    item.addEventListener("click", ()=>{
        // parrafoDesplegable.classList.toggle("open")
        // const superior = item.parentElement
        // const miParrafo = superior.querySelector(".desplegable")

        const miParrafo = item.previousElementSibling
        miParrafo.classList.toggle("open")
    })
})





