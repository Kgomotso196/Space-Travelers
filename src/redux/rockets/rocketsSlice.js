import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v4/rockets';
const LOCAL_STORAGE_KEY = 'reservedRockets';

const initialState = {
  rockets: [],
  status: 'idle',
  loading: false,
  error: null,
  reservedRockets: [],
};

export const loadReservedRockets = createAsyncThunk('rockets/loadReservedRockets', async () => {
  try {
    const reservedRockets = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (reservedRockets) {
      return JSON.parse(reservedRockets);
    }
    return [];
  } catch (error) {
    console.error('Error loading reserved rockets from local storage:', error);
    return [];
  }
});

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Server error');
    } else {
      const rockets = await response.json();
      return rockets;
    }
  } catch (error) {
    return isRejectedWithValue(error.response.data);
  }
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket(state, action) {
      const rocketId = action.payload;
      const rocket = state.rockets.find((rocket) => rocket.id === rocketId);
      if (rocket) {
        rocket.reserved = !rocket.reserved;
        if (rocket.reserved) {
          state.reservedRockets.push(rocket);
        } else {
          state.reservedRockets = state.reservedRockets.filter((r) => r.id !== rocketId);
        }
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.reservedRockets));
      }
    },
    bookedRockets(state) {
      const booked = state.rockets.filter((rocket) => rocket.reserved === true);
      state.reservedRockets = [...booked];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rockets = action.payload.map((rocket) => ({
          id: rocket.id,
          name: rocket.name,
          description: rocket.description,
          image: rocket.flickr_images[0],
          reserved: false,
        }));
        state.loading = false;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { reserveRocket, bookedRockets } = rocketsSlice.actions;

export default rocketsSlice.reducer;
