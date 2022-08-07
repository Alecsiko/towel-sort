
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined) {
        return [];
    };

    let arr = matrix.map((value, index) => index % 2 != 0 ? matrix[index].reverse() : matrix[index]);
    
    return arr.flat();
}
