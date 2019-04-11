'use strict'

let money, time;

let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value"),
    dayBudgetValue = document.getElementsByClassName("daybudget-value"),
    levelValue = document.getElementsByClassName("level-value"),
    expensesValue = document.getElementsByClassName("expenses-value"),
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value"),
    incomeValue = document.getElementsByClassName("income-value"),
    monthaSavingValue = document.getElementsByClassName("monthsavings-value"),
    yearSavingValue = document.getElementsByClassName("yearsavings-value"),

    expensesItem = document.getElementsByClassName("expenses-item"),
    buttonApproveOne = document.getElementsByTagName("button") [0],
    buttonApproveSecond = document.getElementsByTagName("button") [1],
    buttonСalculate = document.getElementsByTagName("button") [2],
    optionalExpenses = document.querySelectorAll(".optionalexpenses-item"),

    chooseIncome = document.querySelector(".choose-income"),
    checkSavings = document.getElementById("#savings"),
    chooseSum = document.querySelector(".choose-sum"),
    choosePercent = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");

    console.log(divValue);

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
        for (let i = 1; i <= 3; i++) {
            let opt = prompt("Статья необязательный расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет вам дополнительный доход? Перечислите через запятую', '');
            if ( typeof(items) != "string" || items == '' || typeof(items) == null) {
                console.log("Вы ввели некоректные данные");
            } else {  
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что то еще?'));
                appData.income.sort();
            }
            appData.income.forEach(function(item, i) {
                alert("Способы доп. заработка: " + (i+1) + ")" + " " + item);
            });
            
    }
};

for (let key in appData) {
    console.log( "Наша программа включает в себя данные: " + key + " - " + appData[key] );
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