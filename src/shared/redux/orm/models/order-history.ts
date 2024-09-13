import { attr, Model } from 'redux-orm';

export class OrderHistory extends Model {
  static modelName = 'OrderHistory';

  static fields = {
    id: attr(),
    items: attr(), // Массив вариаций продуктов
    price: attr(),
    address: attr(),
    name: attr(),
    date: attr(),
    time: attr(),
  };
}
