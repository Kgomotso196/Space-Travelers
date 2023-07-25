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
});

export default missionsSlice.reducer;