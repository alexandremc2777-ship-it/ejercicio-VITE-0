
export default function artacordeon01(){
    
const botones= document.querySelectorAll(".mostrar")

// recorro con forEach y funciones flecha. ClassicList reogeria un estilo de la lista y con toggle haría la función acordeón, de poner y quitar el estilo.
botones.forEach((item)=>{

    item.addEventListener("click", ()=>{
        // parrafoDesplegable.classList.toggle("open")
        // const superior = item.parentElement
        // const miParrafo = superior.querySelector(".desplegable")

        const miParrafo = item.previousElementSibling
        miParrafo.classList.toggle("open")
    })
})
}