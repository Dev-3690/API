const express = require("express")
const router = express.Router()
const ctrl = require("../controllers/dynamo")
const ctrl2 = require("../controllers/mongo")
const ScheduleCont = require("../controllers/Schedules_cont")
const productCont = require("../controllers/products_cont")
const ReportCont = require("../controllers/reports_cont")



router.route("/").get(ctrl.initialPage)

// aws routes
router.route("/addData").post(ctrl.addData)
router.route("/getData").get(ctrl.getData)

router.route("/insertData").post(ctrl2.insertData)
router.route("/fetchData").get(ctrl2.fetchData)
router.route("/sendOtp").get(ctrl2.sendOtp)


// varun API Schedules
router.route("/insertSchedule").post(ScheduleCont.insertSchedule)
router.route("/fetchSchedule").get(ScheduleCont.fetchSchedules)
router.route("/deleteSchedule").post(ScheduleCont.deleteSchedules)
router.route("/editSchedule").post(ScheduleCont.editSchedule)

router.route("/insertProduct").post(productCont.insertProduct)
router.route("/fetchProducts").get(productCont.fetchProducts)

router.route("/insertReports").post(ReportCont.insertReports)
router.route("/fetchReports").get(ReportCont.fetchReports)
router.route("/fetchConditionalReports").post(ReportCont.fetchConditionalReports)


module.exports = router
