(function () {
    const testPoints = [0, -90, 64.95, -37.5, 43.30, 25, 0, 50, -43.30, 25, -43.30, -25];
    loadDynamicScript('./js/libs/snap.svg-min.js', 'snapSvg', function () {
        const whitePesxagon = Snap('#white-pes-xagon');
        let whitePolygon = whitePesxagon.select('polygon');
        whitePolygon.animate({ fill: 'white', points: testPoints }, 2000);

        const submitFormBtn = document.querySelector('#snap-svg-attempt-form button');

        submitFormBtn.addEventListener('click', function (event) {
            // get all the inputs in the parent
            const rows = [...this.parentNode.children]
            const formElements = rows
                .map(row => getInputFromParent(row))
                .filter(element => element.innerHTML != null);
            const vertexInputs = formElements;
            const vertexValues = vertexInputs.map((element) => element.value);
            const points = getVertexCoordinates(vertexValues);
            const whitePesxagon = Snap('#yellow-pes-xagon');
            let whitePolygon = whitePesxagon.select('polygon');
            whitePolygon.animate({ fill: 'white', points: points }, 2000);
        });
    });
})();