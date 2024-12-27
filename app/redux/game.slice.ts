import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GameState {
  earned: number;
  currentStep: string | null;
}

const initialState: GameState = {
  earned: 0,
  currentStep: null,
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
  },
});

export const { setCurrentStep, setEarned } = gameSlice.actions;

export default gameSlice.reducer;
