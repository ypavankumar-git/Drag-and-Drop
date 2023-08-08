import { configureStore } from '@reduxjs/toolkit';
import listReducer from './screens/kanban-board/features/slices/list.slice';

const store = configureStore({
  reducer: {
    list: listReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
