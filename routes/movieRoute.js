const express = require('express');
const { getMovies, createMovies, updateMovies, deleteMovies } = require('../controller/movieController');
const router = express.Router();

router.get('/',getMovies);

router.post('/',createMovies);

router.put('/:id',updateMovies)

router.delete('/:id',deleteMovies)

module.exports = router;
