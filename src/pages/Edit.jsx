import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {StyledForm} from './StyledForm'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
// import { StyledForm } from './StyledForm'
import { useDispatch, useSelector } from "react-redux";
// import { productsCreate } from '../redux/features/tourSlice';
import { createProject, updateTour } from '../redux/features/projectSlice';
import FileBase from "react-file-base64";

export default function Edit({ID}) {
    const [tenants,setTenants]= useState({})

  const [open, setOpen] = React.useState(false);
  const {projects}=useSelector((state)=>({...state.project}))
  const notify = () => toast("Wow so easy!");
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const { user } = useSelector((state) => ({ ...state.auth }));
// console.log(user);

  const {error ,loading}= useSelector((state)=>({...state.project}))
  const [users,setUser]=useState({
    apartment:'',
    name:'',
    houseNo:'',
    amount:'',
    idNo:'',
    payment:'',
    currentRead:'',
    createdAt:'',
    lastRead:'',
    waterFee:'',
    datePaid:'',
    caretaker:'',
    aptType:''
               })
   const handleSubmit= (e)=>{
    
       e.preventDefault()
       if (users){
        const updateddata={...users, name:user?.result.name}
       if(!id){
        dispatch(createProject(updateddata,toast))
       }else{
        dispatch(updateTour({updateddata,id,toast}))
       }
       
       navigate('/main')
       }
   }
  const cancelCourse = () => { 
    document.getElementById("create-course-form").reset();
  }
  const {id}=useParams()
console.log('hello', projects);
  useEffect(()=>{
  const singleuser= projects.find((tour)=>tour._id===id);
  console.log('hello',singleuser);
setUser({...singleuser})
  },[id])


useEffect(() => {
  // error && toast.error(error);

  return () => {
    
  }
}, [error])


  const handleClickOpen = () => {
    setOpen(true);
    let selectedItemas=projects.filter((item)=>item._id===ID)
    selectedItemas=selectedItemas[0]
    setTenants(selectedItemas)
    setUser(selectedItemas)
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>EDIT iTEMS</DialogTitle>
        <DialogContent>
        <StyledForm id='cancelCourse' onSubmit={handleSubmit} style={{marginTop:'6rem'}} className='form'>
  
  <h2>{id? 'update your values':'Pay Rent'}</h2>
    <div className="main-rent-create">
 
{/* <Projects/> */}
<div className="rent-split-start">
    <input className='form-input' type='text'  placeholder='Apartment eg A or B or C' onChange={(e)=> setUser({...users , apartment:e.target.value})} required/>
    <input className='form-input' type='text'  placeholder='Name' onChange={(e)=> setUser({...users , name:e.target.value})} required/>
    <input className='form-input' type='text' placeholder='House Number' onChange={(e)=> setUser({...users , houseNo:e.target.value})} required/>
    <input className='form-input' type='number' placeholder='rent' onChange={(e)=> setUser({...users , amount:e.target.value})} required/>
    <input className='form-input' type='text' placeholder='Mpesa code/bank sms' onChange={(e)=> setUser({...users ,payment:e.target.value})}/>
     <input className='form-input' type='number' placeholder='Id Number' onChange={(e)=> setUser({...users ,idNo:e.target.value})} required/>
    <input className='form-input' type='date' placeholder='date' onChange={(e)=> setUser({...users ,createdAt:e.target.value})} required/>
      
    </div>
    <div className="rent-split">
    <input className='form-input' type='text' placeholder='caretaker name' onChange={(e)=> setUser({...users ,caretaker:e.target.value})}/>

    <input className='form-input' type='number' placeholder='curren water read' onChange={(e)=> setUser({...users ,currentRead:e.target.value})}/>
      <input className='form-input' type='text' placeholder='date of payment eg 17/04/2022' onChange={(e)=> setUser({...users ,datePaid:e.target.value})}/>
      <input className='form-input' type='text' placeholder='one or two bedroom eg 1bedroom' onChange={(e)=> setUser({...users ,aptType:e.target.value})}/>

      <input className='form-input' type='number' placeholder='Last water read' onChange={(e)=> setUser({...users ,lastRead:e.target.value})}/>

      <input className='form-input' type='number' placeholder='water Bill' onChange={(e)=> setUser({...users ,waterFee:e.target.value})}/>

     mpesa screenshot
              <FileBase
                type="file"
                placeholder='mpesa screenshot'
                multiple={false}
                onDone={({ base64 }) =>
                  setUser({ ...users, imageFile: base64 })
                }
              />
  </div>           
     

    
    
   
  
    
 
</div>
<button className='btn' onClick>
      {/* {auth.registerStatus==='pedding' ? 'submitting':'register' } */}
      ADD
    </button>
      
</StyledForm>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
