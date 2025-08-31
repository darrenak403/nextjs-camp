

import { configureStore } from "@reduxjs/toolkit"
import { petReducer, plantReducer } from "./slices"

export const store = configureStore({
    reducer: {
        pet: petReducer,
        plant: plantReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;