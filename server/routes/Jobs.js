
const express = require('express')
const router = express.Router()
const {Jobs} = require('../models')
const url = require('url');


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

    const searchParams = new URLSearchParams(req.url);
    var arr = [];
    for (const value of searchParams.values()) {
        arr.push(value)
    }

    const { page, size } = req.query;
    const { limit, offset } = getPagination(page, size);

    Jobs.findAndCountAll(
        arr.length>1 ? {where: {
            category: arr
        }, limit, offset} : {limit, offset}).then((data) => {
        const response = getPaginateData(data, page, limit);
        res.send(response);
    }).catch(err => {
        message:
        err.message || "Some error occurred while retrieving jobs."
    })});

module.exports = router;
