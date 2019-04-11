let menuItems = document.querySelectorAll(".menu-item"),
    menuItemOne = document.createElement("li"),
    menu = document.querySelector(".menu"),
    body = document.querySelector("body"),
    title = document.getElementById("title"),
    column = document.querySelectorAll(".column")[1],
    adv = document.querySelector(".adv"),
    blockOpinion = document.getElementById("prompt"),
    opinion = prompt("Что вы думаете о технике Apple?");

    //Меню

menuItemOne.classList.add("menu-item");
menu.appendChild(menuItemOne);
menuItemOne.innerHTML = "Пятый элемент";

    //Бэкграунд

body.style.backgroundImage = "url(img/appletrue.jpg)";

    //Титульник

title.innerHTML = "Продаем только подлинную технику Apple";

    //Удалние рекламы

column.removeChild(adv);

    //Prompt 

blockOpinion.textContent = opinion;


