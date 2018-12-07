import { CollectionView } from 'base';
import { ToDoItemView } from './todo-item-view';
import { SortableModelBehavior } from 'common';
export const ToDoListView = CollectionView.extend({
	className: 'todo-list',
	childView: ToDoItemView,
	behaviors: [{ behaviorClass: SortableModelBehavior, property: 'index' }],
	collectionEvents:{
		'set:filter'(type){
			switch(type){
				case 'checked':
					this.setFilter(view => view.model.isChecked());
					break;
				case 'unchecked':
					this.setFilter(view => view.model.isUnChecked());
					break;
				default:
					this.setFilter(null);
					break;
			}
		},
		'change:checked'(){
			this.filter();
		}
	},
	viewComparator: 'index',
});

