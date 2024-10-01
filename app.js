const buttons = document.querySelectorAll('.item');
let pass = 0;
const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');
const s4 = document.getElementById('s4');
const s5 = document.getElementById('s5');

const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');
const t4 = document.getElementById('t4');
const t5 = document.getElementById('t5');
const t6 = document.getElementById('t6');
const t7 = document.getElementById('t7');
const t8 = document.getElementById('t8');
const t9 = document.getElementById('t9');
const t0 = document.getElementById('t0');

const pin = document.querySelector('.pin');
const del = document.getElementById('delete');
const one  = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const bottom = document.getElementById('bottom')

let password = '';
let access = false;

t1.addEventListener('click', (e) => {
    password += '1'
});
t2.addEventListener('click', (e) => {
    password += '2'
});
t3.addEventListener('click', (e) => {
    password += '3'
});
t4.addEventListener('click', (e) => {
    password += '4'
});
t5.addEventListener('click', (e) => {
    password += '5'
});
t6.addEventListener('click', (e) => {
    password += '6'
});
t7.addEventListener('click', (e) => {
    password += '7'
});
t8.addEventListener('click', (e) => {
    password += '8'
});
t9.addEventListener('click', (e) => {
    password += '9'
});
t0.addEventListener('click', (e) => {
    password += '0'
});
buttons.forEach((item) => {
    item.addEventListener('click', () => {
        pass += 1;
        if (pass === 1) {
            s1.style.backgroundColor = 'white';
        }
        else if (pass === 2) {
            s2.style.backgroundColor = 'white';
        }
        else if (pass === 3) {
            s3.style.backgroundColor = 'white';
        }
        else if (pass === 4) {
            s4.style.backgroundColor = 'white';
        }
        else if (pass === 5) {
            s5.style.backgroundColor = 'white';
        }
        if (password.length === 5) {
            if (password === '00001') {
                access = true;
                pin.classList.add('active');
                s1.style.backgroundColor = 'green';
                s2.style.backgroundColor = 'green';
                s3.style.backgroundColor = 'green';
                s4.style.backgroundColor = 'green';
                s5.style.backgroundColor = 'green';
            } else {
                
                s1.style.backgroundColor = 'red';
                s2.style.backgroundColor = 'red';
                s3.style.backgroundColor = 'red';
                s4.style.backgroundColor = 'red';
                s5.style.backgroundColor = 'red';
                pin.classList.add('wrong');
                setTimeout(() => {
                    password = '';
                    pass = 0;
                    s1.style.backgroundColor = '#5C5762';
                    s2.style.backgroundColor = '#5C5762';
                    s3.style.backgroundColor = '#5C5762';
                    s4.style.backgroundColor = '#5C5762';
                    s5.style.backgroundColor = '#5C5762';
                    pin.classList.remove('wrong');
                }, 1000)
            }
            if (access === true) {
                setTimeout(() => {
                    document.querySelector('.login').style.display = 'none';
                    document.querySelector('.wrapper-home').style.display = 'block';
                    bottom.style.display = 'flex';
                }, 3000)
            }
        }
    });
});
del.addEventListener('click', () => {
    if (password.length !== 5){
        if (password.length > 0) {
            password = password.slice(0, -1);
        }
        if (pass > 0) {
            pass -= 1;  // Уменьшаем pass только если он больше 0
        }
    }


    // Сбрасываем цвет в зависимости от значения pass
    if (pass < 1) {
        s1.style.backgroundColor = '#5C5762';
    }
    if (pass < 2) {
        s2.style.backgroundColor = '#5C5762';
    }
    if (pass < 3) {
        s3.style.backgroundColor = '#5C5762';
    }
    if (pass < 4) {
        s4.style.backgroundColor = '#5C5762';
    }
    if (pass < 5) {
        s5.style.backgroundColor = '#5C5762';
    }
});
const swit = document.getElementById('switch');

swit.style.background = 'linear-gradient(rgb(59, 55, 63), #1e1f1f)'

const cards1 = document.getElementById('card-one');
const cards2 = document.getElementById('card-two');
const cards3 = document.getElementById('card-three');
const nado = document.getElementById('nado');
const wrapper = document.querySelector(".wrapper");
const wrapper2 = document.querySelector(".wrapper2");
const wrapper3 = document.getElementById('wrapper3');
const wrapper4 = document.getElementById('wrapper4');
const wrapper5 = document.getElementById('wrapper5');
const wrapper6 = document.getElementById('wrapper6');
let flag = false;

cards1.addEventListener('click', ()=>{
    if (flag === false){
        nado.style.transform = 'scale(0)';
    setTimeout(()=>{
        nado.style.transform = 'scale(1)'
        nado.style.justifyContent = 'center';
        cards1.style.width = '95%'
        cards2.style.display = 'none'
        cards3.style.display = 'none'
        wrapper.style.display = 'none'
        wrapper2.style.display = 'flex'
        flag = true;
    },500)
    }
    if (flag === true){
        nado.style.transform = 'scale(0)';
        setTimeout(()=>{
            nado.style.justifyContent = 'start';
            nado.style.transform = 'scale(1)'
            cards1.style.width = '30%'
            cards2.style.display = 'flex'
        cards3.style.display = 'flex'
        wrapper.style.display = 'flex'
        wrapper2.style.display = 'none'
        flag = false;
        },500)
    }
});
cards2.addEventListener('click', ()=>{
    if (flag === false){
        nado.style.transform = 'scale(0)';
    setTimeout(()=>{
        nado.style.transform = 'scale(1)'
        nado.style.justifyContent = 'center';
        cards2.style.width = '95%'
        cards1.style.display = 'none'
        cards3.style.display = 'none'
        wrapper3.style.display = 'none'
        wrapper4.style.display = 'flex'
        flag = true;
    },500)
    }
    if (flag === true){
        nado.style.transform = 'scale(0)';
        setTimeout(()=>{
            nado.style.transform = 'scale(1)'
            nado.style.justifyContent = 'start';
            cards2.style.width = '30%'
            cards1.style.display = 'flex'
        cards3.style.display = 'flex'
        wrapper3.style.display = 'flex'
        wrapper4.style.display = 'none'
        flag = false;
        },500)
    }
});
cards3.addEventListener('click', ()=>{
    if (flag === false){
        nado.style.transform = 'scale(0)';
    setTimeout(()=>{
        nado.style.transform = 'scale(1)'
        nado.style.justifyContent = 'center';
        cards3.style.width = '95%'
        cards2.style.display = 'none'
        cards1.style.display = 'none'
        wrapper5.style.display = 'none'
        wrapper6.style.display = 'flex'
        flag = true;
    },500)
    }
    if (flag === true){
        nado.style.transform = 'scale(0)';
        setTimeout(()=>{
            nado.style.transform = 'scale(1)'
            nado.style.justifyContent = 'start';
            cards3.style.width = '30%'
            cards2.style.display = 'flex'
        cards1.style.display = 'flex'
        wrapper5.style.display = 'flex'
        wrapper6.style.display = 'none'
        flag = false;
        },500)
    }
});

const height2 = document.getElementById('height2');
const click = document.getElementById('click');
const wrap2 = document.getElementById('wrap2');

click.addEventListener('click', () => {
    if (!height2.classList.contains('show')) {
        // Элемент скрыт, анимируем его появление

        // Получаем реальную высоту содержимого
        let realHeight = height2.scrollHeight + 'px';
        
        // Устанавливаем текущую высоту для анимации
        height2.style.height = '0'; 
        
        // Добавляем класс с transition, затем плавно увеличиваем высоту
        height2.classList.add('hmin2');
        
        // Используем setTimeout для задержки, чтобы браузер применил предыдущие изменения
        setTimeout(() => {
            height2.style.height = realHeight; // Анимируем до реальной высоты
        }, 10);

        // Когда анимация завершена, устанавливаем auto
        height2.addEventListener('transitionend', function transitionEnd() {
            height2.style.height = 'auto'; // Устанавливаем высоту auto после анимации
            height2.classList.add('show'); // Добавляем класс, чтобы элемент оставался видимым
            height2.removeEventListener('transitionend', transitionEnd); // Удаляем слушатель после выполнения
        });

    } else {
        // Элемент видим, анимируем его скрытие
        height2.style.height = height2.scrollHeight + 'px'; // Устанавливаем текущую высоту
        
        // Задержка для применения стиля перед сворачиванием
        setTimeout(() => {
            height2.style.height = '0'; // Анимируем сворачивание до 0
        }, 10);

        // После завершения анимации удаляем класс .show
        height2.addEventListener('transitionend', function transitionEnd() {
            height2.classList.remove('show');
            height2.removeEventListener('transitionend', transitionEnd);
        });
    }
    
    wrap2.classList.toggle('rotate2'); // Добавляем/убираем анимацию вращения
});

const zaza = document.querySelector('.zaza')
let accountCounter = 0; // Счётчик для отслеживания количества добавленных дивов
const addAccount = document.getElementById('addAccount');

addAccount.addEventListener('click', function() {
  
    if(accountCounter < 7){
        addAccount.style.transform = 'scale(1.1)'
        addAccount.style.backgroundColor = 'green'
        setTimeout(() => {
         addAccount.style.transform = 'scale(1)'
         addAccount.style.backgroundColor = '#3E3E3E'
        },300);
 // Генерируем случайный номер аккаунта (от 1000000 до 9999999)
 const accountNumber = `№ ${Math.floor(Math.random() * 9000000) + 1000000}`;

 // Генерируем случайную дату (между текущим годом и +5 лет)
 const currentYear = new Date().getFullYear();
 const randomYear = currentYear + Math.floor(Math.random() * 5) + 1;
 const randomMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
 const randomDay = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
 const expiryDate = `${randomMonth}/${randomDay}/${randomYear}`;

 // Генерируем случайный баланс (от $50 до $5000)
 const balance = `$ 00,00`;

 // Генерируем случайную ставку (от 1% до 10%)
 const rate = `${(Math.random() * (10 - 1) + 1).toFixed(1)}%`;

 // создаем новый div с данными аккаунта
 const newAccountDiv = document.createElement('div');
 newAccountDiv.classList.add('account');

 // Определяем оттенок тёмного серого в зависимости от счётчика
 let grayShade = 80 - (accountCounter * 14); // Уменьшаем яркость с каждым новым div
 
 newAccountDiv.style.backgroundColor = `rgb(${grayShade}, ${grayShade}, ${grayShade})`;

 newAccountDiv.innerHTML = `
     <div><img class="cc1" src="img/creditcard-face.svg" alt=""></div>
     <div><span>Account ${accountNumber}</span><span>Expires ${expiryDate}</span></div>
     <div><span>${balance}</span><span>Rate ${rate}</span></div>
 `;

 // добавляем новый div в контейнер
 document.getElementById('height2').appendChild(newAccountDiv);

 // Увеличиваем счётчик для следующего div
 accountCounter++;
    }else{
        setTimeout(() => {
            alert('Вы не можете иметь больше 7 активным счета')
        }, 100);
        addAccount.style.transform = 'scale(1.1)'
        addAccount.style.backgroundColor = 'red'
        setTimeout(() => {
         addAccount.style.transform = 'scale(1)'
         addAccount.style.backgroundColor = '#3E3E3E'
        },300);
    }
    
});

const height = document.querySelector('.height');
const heightclick = document.getElementById('height-click');
const wrap = document.getElementById('wrapIMG')

heightclick.addEventListener('click', ()=>{
    height.classList.toggle('hmin')
    wrap.classList.toggle('rotate')
});

const box = document.getElementById('box').addEventListener('click',()=>{
    alert('ты лох у тебя этого нет')
})
