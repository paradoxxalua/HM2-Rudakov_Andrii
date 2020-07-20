// Вводимо значення N для першої точки проміжку
let firstNumber = +prompt('Введіть значення N: ');

// цикл для перевірки на відповідність числа до умови
while(!Number.isInteger(firstNumber) || isNaN(firstNumber) || firstNumber == ""){
    firstNumber = +prompt('Введіть значення N: ');
}

document.writeln("Перше число: " + firstNumber);

// Вводимо значення M для кінцевої точки проміжку
let secondNumber = +prompt('Введіть значення M: ');

// цикл для перевірки на відповідність числа до умови
while(!Number.isInteger(secondNumber) || isNaN(secondNumber) || secondNumber == ""){
    secondNumber = +prompt('Введіть значення M: ');
    }

document.writeln("Друге число: " + secondNumber);

// Метод для перевірки на парність    
let sumNum = 0;
const odd = confirm("Пропускати парні числа?");
    
while (firstNumber <= secondNumber) {   
    if(firstNumber % 2 === 0) {
        if(odd) {    // якщо користувач обрав "так, пропускати", то виконається цей метод і буде далі продовжувати цикл
          firstNumber++;
          continue;
        }
    }
    sumNum += firstNumber; // сумування усіх значень
    firstNumber++;
}
document.writeln("<br> Результат суми усіх чисел: " +sumNum)
