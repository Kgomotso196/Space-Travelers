import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
};

const URL = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk(
  'books/fetchRockets',
  async () => {
    const response = await axios.get(URL);
    return response.data;
  },
);

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rockets = action.payload;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default rocketsSlice.reducer;
