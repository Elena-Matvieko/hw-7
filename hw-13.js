// Создайте функцию, которая принимает на вход массив целых чисел,
// а возвращает массив, содержащий только отрицательные значения.
function getArray (numbers){
        return numbers.filter(num=> num<0);
}
console.log(getArray([1,2,-3,4,-5]));
