<template>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  beforeCreate: function() {
   fetch(this.$store.state.apiUrl + '/api/user', {
     method: 'GET'
   })
   //.then(res => res.json())
   //.then(res => console.log(res));

   .then(res => res.text())          // convert to plain text
   .then(text => console.log(text))  // then log it outy
 }
}
</script>
