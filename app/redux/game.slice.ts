import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Settings } from "../types";

export interface GameState {
  earned: number;
  currentStep: string | null;
  settings: Settings | null;
}

const initialState: GameState = {
  earned: 0,
  currentStep: null,
  settings: null,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setEarned: (state, action: PayloadAction<number>) => {
      state.earned = action.payload;
    },

    setCurrentStep: (state, action: PayloadAction<string | null>) => {
      state.currentStep = action.payload;
    },

    setSettings: (state, action: PayloadAction<Settings | null>) => {
      state.settings = action.payload;
    },
  },
});

export const { setCurrentStep, setEarned, setSettings } = gameSlice.actions;

export default gameSlice.reducer;
