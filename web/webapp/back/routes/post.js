const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
    res.json({id : 1, content : 'Hello, Post'});
});


router.post('/', (req,res) => {
    res.json({id : 1, content : 'Hello'});
});


router.delete('/', (req,res) => {
    res.json({id : 1});
});


module.exports = router;