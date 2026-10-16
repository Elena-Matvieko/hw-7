// Дан массив: [9, 8, 7, 'a', 6, 5].
// С помощью метода sort отсортируйте массив и удалите букву 'a' из массива.
//  Затем выведите массив.
const age = [9, 8, 7, 'a', 6, 5];
const result = age
.filter (item => item !=='a')
.sort((a, b) => a - b);
console.log(result)
