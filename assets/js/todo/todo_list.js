import React,{ Component } from 'react';
import { observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import DevTools from 'mobx-react-devtools';

@observer
export default class TodoList extends Component{

    constructor(){
        super();
    }

    @autobind
    filter(e){
        this.props.store.filter = e.target.value
    }

    @autobind
    create(e){
        if(e.which === 13){
            this.props.store.createTodo(e.target.value);
            e.target.value = "";
        }
    }

    @autobind
    clear(){
        this.props.store.clearTodo();
    }

    @autobind
    toggleComplated(todo){
        todo.completed = !todo.completed
    }

    render(){
        const { todos, filter, filteredTodos } = this.props.store
        let todolist = filteredTodos.map(todo =>(
            <li key={todo.id}>
                <input type="checkbox" 
                    onChange={() => this.toggleComplated(todo)} 
                    checked={todo.completed} />
                {todo.completed ? <del>{todo.value}</del> : todo.value}
            </li>
        ));
        return(
            <div>
                <h1>Mobx Test</h1>
                <div>{filter}</div>
                <input type="text" className="create" onKeyPress={this.create}/><br />
                <input type="text" className="filter" value={filter} onChange={this.filter} />
                <ul>{ todolist }</ul>
                <button onClick={this.clear}>Clear</button>
                <DevTools />
            </div>
        )
    }
}

