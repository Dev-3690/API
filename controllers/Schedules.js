const { ObjectId } = require("mongodb")
const Schedule = require("../model/varunModel")

const insertSchedule = (req, res) => {
    try {
        console.log(req.body)
        Schedule.create({ ...req.body }).then(() => {
            res.send({
                status: true,
                message: "Data added successfully",
                body: req.body
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

const fetchSchedules = async (req, res) => {
    try {
        let data = await Schedule.find()
        res.status(200).json({
            status: true,
            message: "data fetched successfully",
            data: data
        })
    } catch (error) {
        res.send({
            status: false,
            message: error
        })
    }
}

const editSchedule = async(req, res) => {
    try {
        console.log(req.body)
        let id = new ObjectId(req.body["_id"])
        await Schedule.updateOne({ _id: id }, {$set : req.body}).then(() => {
            res.send({
                status: true,
                message: "Data updated successfully",
                body: {...req.body},
                id : id
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

const deleteSchedules = async (req, res) => {
    try {
        let id = new ObjectId(req.body["_id"])
        await Schedule.deleteOne({ _id: id })
        res.status(200).json({
            status: true,
            message: "data deleted successfully",
        })

    } catch (error) {
        res.send({
            status: false,
            message: error.message,
            data: req.body
        })
    }
}
module.exports = { insertSchedule, fetchSchedules, deleteSchedules, editSchedule }