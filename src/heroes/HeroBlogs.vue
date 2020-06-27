<template>

  <div id="">
    <section class="cc-latest-news mb-170 rmb-70">
      <div class="container">

        <div class="con-cloud-section-title text-center mb-55">
          <span class="sub-title">blogs</span>
          <h2>Our Latest blogs</h2>
          <p>Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus
            <br>ante, mattis eget, gravida vitae, ultricies.</p>
        </div>

        <div v-if="blogs && blogs.length > 0" class="">
          <div v-for="blog in blogs" v-bind:key="blog._id" class="row">
            <div class="col-lg-4 col-md-6">
              <div class="cc-single-news">
                <div class="cc-news-img">
                  <img src="../assets/img/con-cloud/news-1.png" alt="News">
                </div>
                <div class="cc-news-content">
                  <span class="date"><i class="fa fa-clock-o"></i> 15 Aug, 2019</span>
                  <h4><a href="#">{{ blog.title }}</a></h4>
                  <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="shape shape6"><img src="../assets/img/con-cloud/shape-6.png" alt="shape"></div>
      <div class="shape shape7"><img src="../assets/img/con-cloud/shape-10.png" alt="shape"></div>
      <div class="shape shape4"><img src="../assets/img/con-cloud/shape-10.png" alt="shape"></div>
    </section>
  </div>

</template>
<script>

    import * as blogService from '../services/BlogService'
    import moment from 'moment'

    export default {
        name: 'blogs-all',
        data: function() {
            return {
                blogs: null,
                currentBlogId: null
            }
        },
        beforeRouteEnter(to, from, next) {
            blogService.getAllBlogs()
                .then(res => {
                    next(vm => {
                        vm.blogs = res.data.blogs;
                    });
                });
        },
        methods: {
            blogIsLate: function(date) {
                return moment(date).isBefore();
            },
            cancelModal: function() {
                this.$refs.modal.hide();
                this.currentBlogId = null;
            },
            deleteBlog: async function() {
                this.$refs.modal.hide();
                await blogService.deleteBlog(this.currentBlogId);
                const index = this.blogs.findIndex(blog => blog._id === this.currentBlogId);
                this.blogs.splice(index, 1);
                this.currentBlogId = null;
            },
            markAsCompleted: function(blog) {
                blog.completed = true;
                const request = {
                    blog: blog
                }
                blogService.updateBlog(request);
            }
        }
    }
</script>
