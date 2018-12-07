import { Collection } from 'base';
import { Control } from './control';
export const Controls = Collection.extend({
	model: Control
});

export const controls = new Collection([
	{ id: 'all', active: true },
	{ id: 'checked' },
	{ id: 'unchecked' }
]);
