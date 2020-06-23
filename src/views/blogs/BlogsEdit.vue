<template>
<div>
  <h1>Edit Blog</h1>
  <form class="custom-form" v-on:submit.prevent="onSubmit">
    <div class="form-group">
      <label for="title">Title</label>
      <input v-model="blog.title" type="text" class="form-control" id="title" name="title" placeholder="Title" />
    </div>
    <div class="form-group">
      <label for="body">Body</label>
      <textarea placeholder="Body" class="form-control" v-model="blog.body" name="body" id="body" cols="30" rows="10"></textarea>
    </div>
    <div class="form-group">
      <label for="due-date">Due Date</label>
      <input name="due-date" v-model="blog.dueDate" type="date" class="form-control" id="due-date" placeholder="Due Date" />
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-secondary">Save Changes</button>
    </div>
  </form>
</div>
</template>

<script>
import * as blogService from '../../services/BlogService'
import moment from 'moment';

export default {
  name: 'blogs-edit',
  data: function() {
    return {
      blog: {
        title: '',
        body: '',
        dueDate: ''
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    blogService.getBlogById(to.params.id)
      .then(response => {
        if (!response) {
          next('/blogs');
        } else {
          next(vm => {
            const blog = response.data.blog;
            blog.dueDate = moment(blog.dueDate).format('YYYY-MM-DD');
            vm.blog = blog;
          })
        }
      });
  },
  methods: {
    onSubmit: async function() {
      const request = {
        blog: this.blog
      }
      await blogService.updateBlog(request);
      this.$router.push({
        name: 'blogs-all'
      });
    }
  }
}
</script>
