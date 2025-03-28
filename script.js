const helloIvan = prompt ("Введите ваше имя");
console.log (helloIvan);
const myNumber = prompt ("Какое ваше число?");
if (myNumber == 0) {
    alert ("Ваще число равно нулю");
}
if (myNumber > 0) {
    alert ("Ваше число является положительным");
}
if (myNumber < 0) {
    alert ("Ваше число является отрицательным");
}




const acceptAge = prompt ("Ваш возраст");
if (acceptAge >= 18) {
    const acceptAge = confirm ("Вы точно хотите продолжить?");
    if (acceptAge == true) {
        alert ("Добро пожаловать!");
    }
    if (acceptAge == false) {
        alert ("Доступ закрыт");
    }
}

if (acceptAge < 18) {
    alert ("Доступ запрещен");
}



const x = prompt ("Ваше первое число");
const y = prompt ("Ваше второе число");
if (x == y) {
    alert ("Числа равны");
}
if (x > y) {
    alert ("Первое число больше второго");
}
if (x < y) {
    alert ("Второе число больше первого");
}
const z = prompt ("Ваше третье число");
const b = prompt ("Ваше четвертое число");
if (z === b) {
    alert ("Числа равны");
}
if (z > b) {
    alert ("Третья число больше второго");
}
if (z < b) {
    alert (" число больше первого");
}

