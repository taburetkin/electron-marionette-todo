import { CollectionView } from 'base';
import { ControlView } from './control-view';
import { controls as collection } from './controls';

import './controls-view.less';

export const ControlsView = CollectionView.extend({
	className: 'controls-list',
	collection,
	childView: ControlView,
	childViewEvents: {
		'filter:list'(view){
			let current = this.collection.findWhere({active: true});
			current.set('active', false);
			view.model.set('active', true);
			const list = this.getOption('list');
			list.trigger('set:filter', view.model.id);
		}
	},

});
