import { Behavior } from 'base';

export default Behavior.extend({
	onRender(){
		this.refreshClass();
	},
	modelEvents:{
		'change':'refreshClass'
	},
	refreshClass(){
		const modifiers = this.view.getOption('classNameModifiers') || [];
		
		let classes = _.reduce(modifiers, (memo, modifier) => {
			if(_.isFunction(modifier)) {
				modifier = modifier.call(this.view, this.view.model, this.view);
			}
			if (_.isString(modifier)) {
				memo.push(modifier);
			}
			return memo;
		}, [_.result(this.view, 'className')]);
		
		this.el.className = classes.filter(f => !!f).join(' ');
	},
});
