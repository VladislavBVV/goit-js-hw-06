const counter = {
    value: 0,
    increment() {
        console.log('increment ->', this);
        this.value += 1;
    },
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;
    },
};



const decrBtn = document.querySelector('[data-action = "decrement"]');
const incrBtn = document.querySelector('[data-action = "increment"]');
const valueEl = document.querySelector('#value');


console.log(decrBtn);
console.log(incrBtn);
console.log(valueEl);

// decrBtn.textContent = '-1';

decrBtn.addEventListener('click', function () {
    console.log('Кликнули на декремент');

    counter.decrement();
    console.log(counter);
    valueEl.textContent = counter.value;




});

incrBtn.addEventListener('click', function () {
    console.log("Кликнули на инкремент");
    
     counter.increment();
    console.log(counter);
     valueEl.textContent = counter.value;

});

