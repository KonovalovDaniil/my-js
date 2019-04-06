'use strict';

let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let expenseItemOne = prompt("Введите обязательную статью расходов в этом месяце"),
    expenseItemSecond = prompt("Введите обязательную статью расходов в этом месяце"),
    priceOne = prompt("Во сколько обойдется?"),
    priceSecond = prompt("Во сколько обойдется?");

let optionalExpenses = {},
    income = [],
    savings = false;

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        expenseItemOne : priceOne,
        expenseItemSecond : priceSecond
    },
    optionalExpenses,
    income,
    savings
};

console.log(appData);

alert( Math.round(money/30) );