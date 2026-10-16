// Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью 
// Math.random() в диапазоне от 1 до 10.
// Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.

const originalArray = [];
for (let i = 0; i < 6; i++) {
  originalArray.push(Math.floor(Math.random() * 10) + 1);
}

// Переименовали в sum для ясности
const sum = originalArray.reduce((accumulator, current) => accumulator + current, 0);

// Исправлена опечатка и деление на длину исходного массива
const average = sum / originalArray.length;

console.log('Исходный массив:', originalArray);
console.log('Среднее арифметическое:', average);