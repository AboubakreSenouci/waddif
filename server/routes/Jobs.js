
const express = require('express')
const router = express.Router()
const {Jobs} = require('../models')
const jobs = require("../controllers/Jobs.controller.js")

const getPagination = (page, size) => {
    const limit = size? +size : 10;
    const offset = page? page * limit : 0;
    return {limit, offset}
}

const getPaginateData = (data, page, limit) => {
    const {count: totalItems, rows: jobs} = data;
    const currentPage = page? +page: 0;
    const totalPages = Math.ceil(totalItems/ limit)
    
    return{totalItems, jobs, totalPages, currentPage};
}


router.get("/", (req, res) => {
    
    const { page, size } = req.query;
    const { limit, offset } = getPagination(page, size);

    Jobs.findAndCountAll({limit, offset}).then((data) => {
        const response = getPaginateData(data, page, limit);
        res.send(response);
    }).catch(err => {
        message:
        err.message || "Some error occurred while retrieving tutorials."
    })});

router.get("/work_From_Home", (req, res) => {
    Jobs.findAndCountAll({where: {category: 'work from home'}}).then((data) => {
        res.send(data)
    })
})

module.exports = router;
