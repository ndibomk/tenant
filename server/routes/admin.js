import UserModal from "../models/user.js";
import express  from "express";
import TourModal from '../models/tour.js'
import {auth,isUser,isAdmin} from '../middleware/admin.js'
import moment from 'moment'
import MileModal from "../models/milestone.js";
const router = express.Router();


router.get ('/',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .month(moment().month()-2)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await UserModal.aggregate([
            { $match : {createdAt:{$gte:new Date(previosMonth)} } },
            {
                $project:{
                    month:{$month:'$createdAt'}
                }
            },
            
            
            {
                $group:{
                    _id:'$month',
                    total:{$sum:1},
                    
                }
            }
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


 })
 
router.get ('/totalrenta',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .month(moment().month()-2)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : {aptType:'1bedroom',createdAt:{$gte:new Date(previosMonth)} } },
            {
                $project:{
                    month:{$month:'$createdAt'},
                    total:"$amount"
                }
            },
            
            
            {
                $group:{
                    _id:'$month',
                    total:{$sum:"$total"},
                    
                }
            }
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }

 })
 
router.get ('/totalrentb',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .month(moment().month()-2)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : {aptType:'2bedroom',createdAt:{$gte:new Date(previosMonth)} } },
            {
                $project:{
                    month:{$month:'$createdAt'},
                    total:"$amount"
                }
            },
            
            
            {
                $group:{
                    _id:'$month',
                    total:{$sum:"$total"},
                    
                }
            }
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }

 })


router.get ('/total/tenants',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await UserModal.aggregate([
            { $match : { } },
            {
                $group:{
                    _id:'$month',
                    total:{$sum:1},
                    
                }
            }
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/rent',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { } },
            {
                $group:{
                    _id:'$amount',
                    
                    total:{$sum:1}
                }
            }
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/projects/single/rent',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : {apartment:'a'} },
            {
                $project:{
                    month:{$month:'$apartment'},
                    

                }
            },
            
            
            {
                $group:{
                    _id:'$month',
                    total:{$sum:1},
                   
                    
                }
            }
            
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/projects/single',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { aptType:'1bedroom',createdAt:{$gte:new Date(previosMonth)}} },

            {
                $project:{
                    month:{$month:'$createdAt'},
                    
                }
            },
            
            
            
            {
                $group:{
                 _id:'$month',
                 total:{$sum:1},
                
                 
             } 
             }
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/projects/single/2bedroom',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : {aptType:'2bedroom',createdAt:{$gte:new Date(previosMonth)}} },
            
            {
                $project:{
                    month:{$month:'$createdAt'}
                }
            },
            
            
            
            {
                $group:{
                 _id:'$month',
                 total:{$sum:1},
                
                 
             } 
             }
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/projects/singleb',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { apartment:'b'  ,aptType:'1bedroom'}},
            {
               $group:{
                _id:'$apartment',
                total:{$sum:1},
               
                
            } 
            }
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/projects/singlec',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { apartment:'c'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/projects/singleab',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { houseNo:'G1'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/projects/singleab',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { houseNo:'G2'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/projects/singlea',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { apartment:'a'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/projects/singlebb',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { apartment:'b'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})


router.get ('/caretaker',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await MileModal.aggregate([
            { $match : { } },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
 
router.get ('/charts',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-3)
      
  
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : {aptType:'2bedroom',createdAt:{$gte:new Date(previosMonth)} } },
            {
                $project:{
                    month:{$month:'$createdAt'},
                    total:"$amount"
                }
            },
            
            
            {
                $group:{
                    _id:'$month',
                    total:{$sum:"$total"},
                    
                }
            }
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }

 })
 router.get ('/chartss',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-3)
      
  
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { } },
            
                
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }

 })
 router.get ('/users',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-3)
      
  
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await UserModal.aggregate([
            { $match : { } },
            
                
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }

 })
 router.get ('/users/caretaker',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-3)
      
  
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await MileModal.aggregate([
            { $match : { } },
            
                
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }

 })

export default router


router.get('/all', isAdmin ,async(req,res)=>{
    try {
        const users=await UserModal.find().sort({_id:-1});
        res.status(200).send(users)
        } catch (error) {
        res.status(500).send(error)
    }

})

router.delete('/:id', isAdmin, async (req,res)=>{
    try {
        const deleteUser= UserModal.findByIdAndDelete(req.params.id);
        res.status(200).send(deleteUser)
    } catch (error) {
        res.status(500).send(error)

    }
})