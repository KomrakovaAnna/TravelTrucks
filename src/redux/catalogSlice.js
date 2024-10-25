import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllCampers,
  fetchAllCampersForFirstPage,
  fetchCamperById,
} from "./catalogOps.js";

const initialState = {
  campers: [],
  isLoading: false,
  error: null,
  selectedCamper: {},
  page: 1,
  hasMore: false,
  total: 0,
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCampers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.campers = [...state.campers, ...action.payload.items];
        state.total = action.payload.total;
        state.page += 1;
        state.hasMore = state.campers.length < state.total;
      })
      .addCase(fetchAllCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.campers = [];
        state.hasMore = false;
      })
      .addCase(fetchAllCampersForFirstPage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllCampersForFirstPage.fulfilled, (state, action) => {
        state.page = 1;
        state.isLoading = false;
        state.error = null;
        state.campers = action.payload.items;
        state.total = action.payload.total;
        state.page += 1;
        state.hasMore = state.campers.length < state.total;
      })
      .addCase(fetchAllCampersForFirstPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.campers = [];
        state.hasMore = false;
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.selected = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.selected = {};
      });
  },
});

export default catalogSlice.reducer;
