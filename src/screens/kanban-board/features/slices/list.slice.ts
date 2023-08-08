import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface listState {
  strapiData: any[];
  publicStrapiData: any[];
  loading: boolean;
  error: any;
}
const initialState: listState = {
  strapiData: [],
  publicStrapiData: [],
  loading: true,
  error: '',
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setTodoData: (state, action: PayloadAction<any[]>) => {
      state.strapiData = action.payload;
    },
    setInProgressData: (state, action: PayloadAction<any>) => {
      state.publicStrapiData = action.payload;
    },
  },
});
export const { setTodoData, setInProgressData } = listSlice.actions;

export default listSlice.reducer;
