<template>
  <div class="">
    <section class="banner-section pt-200 pb-175">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-title text-center">
              <h1>sublimeBLOG</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="blog-grid-wrapper another-page pt-95">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div v-for="blog in blogs" v-bind:key="blog._id" class="row">
              <!--  Blog list -->
              <div class="col-lg-12 col-md-12 wow animated customFadeInLeft">
                <div class="news-block mb-30">
                  <div class="blog-thumb">
                    <img src="../../assets/img/blog/grid-blog2.png" alt="news">
                  </div>
                  <div class="news-inner">
                    <h5><a href="blog-details.html">{{ blog.title }}</a></h5>
                    <div class="news-text">
                      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed</p>
                    </div>
                    <div class="admin-by">
                      <a href="#">{{ blog.author.username }}</a>
                    </div>
                    <div class="post-date">
                      <a href="#">{{ blog.dueDate | date }}</a>
                    </div>
                  </div>
                  <div class="hover">
                    <div class="hover-inner">
                      <h4><a href="blog-details.html">{{ blog.title }}</a></h4>
                      <div class="blog-read-time">{{ blog.author.username }}</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- end of blog list -->
            </div>
          </div>

          <!--start sidebar area-->
          <SideBar />
          <!--end sidebar area-->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as blogService from '../../services/BlogService'
  import SideBar from '@/heroes/SideBar.vue'
  import moment from 'moment'

  export default {
    name: 'blogs-all',
    data: function() {
      return {
        blogs: null,
        currentBlogId: null
      }
    },
    components: {
      SideBar
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
