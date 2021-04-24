const express = require('express');
const router = express.Router();

const resCtrl = require('../controllers/response');
const villas = require('../schema/villas');

router.post('/list', async(req, res) => {
    try {
        // const { filtered, pagination } = req.body;
        const regx = {};

        const result = await villas.find(regx);
        if(result) {
            res.json(resCtrl.res200({ data: result }));
        } else {
            res.json(run.err404());
        };
        
    } catch (error) {
        console.log(error);
        res.json(resCtrl.res500());
    };
});

module.exports = router;