import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "src/config/base_url";

import axios from "axios";

const initialState = {
  isServiceListLoading: false,
  serviceList: [],
  serviceListError: null,

  isRegistrationLoading:false,

  isGallaryListLoading:false,
  gallaryList:[],
  gallaryListError:null,
  
};


// Fetch Service List
export const fetchServiceList = createAsyncThunk(
  "home/fetchServiceList",
  async (_, { rejectWithValue }) => {
    // api

    try {
      const response = await axios.get(`${BASE_URL}/service`);
      console.log("service response",response)
      if (response?.status === 200) {
        return response?.data?.data;
      }
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message || "Could not fetch Service list";
      return rejectWithValue(errorMessage);
    }
  }
);
//for registration form
export const addRegistration = createAsyncThunk(
  "home/addRegistration",
  async (data, { rejectWithValue }) => {
    // api
console.log("sending data to database",{data});
    try {
      const response = await axios.post(`${BASE_URL}/registration`,data);
      console.log("register response",response)
      if (response?.status === 200) {
        return response?.data?.data;
      }
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message || "Failed to register";
      return rejectWithValue(errorMessage);
    }
  }
);
//for gallary
export const fetchGallaryList = createAsyncThunk(
  "home/fetchGallaryList",
  async (_, { rejectWithValue }) => {      // get garna ko lagi underscore rakhne 
    // api
    try {
      const response = await axios.get(`${BASE_URL}/gallary`);
      console.log("register response",response)
      if (response?.status === 200) {
        return response?.data?.data;
      }
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message || "Could not fetch gallary list";
      return rejectWithValue(errorMessage);
    }
  }
)

export const homeSlice = createSlice({
  name: "home",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchServiceList.pending, (state) => {
        state.isServiceListLoading = true;
      })
      .addCase(fetchServiceList.fulfilled, (state, action) => {
        state.isServiceListLoading = false;
        state.serviceList = action?.payload;
      })
      .addCase(fetchServiceList.rejected, (state, action) => {
        state.isServiceListLoading = false;
        state.serviceListError = action?.payload;
      })
      .addCase(addRegistration.pending, (state) => {
        state.isRegistrationLoading = true;
      })
      .addCase(addRegistration.fulfilled, (state, action) => {
        state.isRegistrationLoading = false;
        
      })
      .addCase(addRegistration.rejected, (state, action) => {
        state.isRegistrationLoading = false;
       
      })
      // fetch gallary list
      .addCase(fetchGallaryList.pending, (state,action) => {
        state.isGallaryListLoading = true;
      })
      .addCase(fetchGallaryList.fulfilled, (state, action) => {
        state.isGallaryListLoading= false;
        state.gallaryList=action.payload;
        
      })
      .addCase(fetchGallaryList.rejected, (state, action) => {
        state.isGallaryListLoading = true;
        state.gallaryListError=action.payload;
       
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = homeSlice.actions;

export default homeSlice.reducer;