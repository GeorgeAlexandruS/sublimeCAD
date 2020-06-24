

<template>

<header class="main-header">

    <!--Header-Upper-->
    <div class="header-upper">
        <div class="container clearfix">

            <div class="header-inner clearfix d-lg-flex">
                <div class="logo-outer">
                    <router-link to="/" class="navbar-brand">
                        <div class="logo">
                            <a href="index.html"><img src="../assets/img/logo/sublime-logo.png" alt="" title=""></a>
                        </div>
                        <div class="fixed-logo">
                            <a href="index.html"><img src="../assets/img/logo/sublime-logo.png" alt="" title=""></a>
                        </div>
                    </router-link>
                </div>

                <!-- Main Menu -->
                <nav class="main-menu navbar-expand-md ml-md-auto">
                    <div class="navbar-header clearfix">
                        <div class="logo">
                            <a href="index.html"><img src="../assets/img/logo/sublime-logo.png" alt="" title=""></a>
                        </div>
                        <div class="fixed-logo">
                            <a href="index.html"><img src="../assets/img/logo/sublime-logo.png" alt="" title=""></a>
                        </div>
                        <!-- Toggle Button -->
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse-one">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>

                    <div class="navbar-collapse navbar-collapse-one collapse clearfix">
                        <ul class="navigation clearfix">

                            <li class="current dropdown">
                                <router-link to="/" class="nav-link" exact>
                                    Home
                                </router-link>
                            </li>

                            <li class="dropdown">
                                <router-link to="/blogs" class="nav-link" exact>
                                    Blog
                                </router-link>
                            </li>

                            <li class="dropdown"><a href="#">Tools</a></li>
                            <li class="dropdown"><a href="#">Examples</a></li>

                            <li v-if="!$store.state.isLoggedIn" class="login">
                                <router-link to="/login" class="nav-link" exact>
                                    LOGIN
                                </router-link>
                            </li>

                            <li v-if="!$store.state.isLoggedIn" class="register">
                                <router-link to="/register" class="nav-link" exact>
                                    REGISTER
                                </router-link>
                            </li>

                            <li v-if="$store.state.isLoggedIn" class="logout">
                                <a v-on:click.prevent="logout()" class="nav-link" href="#">Logout</a>
                            </li>

                            <li v-if="$store.state.isLoggedIn" class="Disabled">
                                <!-- Display the current user's username in the navbar -->
                                <a class="nav-link" href="#">
                    Hi, {{ this.$store.state.username ? this.$store.state.username : 'User' }}
                  </a>
                            </li>

                        </ul>

                    </div>
                </nav>
            </div>
        </div>
    </div>
    <!--End Header Upper-->

</header>

</template>

<script>

import * as auth from '../services/AuthService';

export default {
    name: 'Navbar',
    methods: {
        logout: function() {
            auth.logout();
            this.$router.push({
                name: 'home'
            });
        }
    }
}

</script>
