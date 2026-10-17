// Дан массив: [1, 5, 4, 10, 0, 3].
// Найдите индекс значения 4 в этом массиве.

const numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]===4){ 
    console.log(i);
    break;
}
}


