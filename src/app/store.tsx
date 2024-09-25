import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../features/counter/counter.slice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersApi } from "./service/user.service";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootStateApp = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
