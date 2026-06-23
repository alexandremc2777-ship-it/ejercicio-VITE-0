export default function darkmode(){
    const $btnDarkMode = document.querySelector(
        ".nav__container--darkModeButton",
    )

    $btnDarkMode.addEventListener("click", ()=>{
        
        const $icon = document.querySelector(".fa-solid");

        $icon.classList.remove("fa-moon");
        $icon.classList.add("fa-sun");
        

        
    })
    // registrar el evento click en el botón
    // Cambier el incono del elemento fa-solid a sun o moon según corresponda
}