const Reports = require("../model/reports")

const insertReports = (req, res) => {
    try {
        console.log(req.body)
        Reports.create({ ...req.body }).then(() => {
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

const fetchReports = async (req, res) => {
    try {
        let data = await Reports.find()
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
//     String date = "${dates.day}/${dates.month}/${dates.day}";

const fetchConditionalReports = async (req, res) => {
    try {
        const condition = {
            $or: [
                { date: req.body["date"] }
            ]
        }; // Fetch documents where age is greater than or equal to 18

        let data = await Reports.find(condition)
        res.status(200).json({
            status: true,
            message: "data fetched successfully",
            data: data,
            body: req.body
        })
        console.log("Try block")
    } catch (error) {
        console.log(error)
        res.send({
            status: false,
            message: error,
            body: req.body
        })
    }
}



module.exports = { insertReports, fetchReports, fetchConditionalReports }