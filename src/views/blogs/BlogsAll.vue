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

          <!--start sedebar area-->
          <div class="col-lg-4">
            <div class="sidebar-area">

              <!--search Widget-->
              <div class="sidebar-widget search-widget">
                <form method="post" action="contact.html">
                  <div class="form-group">
                    <input type="search" name="search-field" value="" placeholder="enter keyword" required="">
                    <button type="submit"><span class="icon fa fa-search"></span></button>
                  </div>
                </form>
              </div>
              <!--categories Widget-->
              <div class="sidebar-widget category-widget">
                <div class="inner-title">
                  <h5>Categories</h5>
                </div>
                <ul>
                  <li><a href="#">Wordpress</a></li>
                  <li><a href="#">New Design</a></li>
                  <li><a href="#">Graphic Design</a></li>
                  <li><a href="#">Redesign</a></li>
                  <li><a href="#">Branding</a></li>
                </ul>
              </div>

              <div class="sidebar-widget sidebar-news">
                <div v-if="blogs && blogs.length > 0" class="news-title">
                  <div class="inner-title">
                    <h5>Latest Blogs</h5>
                  </div>
                  <ul v-for="blog in blogs" v-bind:key="blog._id" class="top-news-item">
                    <li>
                      <h6>{{ blog.title }}</h6>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="sidebar-widget sidebar-news">
                <div class="news-tags">
                  <div class="inner-title">
                    <h5>News tags</h5>
                  </div>
                  <ul>
                    <li><a href="#">design</a></li>
                    <li><a href="#">C#</a></li>
                    <li><a href="#">plugin</a></li>
                    <li><a href="#">forge</a></li>
                    <li><a href="#">tutorial</a> </li>
                    <li><a href="#">autocad</a></li>
                    <li><a href="#">inventor</a> </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as blogService from '../../services/BlogService'
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
