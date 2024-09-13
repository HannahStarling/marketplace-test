import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '@shared/redux/reducers';
import { middleware, reducer, reducerPath } from '@shared/redux/reducers/api-service';

// Создание и настройка Redux Store
export const store = configureStore({
  reducer: {
    [reducerPath]: reducer, // Добавление редьюсера apiService
    orm: rootReducer, // Добавление ORM,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware), // Добавление middleware apiService
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
