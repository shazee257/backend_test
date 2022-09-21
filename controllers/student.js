const StudentModel = require('../models/student');

// create a new brand
exports.createStudent = async (req, res, next) => {
    try {
        const student = await StudentModel.create(req.body);
        res.status(200).json({
            student,
            message: 'Student added successfully',
        });
    } catch (error) {
        next(error);
    }
};

// get all students
exports.getStudents = async (req, res, next) => {
    try {
        const students = await StudentModel.find({ is_deleted: false });
        res.status(200).json({
            students,
            message: 'Students fetched successfully',
        });
    } catch (error) {
        next(error);
    }
}

// get a single student
exports.getStudent = async (req, res, next) => {
    try {
        const student = await StudentModel.findById(req.params.id);
        res.status(200).json({
            student,
            message: 'Student fetched successfully',
        });
    } catch (error) {
        next(error);
    }
}

// update a student
exports.updateStudent = async (req, res, next) => {
    try {
        const student = await StudentModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.status(200).json({
            student,
            message: 'Student updated successfully',
        });
    } catch (error) {
        next(error);
    }
}

// soft delete students by ids
exports.deleteStudents = async (req, res, next) => {
    try {
        const students = await StudentModel.updateMany({ _id: { $in: req.body.ids } }, { is_deleted: true });
        res.status(200).json({
            students,
            message: 'Students deleted successfully',
        });
    } catch (error) {
        next(error);
    }
}
