// Создайте функцию, которая принимает на вход массив строк,
// а возвращает массив длины слов.
 // strings - Массив строк.

 function getWordLengths(strings) {
   return strings.map(word => word.length);
}

console.log(getWordLengths(['help', 'world'])); 