/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var count = 0, p = preferences;
    for (var i = 0; i < p.length; i++) {
        if (p[i] - 1 !== i && p[p[p[i] - 1] - 1] - 1 === i) {
            count++
        }
    }
    return count / 3;
};
