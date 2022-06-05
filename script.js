//*year-select  https://www.hi-eddy.com/lessons/create-year-select
const yearSelectElement = document.getElementById('year-select');

const optionElement = document.createElement('option');
optionElement.setAttribute('value', 1909);
optionElement.innerHTML = 1909;

const optionElement2 = document.createElement('option');
optionElement2.setAttribute('value', 1910);
optionElement2.innerHTML = 1910;

yearSelectElement.insertAdjacentElement('beforeEnd', optionElement);
yearSelectElement.insertAdjacentElement('beforeEnd', optionElement2);

for (let year = 1911; year <= 2022; year++) {
    const optionElement = document.createElement('option');
    optionElement.setAttribute('value', year);
    optionElement.innerHTML = year;

    yearSelectElement.insertAdjacentElement('beforeEnd', optionElement);
}

//*day-select
const daySelectElement = document.getElementById('day-select');

const optionElement3 = document.createElement('option');
optionElement3.setAttribute('value', 3);
optionElement3.innerHTML = 3;


for (let day = 3; day <= 31; day++) {
    const optionElement = document.createElement('option');
    optionElement.setAttribute('value', day);
    optionElement.innerHTML = day;

    daySelectElement.insertAdjacentElement('beforeEnd', optionElement);
}

//* month+year https://ru.stackoverflow.com/questions/774065/%D0%92%D1%8B%D0%BF%D0%B0%D0%B4%D0%B0%D1%8E%D1%89%D0%B8%D0%B9-%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA-%D0%B4%D0%B0%D1%82%D1%8B-%D0%BD%D0%B0-javascript

