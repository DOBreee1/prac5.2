// Виведення всіх вісім констант
document.getElementById('output').innerHTML += 'Константи: <br>';
document.getElementById('output').innerHTML += '1. Значення константи е = ' + Math.E + '<br>';
document.getElementById('output').innerHTML += '2. Значення константи π = ' + Math.PI + '<br>';
document.getElementById('output').innerHTML += '3. Десятковий логарифм постійної Ейлера (е) = ' + Math.log10(Math.E) + '<br>';
document.getElementById('output').innerHTML += '4. Двійковий логарифм постійної Ейлера (е) = ' + Math.log2(Math.E) + '<br>';
document.getElementById('output').innerHTML += '5. Натуральний логарифм числа 10 = ' + Math.log(10) + '<br>';
document.getElementById('output').innerHTML += '6. Натуральний логарифм числа 2 = ' + Math.log(2) + '<br>';
document.getElementById('output').innerHTML += '7. Корінь квадратний із двох = ' + Math.sqrt(2) + '<br>';
document.getElementById('output').innerHTML += '8. Корінь квадратний з однієї другої = ' + Math.sqrt(1/2) + '<br><br>';

// Виведення функцій за номером у списку групи
var N = 21; // Номер у списку групи

document.getElementById('output').innerHTML += 'Функції: <br>';
document.getElementById('output').innerHTML += 'Результат округлення числа -3.1234 у меншу сторону: y = ' + Math.floor(-3.1234) + '<br>';
document.getElementById('output').innerHTML += 'Результат округлення числа 1,44 за правилами арифметики: y = ' + Math.round(1.44) + '<br>';
document.getElementById('output').innerHTML += 'Результат округлення числа 1,54 за правилами арифметики: y = ' + Math.round(1.54) + '<br>';

// Перевірка максимального та мінімального значень
var x = 4, y = 2;
document.getElementById('output').innerHTML += 'Вибір найбільшого із двох чисел 4 й 2: y = ' + Math.max(x, y) + '<br>';
document.getElementById('output').innerHTML += 'Вибір найменшого із двох чисел 4 й 2: y = ' + Math.min(x, y) + '<br>';

// Генератор випадкового числа
document.getElementById('output').innerHTML += '<br>Генератор випадкового числа: <br>';
document.getElementById('output').innerHTML += 'Випадкове число в інтервалі [0;1]: y = ' + Math.random() + '<br>';