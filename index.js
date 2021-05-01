// grap all things that i need 

let addTodoButton = document.getElementById("AddToDO");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

addTodoButton.addEventListener("click",function(){
    // create a dynamic para 
    let para = document.createElement('p');
    // style our paragraph 
    para.classList.add('paragraph-styling')
    // add a dynamic value in it 
    para.innerText = inputField.value
    // add the paragraph to our div 
    toDoContainer.append(para);
    inputField.value = ""
    // add line through styles 
    para.addEventListener("click",function(){
        para.style.textDecoration ="line-through";
    });
    // delete action 
    para.addEventListener("dblclick",function(){
       para.remove()
    })

})