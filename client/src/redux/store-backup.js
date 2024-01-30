// import { configureStore } from '@reduxjs/toolkit';
// // import { countSlice } from './reducerSlice/userSlice';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer, persistStore } from 'redux-persist';
// import {userReducer} from "./reducerSlice"
// const persistConfig = {
//   key: 'root',
//   storage,
// }
// const rootReducer = {
//   user: userReducer,
//   hotels: hotelsReducer,
//   bookings: bookingsReducer,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = configureStore({
//   reducer: persistedReducer
    
//   ,
// });
// export const persistor = persistStore(store)