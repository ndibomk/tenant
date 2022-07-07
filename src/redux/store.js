import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import projectReducer from "./features/projectSlice";
import milestoneReducer from './features/caretaker'
export default configureStore({
  reducer: {
    auth: AuthReducer,
    project:projectReducer,
    milestone:milestoneReducer,
  },
});
