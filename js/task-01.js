// const categories = document.querySelector('#categories');
// console.log(categories);
console.log('Number of categories:', categories.children.length);

const items = document.querySelectorAll(".item");
items.forEach(function categoria (element) { 
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Element:', element.lastElementChild.children.length);
})
