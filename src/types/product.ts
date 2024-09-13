export interface Category {
  id: number;
  name: string;
  parent_id: number;
}

export type Categories = Array<Category>;

export interface Product {
  id: number;
  name: string;
  category_id: number;
  description: string;
}

export type Products = Array<Product>;

/** Предполагаем, что на сервере все картинки в одинаковом формате */
export interface Image {
  id: number;
  image_name: string;
  image_url: string;
}

export interface ProductImage extends Image {
  product_id: number;
}

export type ProductImages = Array<ProductImage>;

export interface ProductVariation {
  id: number;
  product_id: number;
  price: number;
  stock: number;
}

export type ProductVariations = Array<ProductVariation>;

export interface ProductVariationProperty {
  id: number;
  name: string;
  type: number;
}

export type ProductVariationProperties = Array<ProductVariationProperty>;

export interface ProductVariationPropertyListValue {
  id: number;
  product_variation_property_id: number;
  title: string;
  value: string;
}

export type ProductVariationPropertyListValues = Array<ProductVariationPropertyListValue>;

export interface ProductVariationPropertyValue {
  id: number;
  product_variation_id: number;
  product_variation_property_id: number;
  value_string?: string;
  value_int?: number;
  value_float?: number;
  product_variation_property_list_value_id?: number;
}

export type ProductVariationPropertyValues = Array<ProductVariationPropertyValue>;

export type CartItem = ProductVariation & { amount: number };
export type CartItems = CartItem[];

// Сортировка по полям для категорий
export enum CategorySortField {
  Name = 'name',
  ParentId = 'parent_id',
}

// Сортировка по полям для товаров
export enum ProductSortField {
  Name = 'name',
  CategoryId = 'category_id',
  Description = 'description',
}

// Сортировка по полям для изображений товаров
export enum ProductImageSortField {
  ImageName = 'image_name',
  ProductId = 'product_id',
  ImageUrl = 'image_url',
}

// Сортировка по полям для вариаций товаров
export enum ProductVariationSortField {
  Price = 'price',
  Stock = 'stock',
  ProductId = 'product_id',
}

// Сортировка по полям для свойств вариаций товаров
export enum ProductVariationPropertySortField {
  Name = 'name',
  Type = 'type',
}

// Сортировка по полям для значений списков свойств вариаций товаров
export enum ProductVariationPropertyListValueSortField {
  Title = 'title',
  Value = 'value',
}

// Сортировка по полям для значений свойств вариаций товаров
export enum ProductVariationPropertyValueSortField {
  ValueString = 'value_string',
  ValueInt = 'value_int',
  ValueFloat = 'value_float',
  ProductVariationPropertyListValueId = 'product_variation_property_list_value_id',
}
