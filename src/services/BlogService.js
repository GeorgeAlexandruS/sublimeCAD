import { http } from './HttpService'

export function getAllBlogs() {
    return http().get('/blog');
}

export function getBlogById(id) {
    return http().get(`/blog/${id}`);
}

export function createBlog(blog) {
    return http().post('/blog', blog);
}

export function deleteBlog(id) {
    return http().delete(`/blog/${id}`);
}

export function updateBlog(blog) {
    return http().put('/blog', blog);
}
