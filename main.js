let addTodoButton = document.querySelector('#addTodo');
let inputField = document.querySelector('#inputField');
let todos = document.querySelector('#todos');

addTodoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');

    paragraph.innerText = inputField.value;
    todos.appendChild(paragraph);
    inputField.value = "";

    // line through
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })

    // dblclick remove

    paragraph.addEventListener('dblclick',function(){
        todos.removeChild(paragraph);
    })
})