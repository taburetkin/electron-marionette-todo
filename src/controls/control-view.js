import { View } from 'base';
import { RefreshClassBehavior } from 'common';

import './control-view.less';

export const ControlView = View.extend({
	className: 'control-item',
	template: json => json.id,

	behaviors: [RefreshClassBehavior],
	classNameModifiers:[ 
		m => m.get('active') ? 'active' : ''
	],
	triggers:{
		'click':'filter:list'
	}
});
