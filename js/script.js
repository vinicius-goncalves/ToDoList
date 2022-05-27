window.addEventListener('DOMContentLoaded', () => {
    const collapsible = document.querySelectorAll('.collapsible')
    M.Collapsible.init(collapsible)

    const modal = document.querySelectorAll('.modal')
    M.Modal.init(modal)

})

const newItemModalContainer = document.querySelector('[data-js="new-item-container"]')
const todoList = document.querySelector('[data-todo="todos-list"]')

const newItemTitle = document.querySelector('#new-item')
const newItemContent = document.querySelector('#new-item-content')

const informationContainer = document.querySelectorAll('.information-container')

let indexItem = 0

window.addEventListener('load', () => {
    informationContainer[1].innerHTML += '<h3 class="center-align">Please, insert a item to continue</h3>'
    todoList.style.display = 'none'
})

newItemModalContainer.addEventListener('click', (event) => {
    
    informationContainer[0].firstChild.textContent = ''

    const newItemTitleValue = newItemTitle.value
    const newItemTitleContent = newItemContent.value


    if(event.target.dataset.add) {
        if(!newItemTitleValue || !newItemTitleContent) {
            informationContainer[0].firstChild.textContent = 'Please, insert a valid term'
            return 
        }


        informationContainer[0].firstChild.textContent = "You've inserted the item succefully"
        indexItem++

        const html = 
        `<li data-id="${indexItem}">
            <div class="collapsible-header">
                ${newItemTitle.value} 
                <i class="material-icons right">event</i>
            </div>
            <div class="collapsible-body">
                ${newItemContent.value}
                <a href="#" class="btn red waves-effect waves-dark right" data-remove="${indexItem}">Delete Item<i class="material-icons right">delete</i></a>
            </div>
        </li>`

        todoList.innerHTML += html
        
        if(todoList.childNodes.length >= 1) {
            todoList.style.display = 'block'
            informationContainer[1].innerHTML = ''
        }
    }
})

todoList.addEventListener('click', (event) => {
    const removeButton = event.target.dataset.remove

    if(removeButton) {
        const itemRemove = document.querySelector(`[data-id="${removeButton}"]`)
        itemRemove.remove()

        if(todoList.childNodes.length === 1) {
            informationContainer[1].innerHTML = `<h3 class="center-align">Please, insert a new item to continue.</h3>`
            todoList.style.display = 'none'
        }else {
            todoList.style.display = 'block'
        }
    }
})