"use strict";

const BTN_SUCCESS = document.querySelector('.success');
const BTN_FAILURE = document.querySelector('.failure');
const BTN_INFO = document.querySelector('.info');
const BODY = document.querySelector('body');



BTN_SUCCESS.addEventListener('click', () => {
    alertWindow("success");
});
BTN_FAILURE.addEventListener('click', () => {
    alertWindow("failure");
});
BTN_INFO.addEventListener('click', () => {
    alertWindow("info");
});



function alertWindow(event) {
    const PARA = document.createElement('p');
    PARA.classList.add('alert');
    PARA.classList.add(event);
    PARA.innerHTML = `${event} window alert`;
    BODY.append(PARA);
    
    setTimeout(() => {
        BODY.removeChild(PARA);
    }, 5000)
}