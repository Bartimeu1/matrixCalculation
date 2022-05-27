function multiplyMatrix(A,B) {
    // определяем переменные
    let result = [];
    const rowsA = A.length;
    const rowsB = B.length;
    const colsA = A[0].length;
    const colsB = B[0].length;
    // проверка colsA = rowsB
    if (colsA === rowsB) {
        // задаём длину массива-результата
        for (let i = 0; i <= rowsA; i++) {
            result[i] = [];
        };
        // Вычисление
        for (let i = 0; i < colsB; i++) {
            for (let j = 0; j < rowsA; j++) {
                let value = 0;
                for (let x = 0; x < rowsB; x++) {
                    value += A[j][x] * B[x][i];
                }
                result[j][i] = value;
            }
        }
        return result;
    } else return false;
};