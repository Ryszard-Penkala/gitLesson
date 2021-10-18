const express = require('express');

const calcRouter = express.Router();

calcRouter
    .post('/check', (req, res)=>{
        console.log(req.body);
        const divRest = req.body.numberAValue % req.body.numberBValue;
        divRest === 0?res.json({ok:true}):res.json({ok: false});
    })

module.exports = {
    calcRouter,
}