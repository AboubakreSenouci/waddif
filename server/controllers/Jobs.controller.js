const db = require("../models")
const Jobs = db.Jobs;


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

exports.findAllJobs = (req, res) => {
    
    const { page, size } = req.query;
    const { limit, offset } = getPagination(page, size);

    Jobs.findAndCountAll({limit, offset}).then((data) => {
        const response = getPaginateData(data, page, limit);
        res.send(response);
    }).catch(err => {
        message:
        err.message || "Some error occurred while retrieving tutorials."
    })
}
