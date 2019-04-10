'use strict'

let money, time;


function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();

let optionalExpenses = {},
    income = [],
    savings = false;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses,
    income,
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
            if ( (typeof(a)) === "string" && (typeof(a)) !== null && (typeof(b)) !== null && a != "" && b != "" && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert(appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Нормальный уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Неверный тип данных");
        } 
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = (save/100/12*percent).toFixed();
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome) 
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 3; i++) {
            let opt = prompt("Статья необязательный расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        for (let i=0 ; i < 1; i++) {
        let items = prompt('Что принесет вам дополнительный доход? Перечислите через запятую', '');
            if ( (typeof(items)) === "string" && items !== '' && (typeof(items)) !== null) {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что то еще?'));
                appData.income.sort();
                appData.income.forEach(function(item, i) {
                    alert("Способы доп. заработка: " + ++i + ")" + " " + item);
                  });
            } else {
                i--;
            }
        }
    }
};

for (let key in appData) {
    alert( appData[key] );
}

console.log(appData);










// let i = 0;
//     while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//         i++;
//     if ( (typeof(a)) === "string" && (typeof(a)) !== null && (typeof(b)) !== null && a != "" && b != "" && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//     i--;
//     }
// }

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
// } while (i < 2);

// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// };

// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// };
// delete options.bool;
// console.log(options);

// for (let key in options) {
//     console.log('Свойство ' + key + ' имеет значение ' + options[key])
// }
// console.log(Object.keys(options).length);

// let arr = ["first", 2, 3, "four", 5];

// arr.forEach(function(item, i, mass){
//     console.log(i + ': ' + item + " (массив : " + mass + ')');
// });