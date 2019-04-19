let age = document.getElementById('age');

let user = {
    name: "Вася",
    surname: "Пупкин",
    value: age.value
};

function showUser(surname, name) {
    surname = this.surname;
    name = this.name;
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser.apply(user);