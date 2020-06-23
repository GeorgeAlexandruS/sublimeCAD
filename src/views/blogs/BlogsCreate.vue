<template>
  <div>
    <section class="banner-section pt-200 pb-175">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-title text-center">
              <h1>Contact</h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="row">
      <div class="col-lg-12 form-wrapper">
        <div class="form-box">
          <div class="contact-form">
            <form v-on:submit.prevent="onSubmit">
              <div class="form-group">
                <input v-model="blog.title" type="text" class="form-control" id="title" name="title" placeholder="Title" />
              </div>

              <div class="form-group">
                <textarea placeholder="Body" class="form-control" v-model="blog.body" name="body" id="body" cols="30" rows="10"></textarea>
              </div>

              <div class="form-group">
                <label for="due-date">Due Date</label>
                <input name="due-date" v-model="blog.dueDate" type="date" class="form-control" id="due-date" placeholder="Due Date" />
              </div>
              
              <div class="form-group ">
                <input id="form_botcheck" name="form_botcheck" class="form-control" type="hidden" value="">
                <button class="btn-bg" type="submit" data-loading-text="Please wait...">PUBLISH</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as blogService from '../../services/BlogService'

  export default {
    name: 'blogs-create',
    data: function() {
      return {
        blog: {
          title: '',
          body: '',
          dueDate: ''
        }
      }
    },
    methods: {
      onSubmit: async function() {
        const request = {
          blog: this.blog
        }
        await blogService.createBlog(request);
        this.$router.push({
          name: 'blogs-all'
        });
      }
    }
  }
</script>
