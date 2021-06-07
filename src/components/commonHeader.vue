<template>
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top ">
        <div class="container-fluid d-flex align-items-center justify-content-between">

            <h1 class="logo"><router-link to="/" >BZSP</router-link></h1>
            <!-- Uncomment below if you prefer to use an image logo -->
            <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
            <nav class="nav-menu d-none d-lg-block">
                <ul>
                    <li class="active"><router-link to="/">Home</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                </ul>
            </nav><!-- .nav-menu -->

<!--            <router-link to="/" class="get-started-btn scrollto">Play Video</router-link>-->
        </div>
    </header><!-- End Header -->
</template>

<script>
    export default {
        name: "commonHeader"
    }
</script>

<style scoped>

</style>