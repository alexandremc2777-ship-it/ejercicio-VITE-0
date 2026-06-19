export default function artSlider() {
    const $carrousel = document.querySelectorAll(".artSlider01");

    $carrousel.forEach(($el) => {

        const $pista = $el.querySelector(".artSlider01__pista");
        const $dots = $el.querySelectorAll(".artSlider01__track__dot");
        const $sliders = document.querySelectorAll(".artSlider01__slide");

        console.log($dots);

        // Comprobar que nuestra pista y los sliders existas dentro del DOM
        if (!$pista || $sliders.length === 0) return;

        let contador = 0;

        const tiempoTransicion = 500;
        const tiempoEspera = 3000;

        $sliders.forEach(($slide) => {
           const $copia = $slide.cloneNode(true);
           $pista.appendChild($copia);
        })

        // El setinterval se ejecutará cada 3000 milisegundos
        setInterval(() => {
        //     console.log(`Contador: ${contador}`);
        //     console.log(`Tiempo: ${(tiempoEspera * contador) / 1000}s`);
            contador++

            $pista.style.transform= `translateX(-${100 * contador}%)`
            $pista.style.transition = `transform ${tiempoTransicion}ms`

            $dots[contador - 1]?.classList.remove("active");
            if ($dots[contador]){
                $dots[contador].classList.add("active");
            } else {
                $dots[0].classList.add("active");
            }
        // Hay que validad  que el contador sea igual al número de la última imagen
        if(contador===$sliders.length){
            setTimeout(()=>{
            contador = 0;
            $pista.style.transform= `translateX(0)`;
            $pista.style.transition = "none";
            }, tiempoTransicion);
           
        }
        // Reiniciar la posición del visor para mostrar el primer slider
        
        }, tiempoEspera);

        // setTimeout(()=> {
        //     console.log(`Me ejecuto cada ${tiempoEspera}s`);
        // }, tiempoEspera);

    });

}