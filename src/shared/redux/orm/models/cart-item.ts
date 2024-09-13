import { attr, fk, Model } from 'redux-orm';

export class CartItem extends Model {
  static modelName = 'CartItem';

  static fields = {
    id: attr(),
    variation: fk('ProductVariation', 'cartItems'),
    amount: attr(),
  };
}
