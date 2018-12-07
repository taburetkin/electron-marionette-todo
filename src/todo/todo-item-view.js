import { View } from 'base';
import { RefreshClassBehavior } from 'common';

import template from './todo-item-view.html';
import './todo-item-view.less';


let editingItem;

export const ToDoItemView = View.extend({
	initialize(){
		this._outsideClick = this.outsideClick.bind(this);
		this._onKeydownWhileEdit = this.onKeydownWhileEdit.bind(this);
	},
	className: 'todo-item',
	template,
	behaviors: [RefreshClassBehavior],
	classNameModifiers:[ 
		m => m.isChecked() ? 'checked' : ''
	],
	ui:{
		'check':'.todo-check',
		'remove':'.todo-remove',
		'edit':'.todo-text'
	},
	events:{
		'click @ui.edit'(event){
			event.preventDefault();
			event.stopPropagation();
			if (editingItem) {
				editingItem != this && editingItem.stopEdit();
				return;
			}
			editingItem = this;
			this.startEdit();
		},
		'click @ui.remove'(){
			this.model.destroy();
		},
		'click @ui.check'(){
			this.model.set('checked', !this.model.get('checked'));
		}
	},
	outsideClick(event){
		let el = this.ui.edit.get(0)
		if (el == event.target || el.contains(event.target)) return;
		event.stopPropagation();
		this.stopEdit();
	},
	onKeydownWhileEdit(event){
		if(event.keyCode == 27 || event.keyCode == 13){
			event.stopPropagation();
			event.preventDefault();
			$(event.target).blur();
			this.stopEdit(event.keyCode == 27);
		}
	},
	stopEdit(esc){
		let $edit = this.ui.edit;
		$edit.prop('contenteditable', false);
		editingItem = null;
		$(document).off('click', this._outsideClick);
		$edit.off('keydown', this.onKeydowWhileEdit);
		if (esc) {
			$edit.html(this.model.get('text'));
		} else {
			this.model.set('text', $edit.html());
		}
	},
	startEdit(){
		let $edit = this.ui.edit;
		$edit.prop('contenteditable', true);
		$edit.focus();
		$(document).on('click', this._outsideClick);
		$edit.on('keydown', this._onKeydownWhileEdit);
	},
});


