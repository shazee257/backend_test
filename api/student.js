const router = require('express').Router();

const {
    createStudent,
    getStudents,
    getStudent,
    updateStudent,
    deleteStudents
} = require('../controllers/student');

router.get('/', getStudents);
router.get('/:id', getStudent);
router.post('/', createStudent);
router.put('/:id', updateStudent);

router.put('/', deleteStudents);


module.exports = router;