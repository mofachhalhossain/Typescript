const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const arr: Array<object> = [];

const show = document.querySelector(".item-list");

form.addEventListener('submit', (e: Event)=>{
    e.preventDefault();
    const info: object = {
        type: type.value,
        from: tofrom.value,
        details: details.value,
        amount: parseInt(amount.value),
    }
    
    arr.push(info);
    form.reset();
    show?.innerHTML = '';

    arr.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = JSON.stringify(item);
        show?.appendChild(itemElement);
    })

    console.log(arr);
    

})