// Timer feature
export class Timer {
    constructor() {
        this.seconds = 0;
        this.isRunning = false;
        this.intervalId = null;
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.intervalId = setInterval(() => {
                this.seconds++;
            }, 1000);
        }
    }

    stop() {
        if (this.isRunning) {
            clearInterval(this.intervalId);
            this.isRunning = false;
        }
    }

    reset() {
        this.stop();
        this.seconds = 0;
    }

    getTime() {
        return this.seconds;
    }
}

// Todo list feature
export class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo(text) {
        this.todos.push({
            id: Date.now(),
            text,
            completed: false
        });
    }

    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
    }

    getTodos() {
        return this.todos;
    }
}
