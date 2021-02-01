export default class MatrixOperation {
  transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const grid = [];
    for (let j = 0; j < cols; j++) {
      grid[j] = Array(rows);
    }
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        grid[j][i] = matrix[i][j];
      }
    }
    return grid;
  }

  upperDiagonalOfMatrix(matrix) {
    if (matrix.length !== matrix[0].length) return [];
    const result = [];
    for (let j = 0; j < matrix[0].length; j++) {
      result[j] = new Array();
    }

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (j >= i) result[i][j] = matrix[i][j];
        else result[i][j] = 0;
      }
    }
    return result;
  }

  lowerDiagonalOfMatrix(matrix) {
    if (matrix.length !== matrix[0].length) return [];
    const result = [];
    for (let j = 0; j < matrix[0].length; j++) {
      result[j] = new Array();
    }

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (j <= i) result[i][j] = matrix[i][j];
        else result[i][j] = 0;
      }
    }
    return result;
  }
}
