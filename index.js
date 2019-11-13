var mainContainer = document.getElementById('main-container'); 
//console.log(mainContainer); 

var list = document.querySelector('ul'); 
//console.log(list);

var listItems = document.getElementsByTagName('li'); 
//console.log(listItems); 

var listItems2 = document.getElementsByClassName('todo-item');
//console.log(listItems2); 

var listItems3 = document.querySelectorAll('ul, to-do item'); 
console.log(listItems3[0] .firstChild.nodeValue); 

listItems3[0].firstChild.nodevalue = 'something else';
console.log(listItems3[0]); 

function addTodo() {
    event.preventDefault(); 
    var newItem = event.target.newTodo.value;
    console.log.apply('newItem'); 
    var newlistItem = document.createElement('li'); 
    newlistItem.firstChild.nodeValue = newItem; 

    list.appendChild(newlistItem); 
}