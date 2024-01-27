console.log('Привет')

let screenPrice = 10000;
let percentage = 10;
console.log(screenPrice);
console.log(percentage);

let titleProject = prompt('Название проекта?')
console.log(titleProject);

let screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями')
console.log(screensValue);

let responsive = prompt('Нужен ли респонсивный сайт?');
console.log(responsive);

let service1 = prompt('Какой сервис нужен?');
console.log(service1);

let servicePrice1 = +prompt('Сколько это будет стоить?');
console.log(servicePrice1);

let service2 = prompt('Какой еще сервис тебе нужен?');
console.log(service2);

let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?');
console.log(servicePrice2);

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice, 'Полная стоимость');

let percentResult = +(fullPrice * (percentage / 100));
console.log(percentResult, 'Процент подрядчику');

let servicePercentPrice = fullPrice - percentResult;
console.log(Math.ceil(servicePercentPrice), 'Итоговая сумма проекта за вычетом % подрядчику')

// Предоставление скидки

if (fullPrice > 50000) {
    console.log('Делаем скидку 10%');
} else if (fullPrice > 20000 && fullPrice < 50000) {
    console.log('Делаем скидку 5%');
} else if (fullPrice > 0 && fullPrice < 20000) {
    console.log('Скидка не предусмотрена');
} else if (fullPrice < 0) {
    console.log('Что-то пошло не так');
} else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
    console.log('Проверка на строгое равенство');

}
