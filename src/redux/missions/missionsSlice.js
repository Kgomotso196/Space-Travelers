import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    return response.data;
  }
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.missions = action.payload;
        state.loading = false;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  }
});

export default missionsSlice.reducer;