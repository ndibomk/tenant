import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import projectReducer from "./features/projectSlice";
import complainReducer from "./features/complain"
import vacationReducer from "./features/complain"

import milestoneReducer from './features/caretaker'
export default configureStore({
  reducer: {
    auth: AuthReducer,
    project:projectReducer,
    milestone:milestoneReducer,
    complain: complainReducer,
    vacation: vacationReducer,
  },
});
