const cities = ['Санкт-Петербург', 'Тегусигальпа', 'Лима', 'Урюпинск'];
const temperatures = [];

//Просим пользователя ввести температуру для всех городов:
for (let city of cities) {
  const temp = prompt(`Введите температуру для города ${city}`);
  const tempNumber = Number(temp);
  temperatures.push(tempNumber);
};

//Выводим инфу на экран:
const tempList = document.querySelector('.temp-list');
for (let i = 0; i < temperatures.length; i ++) {
  const tempItem = document.createElement('li');
  tempItem.textContent = `Температура в городе ${cities[i]}: ${temperatures[i]} °C`;
  tempList.appendChild(tempItem);
};

//Ищем минимальную и максимальную температуру:
const ascendingLine = temperatures.sort((a, b) => {
  return a - b;
});

const lowestTemp = ascendingLine[0];

const descendingLine = ascendingLine.reverse();
const highestTemp = descendingLine[0];

//Выводим и эту инфу на экран:
const minMax = document.querySelector('.min-max');
minMax.textContent = `Минимальная температура: ${lowestTemp} °C. Максимальная температура: ${highestTemp} °C.`;

