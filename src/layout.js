import { View } from 'base';

import { AddNewView } from './add-new';

import { toDoList } from './todo/todo-list';

import { ControlsView } from './controls/controls-view';

import { ToDoListView } from './todo/todo-list-view';

import template from './layout.html';

export const Layout = View.extend({
	template,
	regions:{
		'controls':'.controls',
		'todo':'.todo',
		'addnew':'.addnew'
	},

	onRender(){
		this.showControls();
		this.showList();
		this.showAddnew();
	},

	showControls(){
		let view = new ControlsView({ list: toDoList });
		this.showChildView('controls', view);
	},

	showList(){
		let view = new ToDoListView({ collection: toDoList });
		this.showChildView('todo', view);
	},

	showAddnew(){
		let view = new AddNewView();
		this.showChildView('addnew', view);
	},

	childViewEvents:{
		'add:new:toDo'(text) {
			toDoList.addToDo(text);
		}
	}

});
