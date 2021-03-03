import { configureStore } from '@reduxjs/toolkit';
import commentSlice from './slices/commentSlice';

const store = configureStore({
  reducer: {
      comments: commentSlice
  }
});
export default store
