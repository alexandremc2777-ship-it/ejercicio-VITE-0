export default function artSlider() {
    const $carrousel = document.querySelectorAll(".artSlider01");

    $carrousel.forEach(($el) => {

        const $pista = $el.querySelector(".artSlider01__pista");
        const $sliders = document.querySelectorAll(".artSlider01__slide");

        // Compro
        if (!$pista || $sliders.length === 0) return;

        let contador = 0;

        const tiempoTransicion = 500;
        const tiempoEspera = 3000;

        $sliders.forEach(($slide) => {
            console.log($slide);
        })

        setInterval(() => {
            console.log(`Contador: ${contador}`);
            console.log(`Tiempo: ${(tiempoEspera * contador) / 1000}s`);
            contador++

        }, tiempoEspera);

    });

}