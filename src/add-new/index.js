import { View } from 'base';
import { InputView } from './input-view';

import './add-new.less';

export const AddNewView = View.extend({
	className: 'input-text-control',
	template:_.template('<div></div>'),
	regions:{
		'input':'div'
	},
	onRender(){
		let view = new InputView();
		this.showChildView('input', view, { replaceElement: true });
	},
	childViewTriggers:{
		'done':'add:new:toDo'
	}
});
