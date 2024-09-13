import { attr, Model } from 'redux-orm';

export class ProductVariation extends Model {
  static modelName = 'ProductVariation';

  static fields = {
    id: attr(),
    product_id: attr(),
    price: attr(),
    stock: attr(),
    amount: attr(),
  };
}
