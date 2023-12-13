
const mongoose = require("mongoose")
const collection = require("../model/usermodel")
const speakeasy = require('speakeasy');

const insertData = (req, res) => {

    try {
        console.log(req.body)
        // res.send({
        //     status: true,
        //     message: "Data added successfully",
        //     data: req.body
        // })
        collection.create({ ...req.body }).then(() => {
            res.send({
                status: true,
                message: "Data added successfully",
            })
        }).catch((err) => {
            res.send({
                status: false,
                message: "promise error",
                error: err
            })
        })
    } catch (error) {
        res.send({
            status: false,
            message: error
        })
    }
}


const fetchData = async (req, res) => {
    try {
        let data = await collection.find()
        res.status(200).json({
            status: true,
            message: "data fetched",
            data: data
        })
        // await collection.find().then((response)=>{
        //     // res.send({
        //     //     status:true,
        //     //     data:res
        //     // })
        //     res.status(200).json({
        //         status:true,
        //         message:"data fetched",
        //         data : response
        //     })

        // }).catch((err)=>{
        //     res.send({
        //         status:false,
        //         message:err
        //     })
        // })
    } catch (error) {
        res.send({
            status: false,
            message: error
        })
    }
}

const sendOtp = (req, res) => {
    try {
        const secret = speakeasy.generateSecret({ length: 20 });

        const code = speakeasy.totp({
            secret: secret.base32,
            encoding: 'base32'
        });
        console.log('Secret: ', secret.base32);
        console.log('Code: ', code);

        res.status(200).json({
            status: true,
            message: "otp received",
            data: code
        })
    } catch (error) {
        res.send({
            status: false,
            message: error
        })
    }
}


module.exports = { insertData, fetchData,sendOtp }