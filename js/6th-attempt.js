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

        document.getElementById('pepe').onclick = pesxagon.play;
    });
})();
