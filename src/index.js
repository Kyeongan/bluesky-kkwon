import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from "./TodoList";


var destination = document.querySelector('#container');


ReactDOM.render(
	<div>
		Todo list react example, it highlights the digits.
		<TodoList />
	</div>,
	destination
);
