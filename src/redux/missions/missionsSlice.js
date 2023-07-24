import { createSlice } from '@reduxjs/toolkit';

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    loading: false,
    error: null,
  },
  reducers: {},
});

export default missionsSlice.reducer;