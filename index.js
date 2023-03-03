import "./toDoItem/toDoItem.js"

const  toDoListBtn = document.getElementById('to-do-btn');
toDoListBtn.addEventListener('click', () => addItem())

const toDoList = document.getElementById('to-do-list')

function addItem() {
    const inputValue = document.getElementById('create-to-do')
    console.log(inputValue.value)
    const toDoItem = document.createElement('to-do-item')
    toDoItem.setAttribute('task', inputValue.value)

    toDoList.append(toDoItem)
}

function changeBg() {
    console.log('change bg');
    const section = document.querySelector('section-component')
    section.setAttribute('background', 'red')
}