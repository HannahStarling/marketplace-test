import { SortDirection } from '@shared/constants/filter-sort';
import { buildQueryParams } from '@shared/helpers/api/build-query-params';
import { baseRange } from '@/shared/constants/api';
import {
  CategorySortField,
  ProductImageSortField,
  ProductSortField,
  ProductVariationPropertyListValueSortField,
  ProductVariationPropertySortField,
  ProductVariationPropertyValueSortField,
} from '@/types/product';

export type QueryParams = {
  sortField?: string;
  sortDirection?: SortDirection;
  range?: number[];
  filter?: object;
};

export type CreateQueryParams = Partial<{
  sort: [sortField?: string, sortDirection?: SortDirection];
  range: number[];
  filter: object;
}>;

const createQuery = (endpoint: string, params: CreateQueryParams) => {
  return `${endpoint}?${buildQueryParams(params)}`;
};

export const ProductAPI = {
  getCategories: ({ sortField = CategorySortField.Name, sortDirection = SortDirection.Asc, range = baseRange }: QueryParams) =>
    createQuery('/Categories', { sort: [sortField, sortDirection], range }),

  getCategoryById: (id: number) => `/Categories/${id}`,

  getProducts: ({
    categoryId,
    sortField = ProductSortField.Name,
    sortDirection = SortDirection.Asc,
    range = baseRange,
  }: {
    categoryId: number | null;
    sortField?: ProductSortField;
    sortDirection?: SortDirection;
    range?: number[];
  }) => createQuery('/Products', { sort: [sortField, sortDirection], range, filter: { category_id: categoryId } }),

  getProductById: (id: number) => `/Products/${id}`,

  getProductImages: ({
    productId,
    sortField = ProductImageSortField.ImageName,
    sortDirection = SortDirection.Asc,
    range = baseRange,
  }: {
    productId?: number;
    sortField?: ProductImageSortField;
    sortDirection?: SortDirection;
    range?: number[];
  }) => createQuery('/ProductImages', { sort: [sortField, sortDirection], range, filter: { product_id: productId } }),

  getProductVariations: (productId: number) => createQuery('/ProductVariations', { filter: { product_id: productId } }),

  getProductVariationProperties: ({
    sortField = ProductVariationPropertySortField.Name,
    sortDirection = SortDirection.Asc,
    range = baseRange,
  }: QueryParams) => createQuery('/ProductVariationProperties', { sort: [sortField, sortDirection], range }),

  getProductVariationPropertyListValues: ({
    sortField = ProductVariationPropertyListValueSortField.Title,
    sortDirection = SortDirection.Asc,
    range = baseRange,
  }: QueryParams) => createQuery('/ProductVariationPropertyListValues', { sort: [sortField, sortDirection], range }),

  getProductVariationPropertyValues: ({
    variationId,
    sortField = ProductVariationPropertyValueSortField.ValueString,
    sortDirection = SortDirection.Asc,
    range = baseRange,
  }: {
    variationId?: number;
    sortField?: ProductVariationPropertyValueSortField;
    sortDirection?: SortDirection;
    range?: number[];
  }) => createQuery('/ProductVariationPropertyValues', { sort: [sortField, sortDirection], range, filter: { product_variation_id: variationId } }),
};
