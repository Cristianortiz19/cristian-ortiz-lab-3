class ToDoItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.task = this.getAttribute('task');
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="styles.css">
        <li class="item">
        <input type="checkbox" name="task1" id="task1">
        <label for="task1">${this.task}</label>
        <button>delete</button>
        </li>`
    }
}

customElements.define('to-do-item', ToDoItem)
export default ToDoItem;

