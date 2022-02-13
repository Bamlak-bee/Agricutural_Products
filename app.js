let fruits_el = document.querySelector('.fruits');
// let dairy_el = document.querySelector('.fruits');
// let vegetables_el = document.querySelector('.fruits');
// let grains_el = document.querySelector('.fruits');

let textBox_el = document.querySelector('.textBox')

let category_el = document.querySelector('.catgegories');
category_el.addEventListener('click', () => {
    category_el.classList.toggle('active');


});


function show() {
    // textBox_el.value = anything;
    window.location.href = 'http://reviews.html';
    console.log('ok');

};


