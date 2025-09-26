// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducer/rootReducer";

// const store = configureStore({
//     reducer: rootReducer,
//     devTools: true, // bật Redux DevTools
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export default store;

import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from "./reducer/rootReducer";

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer)
let persistor = persistStore(store)
export { store, persistor }
