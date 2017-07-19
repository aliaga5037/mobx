import { observable, computed, action, autorun } from 'mobx';
class Todo{
    @observable value;
    @observable id = new Date();
    @observable completed = false;

    constructor(value){
        this.value = value;
    }
}

class TodoStore{
    @observable todos = [];
    @observable filter = '';
    @computed get filteredTodos(){
        var mf = new RegExp(this.filter, 'i');
        return this.todos.filter(todo => !this.filter || mf.test(todo.value));
    }

    @computed get incomplatedTodo(){
        return this.todos.filter(todo => !todo.completed);
    }

    @action createTodo(e){
        this.todos.push(new Todo(e));
    }

    @action clearTodo(){
        this.todos.replace(this.incomplatedTodo);
    }    

}

const store = window.store = new TodoStore();

autorun(() => {
    console.log("Remaining:", store.todos
        .filter(todo => !todo.completed)
        .map(todo => todo.value)
        .join(", ")
    );
});

export default store;