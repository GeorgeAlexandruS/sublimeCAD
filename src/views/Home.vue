<template>
  <div id="custom-home">
    <Header />
    <HeroWhatis />
    <HeroBlogs />
  </div>
</template>

<script>
  // @ is an alias to /src

  import Header from '@/components/Header.vue'
  import HeroWhatis from '@/heroes/HeroWhatis.vue'
  import HeroBlogs from '@/heroes/HeroBlogs.vue'

  export default {
    name: 'home',
    components: {
      Header,
      HeroWhatis,
      HeroBlogs
    }
  }
</script>
