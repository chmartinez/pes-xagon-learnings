(function () {
    loadDynamicScript('https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js', 'animejs', function () {
         // example from https://redstapler.co/svg-morphing-animation-animejs/
        const pesxagon = anime({
            targets: '#anime-pes-xagon',
            duration: 2000,
            points: [
                { value: NINETY_SEVENTY_FIVE_POINTS },
            ],
            easing:'easeOutQuad',
            autoplay: false,
        });

        document.getElementById('anime-test-start').onclick = pesxagon.play;


        const submitFormBtn = document.querySelector('#anime-svg-attempt-form button');

        submitFormBtn.addEventListener('click', function (event) {
            // get all the inputs in the parent
            const rows = [...this.parentNode.children]
            const formElements = rows
                .map(row => getInputFromParent(row))
                .filter(element => element.innerHTML != null);
            const vertexInputs = formElements;
            const vertexValues = vertexInputs.map((element) => element.value);
            const points = getVertexCoordinates(vertexValues);

            const animePesxagon = anime({
                targets: '#anime-yellow-pes-xagon',
                duration: 2000,
                points: [
                    { value: points },
                ],
                fill: '#FFFF00',
                easing:'easeOutQuad',
                autoplay: false,
            });
            animePesxagon.play();
        });
    });
})();
