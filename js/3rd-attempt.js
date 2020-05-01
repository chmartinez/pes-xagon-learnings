const pesxagon = document.getElementById('js-pes-xagon');
const innerPolygon = pesxagon.getElementsByTagName('polygon').item(0);

function onSubmitVertexValue() {
    let form = document.getElementsByClassName('vertex-form').item(0);
    const formElements = [...form.elements];
    // remove the submit button from the elements!
    formElements.pop();
    const vertexInputs = formElements;
    const vertexValues = vertexInputs.map((element) => element.value);
    const points = getVertexCoordinates(vertexValues);
    innerPolygon.setAttribute('points', points);
}
