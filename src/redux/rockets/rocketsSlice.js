import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  reservedRockets: [],
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket(state, action) {
      const rocketId = action.payload;
      const rocket = state.rockets.find((rocket) => rocket.id === rocketId);
      if (rocket) {
        rocket.reserved = !rocket.reserved;
      }
    },
    bookedRockets(state) {
      const booked = state.rockets.filter((rocket) => rocket.reserved === true);
      state.reservedRockets = [...booked];
    },
  },
});

export const { reserveRocket, bookedRockets } = rocketsSlice.actions;

export default rocketsSlice.reducer;
