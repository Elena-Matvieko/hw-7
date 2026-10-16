// Дан массив: [[1, 2, 3],[4, 5, 6]].
// Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].
const numbers = [[1, 2, 3],[4, 5, 6]];
const result = [...numbers[0], ...numbers[1]];
console.log(result);