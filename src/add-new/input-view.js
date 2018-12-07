import { View } from 'base';

export const InputView = View.extend({
	tagName: 'input',
	events:{
		keyup(event){
			if(!this.$el.val()) return;
			if (event.keyCode == 13) {
				let value = this.$el.val();
				this.$el.val('');
				this.trigger('done', value);
			}
		}
	},
	attributes:{
		placeholder: 'what\'s next?'
	}
});
