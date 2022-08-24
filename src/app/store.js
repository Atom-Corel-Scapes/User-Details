import { configureStore } from '@reduxjs/toolkit';

import userSlice from '../features/users/userSlice';

const Store = configureStore({
  reducer: {
    user: userSlice
  }
})

export default Store;