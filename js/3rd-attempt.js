(function () {
    const pesxagon = document.getElementById('js-pes-xagon');
    const innerPolygon = pesxagon.getElementsByTagName('polygon').item(0);
    const submitFormBtn = document.querySelector('#js-attempt .vertex-form button');

    function setPolygonPoints (points) {
        innerPolygon.setAttribute('points', points);
    }

    submitFormBtn.addEventListener('click', function (event) {
        // get all the inputs in the parent
        const rows = [...this.parentNode.children]
        const formElements = rows
            .map(row => getInputFromParent(row))
            .filter(element => element.innerHTML != null);
        const vertexInputs = formElements;
        const vertexValues = vertexInputs.map((element) => element.value);
        const points = getVertexCoordinates(vertexValues);
        setPolygonPoints(points);
    });
})();
