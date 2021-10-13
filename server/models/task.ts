import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 10
    },
    description: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    dueDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const Task = mongoose.model('Task', taskSchema);

export default Task;