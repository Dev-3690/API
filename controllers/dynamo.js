const AWS = require("aws-sdk")
const CONFIG = require("../config")
const uuid = require("uuid")

const addData = async(req,res) => {
try {
    AWS.config.update(CONFIG.aws_remote_config)

    const docClient = new AWS.DynamoDB.DocumentClient();
    const Item = { ...req.body };
    Item.id = uuid.v4()
    var params = {
        TableName: CONFIG.aws_table_name,
        Item: Item
    };

    docClient.put(params,  (err, data) => {
        if (err) {
            res.send({
                success: false,
                message: err
            });
        } else {
            res.send({
                success: true,
                message: 'Data Inserted Successfully',
            });
        }
    });

} catch (error) {
    res.send({
        success: false,
        message: error
    });
}

}

const initialPage = (req,res) => {
    res.status(200).send({msg:"initial Page",statusCode:200})
    res.status(404).send({msg:"Page Not Found",statusCode:200})
}


const getData = (req,res) => {
    AWS.config.update(CONFIG.aws_remote_config);

    const docClient = new AWS.DynamoDB.DocumentClient();

    const params = {
        TableName: CONFIG.aws_table_name
    };

    docClient.scan(params, function (err, data) {
        if (err) {
            console.log(err)
            res.send({
                success: false,
                message: err
            });
        } else {
            const { Items } = data;
            res.send({
                success: true,
                movies: Items
            });
        }
    });
}


module.exports = {addData , initialPage , getData}