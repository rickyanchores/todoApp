let addTodoButton = document.querySelector('#addTodo');
let inputField = document.querySelector('#inputField');
let todos = document.querySelector('#todos');

addTodoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');

    paragraph.innerText = inputField.value;
    todos.appendChild(paragraph);
    inputField.value = "";

    // Hover Highlight mouseover
    paragraph.addEventListener('mouseover', function(){
        paragraph.style.color = "coral";    
    })

    // Hover Highlight mouseout
    paragraph.addEventListener('mouseout', function(){
        paragraph.style.color = "";    
    })

    // line through
    paragraph.addEventListener('click', function(){
        paragraph.style.backgroundColor = "coral";
    })

    // dblclick remove

    paragraph.addEventListener('dblclick',function(){
        todos.removeChild(paragraph);
    })
})


// THEMES

let light = document.querySelector('.light');
let normal = document.querySelector('.normal');
let dark = document.querySelector('.dark');

light.addEventListener('mouseover', () => {
    document.body.style.background = "silver";
    document.body.style.color = "#333";
    document.body.style.transition = "0.5s ease-in";
})
normal.addEventListener('mouseover', () => {
    document.body.style.background = "";
    document.body.style.color = "";
    
})
dark.addEventListener('mouseover', () => {
    document.body.style.background = "black";
    document.body.style.color = "teal";
    addTodoButton.body.style.background = "teal";
})