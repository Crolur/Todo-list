const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const searchInput = document.querySelector('.search input');
const search = document.querySelector('.search');
const animationForm = document.querySelector('.animation');


//changing animation
let currentAnimation;
let currentAnimatonTime;

Array.from(animationForm).forEach(element => {
    if(element.checked === true){
        currentAnimation = element.id;
        currentAnimatonTime = element.value;
    }

});

animationForm.addEventListener('click', e => {
    e.stopPropagation();
    //console.log(e.target.type);
    if(e.target.type === 'radio'){
        //console.log(e.target.id)
        //console.log(e.target.value)
        currentAnimation = e.target.id;
        currentAnimatonTime = e.target.value;
    };
})



//adding new list Elements
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    //console.log(todo);
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    };
    
});

const generateTemplate = todo => {
  const html = document.createElement('li');
  html.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'onAdd');

  const span = document.createElement('span');
  span.textContent = todo;
  html.appendChild(span);

  const i = document.createElement('i');
  i.classList.add('far', 'fa-trash-alt', 'delete');
  html.appendChild(i);

  list.appendChild(html);
};

//Removing list elements with animations
list.addEventListener('click', e => {
    //console.log(e.target);
    if(e.target.classList.contains('delete')){
        e.target.parentElement.classList.remove('onAdd');
        e.target.parentElement.classList.add(`onDelete${currentAnimation}`);
        setTimeout(() =>{
            e.target.parentElement.remove();

        }, currentAnimatonTime);
    }
    
});



//filtering
const filterTodos = term => {
    //console.log(term);
    //console.log(Array.from(list.children));
    Array.from(list.children)
        .filter( todo => {
            //console.log(todo.textContent)
            return !todo.textContent.toLowerCase().includes(term);
        })
        .forEach( todo => {
            todo.classList.add('filtered');
        });

        Array.from(list.children)
        .filter( todo => {
            //console.log(todo.textContent)
            return todo.textContent.toLowerCase().includes(term);
        })
        .forEach( todo => {
            todo.classList.remove('filtered');
        });
};

searchInput.addEventListener('input', () => {
    //console.log(search.value.trim();
    const term = searchInput.value.trim().toLowerCase();
    filterTodos(term);
});

search.addEventListener('submit', (e) => {
    e.preventDefault();
});
