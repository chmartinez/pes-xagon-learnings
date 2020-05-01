(function () {
    loadDynamicScript('./js/libs/snap.svg-min.js', 'snapSvg', function () {
        const pesxagon = Snap('#snap-pes-xagon');
        let polygon = pesxagon.select('polygon');
        polygon.animate({fill: 'white'}, 2000);
    });
})();