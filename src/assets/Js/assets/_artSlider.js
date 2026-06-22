import { render } from "sass";

export default function artSlider() {
    const $carrousel = document.querySelectorAll(".artSlider01");

    $carrousel.forEach(($el) => {

        const $pista = $el.querySelector(".artSlider01__pista");
        const $dots = $el.querySelectorAll(".artSlider01__track__dot");
        const $sliders = document.querySelectorAll(".artSlider01__slide");
        const $btnPrev = $el.querySelector(".artSlider01__arrow--prev");
        const $btnNext = $el.querySelector(".artSlider01__arrow--next");

        //Registrar el evento click del btnPrev

        $btnPrev.addEventListener("click", (e) => {
            autoPlayInterval();
            contador = contador - 1;
            renderSlide(contador,$pista,tiempoTransicion);
            autoPlayInterval();
        })

        $btnNext.addEventListener("click", (e) => {
            contador = contador + 1;
            renderSlide(contador,$pista,tiempoTransicion);
        })

        // Comprobar que nuestra pista y los sliders existas dentro del DOM
        if (!$pista || $sliders.length === 0) return;

        let contador = 0;
        let idInterval;

        const tiempoTransicion = 500;
        const tiempoEspera = 3000;

        $sliders.forEach(($slide) => {
           const $copia = $slide.cloneNode(true);
           $pista.appendChild($copia);
        })

        // El setinterval se ejecutará cada 3000 milisegundos
        autoPlayInterval()
        
        function renderDot() {
            $dots[contador - 1]?.classList.remove("active");
            if ($dots[contador]){
            $dots[contador].classList.add("active");
            } else {
            $dots[0].classList.add("active");
         }
        }

    function autoPlayInterval(){
        if(!idInterval){
                idInterval = setInterval(() => {
                handleInterval()}
                , tiempoEspera);
        } else {
            clearInterval(idInterval);
            idInterval=undefined
        }
        console.log(contador)
    }

    function handleInterval(){
        contador++
        renderSlide()
        renderDot();
        // Hay que validad  que el contador sea igual al número de la última imagen
        if(contador===$sliders.length){
        setTimeout(()=>{
        resetPista();
        }, tiempoTransicion);
           
        }
    
    }

    function renderSlide() {
        $pista.style.transform= `translateX(-${100 * contador}%)`;
        $pista.style.transition = `transform ${tiempoTransicion}ms`;
    }

    function resetPista(){
            contador = 0;
            $pista.style.transform= `translateX(0)`;
            $pista.style.transition = "none";
    }
    });

    
}

