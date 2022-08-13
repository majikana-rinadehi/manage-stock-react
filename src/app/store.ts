import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import categoriesReducer from '../features/categories/categoriesSlice'
import itemsReducer from '../features/items/itemsSlice'

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    items: itemsReducer 
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
