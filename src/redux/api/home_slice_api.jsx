import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "src/config/base_url";

import axios from "axios";

const initialState = {
  value: 1000,
  name: "hello",
  age: 49,

  isServiceListLoading: false,
  serviceList: [],
  serviceListError: null,

  isRegistrationLoading:false,
  
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

export const homeSlice = createSlice({
  name: "home",
  initialState,

  reducers: {
    incrementValue: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementAge: (state) => {
      state.age += 1;
    },
    incrementByAmount: (state, action) => {
      console.log(action);
      state.value += action.payload;
    },
  },
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
       
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = homeSlice.actions;

export default homeSlice.reducer;