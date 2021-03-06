const getInputFromParent = function (node) {
    if (node) {
        return node.querySelector('input') || {};
    }
    return {};
}

/**
 * 
 * @param {String} pathToScript The URL or the path to the script you want to load
 * @param {String} id An id
 * @param {Function} callback Callback function
 */
const loadDynamicScript = (pathToScript, id, callback) => {
    const existingScript = document.getElementById(id);

    if (!existingScript) {
        const script = document.createElement('script');
        script.src = pathToScript;
        script.id = id;
        document.body.appendChild(script);

        script.onload = () => {
            if (callback) callback();
        };
    }

    if (existingScript && callback) callback();
};


// This is the math needed for the regular hexagon that we have.
// Might be different in case you want to change the number of polygon points supported
const HEXAGON_SIZES_NUMBER = 6;
function getPolygonAngleForIndex(index, sides = HEXAGON_SIZES_NUMBER) {
    // extracted from https://stackoverflow.com/a/3436464
    return 2 * Math.PI * index / sides;
}

function getVertexCoordinate(radius, index) {
    const angle = getPolygonAngleForIndex(index);
    return [radius * Math.sin(angle), radius * Math.cos(angle)];
}

/**
 * 
 * @param {Array} vertices The vertices values in a array format
 * @returns {Array} An array with a pair of coordinates, as a string, separated by a comma
 */
function getVertexCoordinatesArray(vertices) {
    // return '0 -50, 43.30 -25, 43.30 25, 0 50, -43.30 25, -43.30 -25';
    let verticesValues = [...vertices];
    return verticesValues.reduce((coordinates, vertexValue, index) => {
        const [vx, vy] = getVertexCoordinate(vertexValue, index);
        coordinates.push(`${vx} ${vy}`);
        return coordinates;
    }, []);
}

function getVertexCoordinates(vertices) {
    return getVertexCoordinatesArray(vertices).join(',');
}