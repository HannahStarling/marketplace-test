import { CartItems, ProductVariations } from '@/types/product';

// Функция для сохранения обеих сущностей в localStorage
export const saveCartToLocalStorage = (cartItems: CartItems | undefined, productVariation: ProductVariations | undefined) => {
  try {
    if (cartItems !== undefined) {
      const serializedStateCartItem = JSON.stringify(cartItems);
      localStorage.setItem('CartItem', serializedStateCartItem);
    } else {
      localStorage.removeItem('CartItem');
    }

    if (productVariation !== undefined) {
      const serializedStateProductVariation = JSON.stringify(productVariation);
      localStorage.setItem('ProductVariation', serializedStateProductVariation);
    } else {
      localStorage.removeItem('ProductVariation');
    }
  } catch (err) {
    console.error('Could not save cart to local storage:', err);
  }
};

// Функция для загрузки обеих сущностей из localStorage
export const loadCartFromLocalStorage = (): { cartItems: CartItems | undefined; productVariation: ProductVariations | undefined } => {
  try {
    const serializedStateCartItem = localStorage.getItem('CartItem');
    const cartItems = serializedStateCartItem ? JSON.parse(serializedStateCartItem) : undefined;

    const serializedStateProductVariation = localStorage.getItem('ProductVariation');
    const productVariation = serializedStateProductVariation ? JSON.parse(serializedStateProductVariation) : undefined;

    return { cartItems, productVariation };
  } catch (err) {
    console.error('Could not load cart from local storage:', err);
    return { cartItems: undefined, productVariation: undefined };
  }
};

// Функция для очистки обеих сущностей из localStorage
export const clearCartFromLocalStorage = () => {
  try {
    localStorage.removeItem('CartItem');
    localStorage.removeItem('ProductVariation');
  } catch (err) {
    console.error('Could not clear cart from local storage:', err);
  }
};
