(function () {
    const testPoints = [0, -90, 64.95, -37.5, 43.30, 25, 0, 50, -43.30, 25, -43.30, -25];
    const fiftyPointsStart = [0, 50, 43.30, 25, 43.30, -25, 0, -50, -43.30, -25, -43.30, 25];
    const DEFAULT_POINTS = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    const createPesxagon = (svgId, startingPoints = DEFAULT_POINTS) => {
        const paper = Snap(svgId);
        const pesxagon = paper.polygon(startingPoints).attr({
            fill: "black",
            stroke: "red",
            strokeWidth: 1.5
        });
        return pesxagon;
    };

    loadDynamicScript('./js/libs/snap.svg-min.js', 'snapSvg', function () {
        const whitePesxagon = createPesxagon('#white-pes-xagon', fiftyPointsStart);
        whitePesxagon.animate({ fill: 'white', points: testPoints }, 2000);

        const yellowPesxagon = createPesxagon('#yellow-pes-xagon');
        yellowPesxagon.animate({ fill: 'yellow', points: fiftyPointsStart }, 1000);

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
            yellowPesxagon.animate({ fill: 'yellow', points: points }, 2000);
        });
    });
})();