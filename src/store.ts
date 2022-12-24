import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './feature/main/mainSlice';
export const store = configureStore({
  reducer: {
    main: mainReducer,
  },
});
