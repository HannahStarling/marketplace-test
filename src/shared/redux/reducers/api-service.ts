import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { transformResponseWithPagination } from '@shared/helpers/api/transform-response-with-pagination';
import { SortDirection } from '@shared/constants/filter-sort';
import { ProductAPI } from '@shared/api/api-service';
import {
  Categories,
  Category,
  CategorySortField,
  Product,
  ProductImages,
  ProductImageSortField,
  Products,
  ProductSortField,
  ProductVariationProperties,
  ProductVariationPropertyListValues,
  ProductVariationPropertyListValueSortField,
  ProductVariationPropertySortField,
  ProductVariationPropertyValues,
  ProductVariationPropertyValueSortField,
  ProductVariations,
} from '@/types/product';
import { baseRange, baseUrl } from '@/shared/constants/api';

export const apiService = createApi({
  reducerPath: 'apiService',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCategories: builder.query<
      { data: Categories; total: number },
      { sortField?: CategorySortField; sortDirection?: SortDirection; range?: number[] }
    >({
      query: ProductAPI.getCategories,
      transformResponse: (response: Categories, meta) => transformResponseWithPagination(response, meta, baseRange),
    }),
    getCategoryById: builder.query<Category, number>({
      query: ProductAPI.getCategoryById,
    }),
    getProducts: builder.query<
      { data: Products; total: number; hasNextPage: boolean },
      { categoryId: number | null; sortField?: ProductSortField; sortDirection?: SortDirection; range?: number[] }
    >({
      query: ProductAPI.getProducts,
      transformResponse: (response: Products, meta, arg) => transformResponseWithPagination(response, meta, arg.range || baseRange),
    }),
    getProductById: builder.query<Product, number>({
      query: ProductAPI.getProductById,
    }),
    getProductImages: builder.query<
      { data: ProductImages; total: number },
      { productId?: number; sortField?: ProductImageSortField; sortDirection?: SortDirection; range?: number[] }
    >({
      query: ProductAPI.getProductImages,
      transformResponse: (response: ProductImages, meta) => transformResponseWithPagination(response, meta, baseRange),
    }),
    getProductVariations: builder.query<{ data: ProductVariations; total: number }, number>({
      query: ProductAPI.getProductVariations,
      transformResponse: (response: ProductVariations, meta) => transformResponseWithPagination(response, meta, baseRange),
    }),
    getProductVariationProperties: builder.query<
      { data: ProductVariationProperties; total: number },
      { sortField?: ProductVariationPropertySortField; sortDirection?: SortDirection; range?: number[] }
    >({
      query: ProductAPI.getProductVariationProperties,
      transformResponse: (response: ProductVariationProperties, meta) => transformResponseWithPagination(response, meta, baseRange),
    }),
    getProductVariationPropertyListValues: builder.query<
      { data: ProductVariationPropertyListValues; total: number },
      { sortField?: ProductVariationPropertyListValueSortField; sortDirection?: SortDirection; range?: number[] }
    >({
      query: ProductAPI.getProductVariationPropertyListValues,
      transformResponse: (response: ProductVariationPropertyListValues, meta) => transformResponseWithPagination(response, meta, baseRange),
    }),
    getProductVariationPropertyValues: builder.query<
      { data: ProductVariationPropertyValues; total: number },
      { variationId?: number; sortField?: ProductVariationPropertyValueSortField; sortDirection?: SortDirection; range?: number[] }
    >({
      query: ProductAPI.getProductVariationPropertyValues,
      transformResponse: (response: ProductVariationPropertyValues, meta) => transformResponseWithPagination(response, meta, baseRange),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetProductImagesQuery,
  useGetProductVariationsQuery,
  useGetProductVariationPropertiesQuery,
  useGetProductVariationPropertyListValuesQuery,
  useGetProductVariationPropertyValuesQuery,
  reducerPath,
  reducer,
  middleware,
} = apiService;
