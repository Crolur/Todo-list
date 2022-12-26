const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const searchInput = document.querySelector('.search input');
const search = document.querySelector('.search');
//console.log(addForm);

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

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    //console.log(todo);
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    };
    
});

list.addEventListener('click', e => {
    //console.log(e.target);
    if(e.target.classList.contains('delete')){
        e.target.parentElement.classList.remove('onAdd');
        e.target.parentElement.classList.add('onDelete');
        setTimeout(() =>{
            e.target.parentElement.remove();

        }, 500);
    }
    
});

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