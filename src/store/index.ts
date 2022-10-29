import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { login } from "./signSlice";
const store = configureStore({
    reducer: { 
        [login.reducerPath]: login.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(login.middleware)
    
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch);
export default store