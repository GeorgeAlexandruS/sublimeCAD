<template>

  <div class="">


    <!--====================================================================
                        Start breadcumb section
=====================================================================-->
    <section class="banner-section pt-200 pb-175">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-title text-center">
              <h1>Log In</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--====================================================================
                        end breadcumb section
=====================================================================-->

    <section class="login-area another-page pt-60">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="login-information pb-150">
              <h2>Hey There!</h2>
              <p>Welcome Back. <br>
                You are just one step away to your feed.</p>

              <form v-on:submit.prevent="onSubmit" class="login-form">

                <div class="text-field">
                  <input v-model="username" type="text" id="username" placeholder="Username" />
                </div>

                <div class="password-field">
                  <input v-model="password" type="password" id="password" placeholder="Password" />
                </div>

                <div class="signin-button-wrap">
                  <button type="submit" class="btn-bg2">Log In</button>
                  <div class="forgot-text"><a href="#">Forgot Password</a></div>
                </div>

              </form>

              <div class="or-text">or</div>
              <div class="share-btn-wrap">
                <div class="facebook-btn">
                  <a href="#"><i class="fa fa-facebook"></i><span>Facebook</span></a>
                </div>
                <div class="twitter-btn">
                  <a href="#"><i class="fa fa-twitter"></i><span>Twitter</span></a>
                </div>
                <div class="google-btn">
                  <a href="#"><i class="fa fa-google"></i><span>Google</span></a>
                </div>
              </div>

              <div class="alternative-login">
                Don't have an account yet ?
                <router-link to="/register" class="signup-link" exact>
                  REGISTER
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-4 login-image-wrap d-flex align-items-center">
            <div class="login_img">
              <img src="assets/img/login-signup/login.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import * as auth from '../../services/AuthService'

  export default {
    name: 'login',
    data: function() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      onSubmit: async function() {
        const user = {
          username: this.username,
          password: this.password
        }
        await auth.login(user);
        this.$router.push({
          name: 'home'
        });
      }
    }
  }
</script>
