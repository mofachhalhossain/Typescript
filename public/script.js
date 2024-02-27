"use strict";
const form = document.querySelector('.new-item-form');
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const arr = [];
const show = document.querySelector(".item-list");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const info = {
        type: type.value,
        from: tofrom.value,
        details: details.value,
        amount: parseInt(amount.value),
    };
    arr.push(info);
    form.reset();
    show === null || show === void 0 ? void 0 : show.innerHTML = '';
    arr.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = JSON.stringify(item);
        show === null || show === void 0 ? void 0 : show.appendChild(itemElement);
    });
    console.log(arr);
});
