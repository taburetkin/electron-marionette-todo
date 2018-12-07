import { Model } from 'base';

export const ToDoItem = Model.extend({
	isChecked(){
		return this.get('checked') == true;
	},
	isUnChecked(){
		return !this.isChecked();
	}
});



