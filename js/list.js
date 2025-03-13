// opgave 1
let one = document.getElementById("one");
console.log(one);

let myList = document.getElementsByTagName("li");
console.log(myList);

// opgave 2
let elementTwo = document.getElementById("two");
elementTwo.setAttribute("class", "cool");

let elementThree = document.getElementById("three");
elementThree.setAttribute("hidden", "true");


// opgave 3
let elementOne = document.getElementById("one");
console.log(elementOne)
let parent = elementOne.parentNode;
console.log(parent);

let firstChild = parent.firstElementChild;
let lastChild = parent.lastElementChild;

firstChild.setAttribute("class", "first");
lastChild.setAttribute("class", "last");

console.log(firstChild);
console.log(lastChild);

// Opgave 4
let list = document.getElementById("firstul");
let newLi = document.createElement("li");
newLi.setAttribute("id", "five");
newLi.setAttribute("class", "hot");
let textNode = document.createTextNode("new item");
newLi.appendChild(textNode);
list.appendChild(newLi);

// Opgave 5
let anotherli = document.createElement("li");
anotherli.setAttribute("id","six");
anotherli.setAttribute("class","cool");
let newItemNode = document.createTextNode("Ice cubes");
anotherli.appendChild(newItemNode);

list.insertBefore(anotherli, list.children[2] );

// Opgave 6
list.removeChild(list.children[3]);




