import React, { Component } from "react";

class TodoItems extends Component {
	constructor(props) {
		super(props);
		this.createTasks = this.createTasks.bind(this);
	}

	createTasks(item) {
		console.log(item)
		const str = item.text;
		let strCopy = str;
		const list = [];

		while (strCopy) {
			const text = strCopy.split(/\d+/, 1)[0];
			list.push(text);
			const match = strCopy.match(/\d+/);
			if (!match) {
				break;
			}
			list.push(match[0]);
			strCopy = strCopy.substring(match.index + match[0].length);
		}

		// let result = list.map((e, index) => index % 2 === 0 ? e : '<span class=digit>' + e + '</span>')

		return <li>
			{list.map((elem, index) => index % 2 === 0
				? elem
				: <span class="digit">{elem}</span>
			)}</li>
	}
	delete(key) {
		this.props.delete(key);
	}
	render() {
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.createTasks);

		return (
			<ul className="theList">
				{listItems}
			</ul>
		);
	}
};

export default TodoItems;
