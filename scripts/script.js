document.getElementById('main-action').onclick = function () {
    document.getElementById('cars').scrollIntoView({behavior: 'smooth'})
}
const buttons = document.getElementsByClassName('car-btn');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById('price').scrollIntoView({behavior: 'smooth'})
    }
}
document.getElementById('price-btn').onclick = function () {
    if (document.getElementById('name').value === '') {
        alert('Заполните поле имя!')
    } else if (document.getElementById('phone').value === '') {
        alert('Заполните поле телефон!')
    } else if (document.getElementById('car-name').value === '') {
        alert('Заполните поле выбранный автомобиль!')
    } else {
        alert('Спасибо за заявку, мы свяжемся с вами в ближайшее время!')
        document.querySelectorAll('.price__input').forEach((input) => {
            input.value = ''
        })
    }
}
document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price__image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.8) / 4) + 'px,' + ((event.clientY * 0.4) / 5) + 'px,0px)';
    });
    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (2.5 * window.pageYOffset) + 'px';
    })
});