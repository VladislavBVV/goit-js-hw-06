const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingr = document.querySelector("#ingredients");
const elem = ingredients.map(ingredient => { 
  const element = document.createElement('li');
  element.classList.add('edrtyedy');
  element.textContent = ingredient;
  return element
})
console.log();
ingr.append(...elem);