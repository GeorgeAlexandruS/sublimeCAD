import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: String,
    body: String,
    dueDate: { type: Date, default: Date.now },
    completed: { type: Boolean, default: false },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
});
blogSchema.set('timestamps', true); // Adds create_at and updated_at timestamps

export default mongoose.model('blog', blogSchema);
