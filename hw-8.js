// Дана строка: 'abcdef'.
// Выведите в консоль 'fedcba'.
const str = 'abcdef';
 const reversedStr = str.split('').reverse().join('');
  console.log(reversedStr); // Выведет: fedcba