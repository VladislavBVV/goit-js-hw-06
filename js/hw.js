// 1

// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);

// const liEl = document.querySelector(ul);
// console.log(liEl)


// 2

// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = "uppercase";
// listWithId.style.fontSize = "24px";
// console.log(listWithId);

// const listWithClass = document.querySelector(".menu");
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = "tomato";
// console.log(firstMenuItem);






// 3

console.log(document);

const message = document.querySelector("#message");
console.log(message.value);

const link = document.querySelector('.btn');
link.style.fontSize = "36px";
link.style.color = 'tomato';
console.log(link);

const image = document.querySelector(".image");
console.log(image);
console.log(image.src);
image.src = "https://placeimg.com/640/480/tech";
image.width = "400";

const articleTitle = document.querySelector(".article-title");
console.log(articleTitle.textContent);
// articleTitle.textContent = "HIHIHI";
articleTitle.style.textTransform = "lowercase";
console.log(articleTitle.textContent);

const par = document.querySelector("#paragraph");
console.log(par.textContent);
par.textContent = 'oh my goodness';
console.log(par.textContent);

console.log(par.classList);
console.log(par.classList.contains("red"));
par.classList.remove('big');
console.log(par.classList);
console.log(par);
par.classList.add('old-class');
console.log(par.classList);

par.classList.forEach(cls => { 
    console.log(cls);
})

const button = document.querySelector('.btn');
button.style.backgroundColor = 'teal';
button.style.textAlign = "center";
button.style.textTransform = "uppercase";

const image1 = document.querySelector(".image1");
console.log(image1.src);
// image1.src = "https://placeimg.com/640/480/animals";
// image1.src = "https://placeimg.com/400/200/nature";
image1.width = "700";
console.log(image1.hasAttribute('src'));

console.log(document);

const saveBtn = document.querySelector('.editor button[data-action="save"]');
console.log(saveBtn.dataset.action);

const closeBtn = document.querySelector('.editor button[data-action="close"]');
console.log(closeBtn.dataset.action);


const dishes = document.querySelectorAll(".dishes > li");
dishes.forEach((dish) => {
  console.log(dish.dataset.id);
});


const heading = document.createElement("h1");
console.log(heading);
heading.textContent = "it's me";
console.log(heading.textContent);

const pict = document.createElement("img");

pict.src = "https://placeimg.com/640/480/animals";
console.log(pict.src);


const dish = document.querySelector(".dishes");


const lastItem = document.createElement('img');
// console.log(lastItem);

dish.append(pict);
console.log(dish);

dish.prepend(heading);


const altr = document.querySelector(".article-title");
console.log(altr.innerHTML);

altr.innerHTML = 'new and <span class="accent">improved</span> title';
console.log(altr.textContent);



// ???????????????????? ???????????? 



const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
console.log(technologies);

const list = document.querySelector('.list');
console.log(list);

const mark = technologies.map((technology) => 
    `<li class="list-item">${technology}</li>`).join("");
console.log(mark);

list.innerHTML = mark;

const list2 = document.querySelector('.list2');
console.log(list2);

const newtechy = ["qwer", "vbn", "poi"];
console.log(newtechy);
const mark1 = newtechy.map((newtech) => `<li class="list2">${newtech}</li>`)
    .join("");


list2.insertAdjacentHTML("beforebegin", mark1);
list2.insertAdjacentHTML("beforeend", mark1);



// ????????????

// const singBtn = document.querySelector('#single');
// const multBtn = document.querySelector('#multiple');
// const buttons = document.querySelector(".buttons");
// const text = document.querySelector("h3");

// console.log(singBtn);
// console.log(multBtn);
// console.log(text);

// singBtn.style.backgroundColor = 'teal';
// multBtn.style.backgroundColor = "teal";
// text.style.textTransform = 'uppercase';
// buttons.style.display = 'flex';

// const singleClick = () => {
//     console.log('click on single')
//     text.textContent = "?????????? ???? single";
// };

// singBtn.addEventListener("click", singleClick);


// const firstCallback = () => {
//     console.log("click on multiple");
//     text.textContent = "?????????? ???? multiple";
// };


// const secondCallback = () => {
//   console.log("click on multiple 2-???? ??????");
//   text.textContent = "?????????? ???? multiple 2-???? ??????";
// };

// const thirdCallback = () => {
//   console.log("click on multiple 3-???? ??????");
//   text.textContent = "?????????? ???? multiple 3-???? ??????";
// };


// multBtn.addEventListener("click", firstCallback);
// multBtn.addEventListener("click", secondCallback);
// multBtn.addEventListener("click", thirdCallback);

// const abtn = document.querySelector('[data-action="add"]');
// const rbtn = document.querySelector('[data-action="remove"]');
// const b = document.querySelector('#btn');

// const handleClick = () => {
//     console.log('callback');
// };

// abtn.addEventListener = ('click', () => {
//     b.addEventListener('click', handleClick);
//     console.log("click event listener was added to btn");
// });

// rbtn.addEventListener = ('click', () => {
//     b.removeEventListener('click', handleClick);
//     console.log("click event listener was removed from btn");
// });

// abtn.addEventListener("click", handleClick);
// rbtn.addEventListener("click", singleClick);


const butt = document.querySelector('.butt');
console.log(butt);

const handleClick = event => {
    console.log(event);
    console.log("event:", event);
    console.log("event type:", event.type);
    console.log("currentTarget:", event.currentTarget);
    console.log('click');
};

butt.addEventListener("click", handleClick);
    

