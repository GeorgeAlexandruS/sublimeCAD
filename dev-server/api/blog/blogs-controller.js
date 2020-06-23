import User from '../../model/user-model';
import Blog from '../../model/blog-model';
import moment from 'moment';
import * as auth from '../../services/auth-service';

export function index(req, res) {
    // FIND ALL TASKS
    Blog.find({}, (error, blogs) => {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ blogs: blogs });
    }).populate('author', 'username', 'user');
    // Populate will find the author that created the blog and add it to the blog (username only)
}

export function create(req, res) {
    const id = auth.getUserId(req);
    User.findOne({ _id: id }, (error, user) => {
        if (error && !user) {
            return res.status(500).json();
        }
        const blog = new Blog(req.body.blog);
        blog.author = user._id;
        blog.dueDate = moment(blog.dueDate);

        blog.save(error => {
            if (error) {
                return res.status(500).json();
            }
            return res.status(201).json();
        });
    });
}

export function update(req, res) {
    const id = auth.getUserId(req);

    User.findOne({ _id: id }, (error, user) => {
        if (error) {
            return res.status(500).json();
        }
        if (!user) {
            return res.status(404).json();
        }

        const blog = new Blog(req.body.blog);
        blog.author = user._id;
        blog.dueDate = moment(blog.dueDate); // Formats the due date to a proper date format
        Blog.findByIdAndUpdate({ _id: blog._id }, blog, error => {
            if (error) {
                return res.status(500).json();
            }
            return res.status(204).json();
        });
    });
}

export function remove(req, res) {
    const id = auth.getUserId(req);
    Blog.findOne({ _id: req.params.id }, (error, blog) => {
        if (error) {
            return res.status(500).json();
        }
        if (!blog) {
            return res.status(404).json();
        }
        if (blog.author._id.toString() !== id) {
            return res.status(403).json({ message: 'Not allowed to delete another user\'s blog' });
        }
        Blog.deleteOne({ _id: req.params.id }, error => {
            if (error) {
                return res.status(500).json();
            }
            return res.status(204).json();
        });
    });
}

export function show(req, res) {
    // GET TASK BY ID
    Blog.findOne({ _id: req.params.id }, (error, blog) => {
        if (error) {
            return res.status(500).json();
        }
        if (!blog) {
            return res.status(404).json();
        }
        return res.status(200).json({ blog: blog });
    });
}
