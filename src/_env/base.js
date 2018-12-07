import { MnView, MnCollectionView, BbModel, BbCollection } from './vendors';
export { Behavior } from './vendors';

export const View = MnView.extend({
	template: _.noop
});


export const CollectionView = MnCollectionView.extend({});
export const Model = BbModel.extend({});
export const Collection = BbCollection.extend({});
