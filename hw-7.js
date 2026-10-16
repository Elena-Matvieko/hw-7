// Дан массив: [9, 8, 7, 6, 5].
// Попросите пользователя угадать число с помощью метода prompt.
// Если значение, которое ввел пользователь, есть в массиве, выведите в alert «Угадал», в противном случае — «Не угадал».

let numbers = [9, 8, 7, 6, 5];
let userGuess = Number(prompt('Угадайте число из массива:'));

if (userGuess !==null && !isNaN(userGuess) ) {
    if (numbers.includes(userGuess)) {
alert('Угадал');
    } else {
alert('Не угадал'); 
    }
}

 