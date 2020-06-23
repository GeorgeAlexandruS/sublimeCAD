

<template>

<div>
    <!--====================================================================
                            Start breadcumb section
    =====================================================================-->
    <section class="banner-section pt-200 pb-175">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-title text-center">
                        <h1>REGISTER</h1>
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
                        <p>Welcome To Our Family.
                            <br> You are just one step away to your feed.</p>
                        <form v-on:submit.prevent="onSubmit" class="login-form">
                            <div class="text-field">
                                <input v-model="first" type="text" class="" id="first" placeholder="First Name" />
                            </div>
                            <div class="text-field">
                                <input v-model="last" type="text" class="" id="last" placeholder="Last Name" />
                            </div>
                            <div class="text-field">
                                <input v-model="username" type="text" class="" id="username" placeholder="Username" />
                            </div>
                            <!-- <div class="email-field">
                                <input v-model="email" type="text" class="" id="email" placeholder="email" />
                            </div> -->
                            <div class="password-field">
                                <input v-model="password" type="password" class="" id="password" placeholder="Password" />
                            </div>
                            <div class="signin-button-wrap">
                                <button type="submit" class="btn-bg2">REGISTER</button>
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
                            Allready have an account?
                            <router-link to="/login" class="signup-link" exact>
                                LOG IN
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
    name: 'register',
    data: function() {
        return {
            username: '',
            password: '',
            first: '',
            last: ''
        }
    },
    methods: {
        onSubmit: async function() {
            const user = {
                username: this.username,
                password: this.password,
                first: this.first,
                last: this.last
            }
            const registerPromise = auth.registerUser(user);
            const loginPromise = auth.login(user);
            await Promise.all([registerPromise, loginPromise]);
            this.$router.push({
                name: 'home'
            });
        }
    }
}

</script>
