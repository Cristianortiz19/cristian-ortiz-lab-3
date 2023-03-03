class ToDoItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.task = this.getAttribute('task');
        this.render();
        const button = this.shadowRoot.querySelector('button')
        button.addEventListener('click', () => this.deleteSelf())
    }

    static get observedAttributes() {
        return ['task']
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    deleteSelf() {
        this.remove()
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

