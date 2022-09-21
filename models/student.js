const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema(
    {
        full_name: { type: String, required: true },
        marks: { type: Number, default: 0, required: true },
        is_paid: { type: Boolean, default: false },
        is_deleted: { type: Boolean, default: false },
    },
);

studentSchema.set('toJSON', {
    transform: function (doc, ret, opt) {
        delete ret['__v']
        delete ret['updatedAt']
        return ret
    }
})

studentSchema.virtual('id').get(function () {
    return this._id;
});

studentSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('student', studentSchema);