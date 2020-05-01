(function () {
    loadDynamicScript('./js/libs/snap.svg-min.js', 'snapSvg', function () {
        const pesxagon = Snap('#snap-pes-xagon');
        let polygon = pesxagon.select('polygon');
        polygon.animate({ fill: 'white', points: [0, -90, 64.95, -37.5, 43.30, 25, 0, 50, -43.30, 25, -43.30, -25] }, 2000);
    });
})();