import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../api'
import { toast } from "react-toastify";
import axios from "axios";
import { url,setHeaders } from "./api";

export const createMilestone = createAsyncThunk(
  "milestone/createMilestone",
  async (values) => {
    try {
      const response = await api.createMile(values)

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);
export const getMilesByUser = createAsyncThunk(
  "tour/getMilesByUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await api.getMilesByUser(userId);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const getMilestoneByUser = createAsyncThunk(
  "milestones/getMilestoneByUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await api.getMilesByUser(userId);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
  const milestoneSlice = createSlice({
    name: "milestone",
    initialState: {
     milestone:[],
      milestones:[],
      miles:[],
      // userProjects:[],
      error: "",
      loading: false,
    },
    reducers: {
    //   setUser: (state, action) => {
    //     state.user = action.payload;
    //   },
    //   setLogout: (state, action) => {
    //     localStorage.clear();
    //     state.user = null;
    //   },
    },
    extraReducers: {
      [createMilestone.pending]: (state, action) => {
        state.loading = true;
      },
      [createMilestone.fulfilled]: (state, action) => {
        state.loading = false;
        state.milestones = action.payload;
      },
      [createMilestone.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
      [getMilesByUser.pending]: (state, action) => {
        state.loading = true;
      },
      [getMilesByUser.fulfilled]: (state, action) => {
        state.loading = false;
        state.miles= action.payload;
      },
      [getMilesByUser.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
      [getMilestoneByUser.pending]: (state, action) => {
        state.loading = true;
      },
      [getMilestoneByUser.fulfilled]: (state, action) => {
        state.loading = false;
        state.milestones = action.payload;
      },
      [getMilestoneByUser.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
    
    
    },
  });
  export default milestoneSlice.reducer;
  