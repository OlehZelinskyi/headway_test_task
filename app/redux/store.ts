import gameReducer from "@/app/redux/game.slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

store.subscribe(() => console.log("state", store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
