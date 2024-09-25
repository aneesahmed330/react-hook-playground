import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementByAmount: (
      state,
      action: PayloadAction<{
        value: number;
      }>
    ) => {
      state.value += action.payload.value;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increment: (state) => {
      state.value += 1;
    },
  },
});

// we need to export these action
export const { decrement, increment, incrementByAmount } = counterSlice.actions;
// export the reducer
export const counterReducer = counterSlice.reducer;
