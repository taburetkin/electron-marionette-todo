import { Collection } from 'base';
import { ToDoItem } from './todo-item';

export const ToDoList = Collection.extend({
	model: ToDoItem,
	addToDo(text){
		this.add({ text, index: this.length });
	}
});

export const toDoList = new ToDoList();
