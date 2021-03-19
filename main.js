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