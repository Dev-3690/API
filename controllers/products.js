const Products = require("../model/products")

const insertProduct = (req, res) => {
    try {
        console.log(req.body)
        Products.create({ ...req.body }).then(() => {
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

const fetchProducts = async (req, res) => {
    try {
        let data = await Products.find()
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

module.exports = { insertProduct,fetchProducts }