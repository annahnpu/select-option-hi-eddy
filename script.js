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

//*https://www.youtube.com/watch?v=H_UiIfgNDPE

//*по наведению мыши

document.getElementById('nav').onmouseover = function(event) {
    let target = event.target;
    if (target.className == 'menu-item') {
        let s = target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display='block';
    }
}
    
    document.onmouseover = function(event) {
        let target = event.target;
        console.log(event.target);
        if (target.className!='menu-item' && target.className!='submenu'){
            closeMenu();
        }
    }

    function closeMenu() {
        let menu = document.getElementById('nav');
        let subm=document.getElementsByClassName('submenu');
        for (let i=0; i <subm.lenght; i++) {
            subm[i].style.display="none";
        }
    }


//*https://www.youtube.com/watch?v=zf59Rg_KYk8
//* Выпадающее меню


