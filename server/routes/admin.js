import UserModal from "../models/user.js";
import express  from "express";
import TourModal from '../models/tour.js'

import moment from 'moment'
import MileModal from "../models/milestone.js";
const router = express.Router();


router.get ('/',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
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

router.get ('/projects',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
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

export default router