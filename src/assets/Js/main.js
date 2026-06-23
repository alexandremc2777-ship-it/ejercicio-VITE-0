import '../scss/style.scss'
import './assets/_artJs.js'
import './assets/_artacordeon01.js'
import './assets/_artSlider.js'
import artSlider from './assets/_artSlider.js'
import artacordeon01 from './assets/_artacordeon01.js'
import topBottom from './assets/_topBottom.js'
import darkMode from './assets/_darkmode.js'



document.addEventListener("DOMContentLoaded", () => {
    
    artacordeon01();
    artSlider();
    // Obtenemos la referencia al main dentro del DOM
    const $main = document.querySelector("main");
    // Agregamos nuestro botón fab desntro del main como nuevo hijo
    $main.appendChild(topBottom());
    darkMode();
});