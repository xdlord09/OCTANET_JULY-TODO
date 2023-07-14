const input = document.querySelector('.input-list');
const button = document.querySelector('.button-list');
const list = document.querySelector('.list-group');
const divs = document.querySelectorAll('.search');
const buts = document.querySelector('.but'); 
const search = document.querySelector('#search-input');

button.addEventListener('click', addtodo);
list.addEventListener('click',deletes);

function addtodo(event){
    event.preventDefault();

    const listDiv = document.createElement('div');
    listDiv.classList.add('lists'); //class to the div element

    const addList = document.createElement('li');
    addList.innerHTML = input.value;
    addList.classList.add('add-list');
    listDiv.appendChild(addList);
    
    const buttonAdd = document.createElement('button');
    buttonAdd.innerHTML = '<i class=\'bx bxs-check-circle bx-md\'></i>';
    buttonAdd.classList.add('add-btn');
    listDiv.appendChild(buttonAdd);

    const buttonRemove = document.createElement('button');
    buttonRemove.innerHTML = '<i class=\'bx bxs-trash bx-md\' ></i>';
    buttonRemove.classList.add('remove-btn');
    listDiv.appendChild(buttonRemove);

    list.appendChild(listDiv);
}

function deletes(e){
    if(e.target.classList.contains('bxs-trash')){
        e.target.parentElement.parentElement.remove();
    }
    if(e.target.classList.contains('bxs-check-circle')){
        e.target.closest('.lists').classList.toggle('check');
    }
}

buts.addEventListener('click',function(e){
    e.preventDefault();
    divs[0].classList.toggle('expand'); //first element of div i.e input
    
})

const filter = (word) =>{
Array.from(list.children)
.forEach(lists => {
    if(lists.textContent.toLowerCase().includes(word)){
        lists.classList.remove('remove');
    }
    else{
        lists.classList.add('remove');
    }
})
}

search.addEventListener('keyup',()=>{
    const word = search.value.trim().toLowerCase();
    filter(word);
})