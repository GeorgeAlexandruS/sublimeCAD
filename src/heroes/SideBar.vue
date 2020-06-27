<template>

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
          <li><a href="#">Design Software</a></li>
          <li><a href="#">Plugins</a></li>
          <li><a href="#">Tutorials</a></li>
          <li><a href="#">News</a></li>
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

</template>
