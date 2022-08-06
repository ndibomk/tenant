import { useEffect } from "react";
import "./App.css";
import MileProjects from './pages/MileProjects'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/features/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./pages/NotFound";
import StudentProjectCreate from './pages/StudentProjectCreate'
import TagTours from "./pages/TagTours";
import Main from "./pages/Main";
import Caretaker from "./pages/Caretaker";
import SingleProject from "./pages/SingleProject";
import Error from "./pages/Error";
import TenantDashboad from "./pages/TenantDashboad";
import Vacation from "./pages/Vacation";
import Complain from "./pages/Complain";
import Rent from "./pages/Rent";
import Vacations from "./pages/Vacations";
import Complains from "./pages/Complains";
import ApartmentA from "./pages/ApartmentA";
import ApartmentB from "./pages/ApartmentB";
import ApartmentC from "./pages/ApartmentC";
import VacationsA from "./pages/VacationsA";
import VacationsB from "./pages/VacationsB";
import VacationsC from "./pages/VacationsC";
import ComplainA from "./pages/ComplainA";
import ComplainB from "./pages/ComplainB";
import ComplainC from "./pages/ComplainC";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import AdminSidebar from "./pages/AdminSidebar";
import AdminTenants from "./pages/AdminTenants";
import AdminTotalRent from "./pages/AdminTotalRent";
import AdminCaretaker from "./pages/AdminCaretaker";
import Admin from './pages/Admin'
import Summary from "./pages/Summary";
import AdminDefault from "./pages/AdminDefault";
import TenantA from "./pages/TenantA";

function App() {
  
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BrowserRouter>
    <ToastContainer/>
    <Header />
  
    {/* <AdminSidebar/> */}
     <Routes>
        <Route path="/" element={
          
            <Home />
          
        } />
         <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addproject" element={<StudentProjectCreate />} />
          <Route path="/editTour/:id" element={<StudentProjectCreate />} />
              <Route path="/main" element={<Main />} >
              <Route path="summary" element={< AdminDefault/>} />
              <Route path="admintenants" element={<AdminTenants/>} />
             <Route path="admintotalrent" element={<AdminTotalRent/>} />
             <Route path="admincaretaker" element={<AdminCaretaker/>} />
             <Route index element={<Summary/>} />

              </Route>
              <Route path="/apartmentAr" element={<TenantA />} />

              <Route path="/milestone" element={<Caretaker />} />
              <Route path="/mileProject" element={<MileProjects />} />
              <Route path="/project/:id" element={<SingleProject />} />
              <Route path="*" element={<Error />} />
              <Route path="/dashboard" element={<TenantDashboad/>} />
              <Route path="/vacation" element={<Vacation/>} />
              <Route path="/complain" element={<Complain/>} />
              <Route path="/caretaker" element={<Caretaker/>} />
              <Route path="/rent" element={<Rent/>} />
              <Route path="/vacations" element={<Vacations/>} />
              <Route path="/complains" element={<Complains/>} />
              <Route path="/apartmentA" element={<ApartmentA/>} />
              <Route path="/apartmentB" element={<ApartmentB/>} />
              <Route path="/apartmentC" element={<ApartmentC/>} />
              <Route path="/vacationa" element={<VacationsA/>} />
              <Route path="/vacationb" element={<VacationsB/>} />
              <Route path="/vacationc" element={<VacationsC/>} />
              <Route path="/complaina" element={<ComplainA/>} />
              <Route path="/complainb" element={<ComplainB/>} />
             <Route path="/complainc" element={<ComplainC/>} />
             <Route path="/users/:id" element={<Profile/>} />
            
             {/* <Route path="/adminsidebar" element={<AdminSidebar/>} /> */}
             {/* <Route path="/main" element={<Admin />}/> */}

</Routes> 
     {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
