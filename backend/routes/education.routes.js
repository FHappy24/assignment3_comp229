const express = require('express');
const router = express.Router();
const {
  createEducation,
  getAllEducation,
  updateEducation,
  deleteEducation,
} = require('../controllers/education.controller');
const verifyToken = require('../middleware/verifyToken'); // will create next

router.get('/', getAllEducation);
router.post('/', verifyToken, createEducation);
router.put('/:id', verifyToken, updateEducation);
router.delete('/:id', verifyToken, deleteEducation);

module.exports = router;
