import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { login } from "./signSlice";
import { forums } from "./forumsSlice";

const store = configureStore({
    reducer: { 
        [login.reducerPath]: login.reducer,
        [forums.reducerPath]: forums.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(login.middleware, forums.middleware)
    
})

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch);
export default store