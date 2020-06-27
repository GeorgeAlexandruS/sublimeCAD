<template>

  <div class="">
    <div class="sidebar-page-container another-page pt-95">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="blog-post-thumb">
              <img src="assets/img/blog/blog-thumb.png" alt="blog image">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8">

            <div class="blog-details-wrap">


              <!-- blog-post-inner -->
              <div v-for="blog in blogs" v-bind:key="blog._id" class="single-blog-post-inner">

                <div class="post-admin">
                  <div class="post-admin-left">
                    <div class="single-blog-post-date">
                      <ul>
                        <li><a href="#">25 Jan 19 / Design</a></li>
                      </ul>
                    </div>
                    <div class="post-love">
                      <ul>
                        <li><a href="#"><i class="fa fa-heart" aria-hidden="true"></i></a>2</li>
                        <li><a href="#"><i class="fa fa-comment" aria-hidden="true"></i></a>3</li>
                      </ul>
                    </div>
                  </div>
                  <div class="admin-by">
                    <a href="#">by Alex Muzad</a>
                  </div>
                </div>


                <h4>You’re one good idea away from your own tech podcast</h4>
                <div class="post-content">
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex arvel theme dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etdoloreasdes magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodalo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident</p>
                  <p>sunt in culpa qui officia deserunt mollit inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                    dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,</p>
                  <p>sed quia non numquam. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodalo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla
                  </p>

                  <blockquote>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt culpa quite deserunt enal mollit anim id estambul ilaborum. Sed ultra practice omnis iste natus error unexpected site</p>
                  </blockquote>
                  <p>Lanventore veritatis et quasi architecto beatae vitae dicta sutnt explicabo. Nemo enim ipsam voluptatem quiav luptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quisquam est, qui emdamet.</p>

                  <div class="blog-inner-img">
                    <img src="assets/img/blog/lock.png" alt="blog image">
                  </div>

                  <div class="blog-inner-content">
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex arvel theme dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etdoloreasdes magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodalo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit</p>
                    <p> inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                      nesciunt. Neque porro quisquam</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-8 col-lg-8 col-md-8">
                    <div class="blog-post-tag">
                      <h5>Releted Tags</h5>
                      <a href="#">Cloud Storage</a>
                      <a href="#">Android</a>
                      <a href="#">E-commerce</a>
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-4">
                    <div class="blog-share-icon text-md-right text-left">
                      <h5>Social Share</h5>
                      <ul>
                        <li>
                          <a href="#"><i class="fa fa-facebook-f"></i></a>
                          <a href="#"><i class="fa fa-twitter"></i></a>
                          <a href="#"><i class="fa fa-behance"></i></a>
                          <a href="#"><i class="fa fa-dribbble"></i></a>
                          <a href="#"><i class="fa fa-linkedin-square"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end blog-post-inner -->
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
