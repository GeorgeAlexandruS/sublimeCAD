<template>
<div id="custom-home">
    <Header />
    <Whatis />
    <Blogs />


</div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Whatis from '@/heroes/Whatis.vue'
import Blogs from '@/heroes/Blogs.vue'

export default {
  name: 'home',
  components: {
    Header,
    Whatis,
    Blogs

  }
}
</script>
