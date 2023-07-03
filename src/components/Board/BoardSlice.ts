import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rows: 0,
  columns: 10
}

const BoardSlice = createSlice({
  name: 'BoardSlice',
  initialState,
  reducers: {
    setRows(state, action) {
      state.rows = action.payload || 0;
    },
    setColumns(state, action) {
      state.columns = action.payload || 0;
    }
  }
});

export const {
  setRows,
  setColumns
} = BoardSlice.actions;


export default BoardSlice.reducer;