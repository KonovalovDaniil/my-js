'use strict'

let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let optionalExpenses = {},
    income = [],
    savings = false;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses,
    income,
    savings
};


// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//     if ( (typeof(a)) === "string" && (typeof(a)) !== null && (typeof(b)) !== null && a != "" && b != "" && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         i = 0;
//     }
    
// }

let i = 0;
    while (i < 2) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");
            i++;
        if ( (typeof(a)) === "string" && (typeof(a)) !== null && (typeof(b)) !== null && a != "" && b != "" && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
        i--;
        }
    }

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");0
//         i++;
//     if ( (typeof(a)) === "string" && (typeof(a)) !== null && (typeof(b)) !== null && a != "" && b != "" && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
//     } while (i < 2);




console.log(appData);

appData.moneyPerDay = appData.budget / 30;

alert(Math.round(appData.moneyPerDay) );

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Нормальный уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Неверный тип данных");
}