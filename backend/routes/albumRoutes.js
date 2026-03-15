const express = require('express');
const router = express.Router();
const {addAlbum,getAlbum,getAlbumById,updateAlbum,deleteAlbum}=require('../controllers/albumController');

router.get('/', getAlbum);              
router.get('/:id', getAlbumById);        
router.post('/', addAlbum);
router.put('/:id', updateAlbum);        
router.delete('/:id', deleteAlbum);      

module.exports = router 