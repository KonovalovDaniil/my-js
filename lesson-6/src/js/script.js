'use strict'



let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthaSavingValue = document.getElementsByClassName("monthsavings-value")[0],
    yearSavingValue = document.getElementsByClassName("yearsavings-value")[0],

    expensesItem = document.getElementsByClassName("expenses-item"),
    buttonApproveOne = document.getElementsByTagName("button") [0],
    buttonApproveSecond = document.getElementsByTagName("button") [1],
    buttonСalculate = document.getElementsByTagName("button") [2],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),

    chooseIncome = document.querySelector(".choose-income"),
    checkSavings = document.getElementById("savings"),
    chooseSum = document.querySelector(".choose-sum"),
    choosePercent = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");

    let money, 
        time;

        buttonApproveOne.setAttribute("disabled", "disabled");
        buttonApproveSecond.setAttribute("disabled", "disabled");
        buttonСalculate.setAttribute("disabled", "disabled");

startBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");

    buttonApproveOne.removeAttribute("disabled");
    buttonApproveSecond.removeAttribute("disabled");
    buttonСalculate.removeAttribute("disabled");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});


    let sumExpensis = 0;


buttonApproveOne.addEventListener('click', function() {
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if ( (typeof(a)) === "string" && (typeof(a)) !== null && (typeof(b)) !== null && a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
            sumExpensis += +b;
            expensesValue.textContent = sumExpensis;
        } else {
            i--;
        }
    }
});



buttonApproveSecond.addEventListener("click", function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
    }
});


buttonСalculate.addEventListener("click", function() {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - sumExpensis) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Нормальный уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Неверный тип данных";
        } 

    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }
});


chooseIncome.addEventListener("input", function(){
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener("click", function(){
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener("input", function(){
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
        appData.monthIncome = (sum/100/12*percent).toFixed(1);
        appData.yearIncome = (sum/100*percent).toFixed(1);
        monthaSavingValue.textContent = appData.monthValue;
        yearSavingValue.textContent = appData.yearValue;
    }
});

choosePercent.addEventListener("input", function(){
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
    appData.monthIncome = (sum/100/12*percent).toFixed(1);
    appData.yearIncome = (sum/100*percent).toFixed(1);
    monthaSavingValue.textContent = appData.monthIncome;
    yearSavingValue.textContent = appData.yearIncome;
    }
});

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