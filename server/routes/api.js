const express = require('express');
const router = express.Router();


//Declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

//Get API listening
router.get('/', (req,res) => {
    res.send('api works');
});

//Get all posts
router.get('/posts', (req,res) => {
    //Get posts from mock api
    //This should ideally be replaced with a service that connects to MongoDB
    axios.get(`${API}/posts`)
    .then(posts => {
        res.status(200).json(posts.data);
    })
    .catch(error => {
        res.status(500).send(error)
    });
})

module.exports = router;