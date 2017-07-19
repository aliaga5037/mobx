import React from "react";
import ReactDOM,{ render } from 'react-dom';
import Todo from './todo_list'
import TodoStore from './store';

ReactDOM.render(<Todo store={TodoStore}/>, document.getElementById('todo'));

