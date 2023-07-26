import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    return data;
  }
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    loading: false,
    error: null,
  },
  reducers: {
    joinMission: (state, action) => ({
      ...state,
      missions: state.missions.map((mission) => {
        if (mission.mission_id !== action.payload.id) {
          return mission;
        }
        return {
          ...mission,
          joined: true,
        };
      })
    }),
    leaveMission: (state, action) => ({
      ...state,
      missions: state.missions.map((mission) => {
        if (mission.mission_id !== action.payload.id) {
          return mission;
        }
        return {
          ...mission,
          joined: false,
        };
      })
    }),
  },
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

export const { joinMission, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;