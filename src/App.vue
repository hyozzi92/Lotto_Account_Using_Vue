<template>
  <div class="container-xl">
  <Nav/>

    <Carousel/>

    <Tab/>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Carousel from './components/Carousel'
import Tab from './Tabs/Tab'




export default {
  name: 'App',
  components: {
    Nav,
    Carousel,
    Tab,
  }
}
</script>

<style>
#app{
  margin-top:30px;
  height: 100vh;
}
.container-xl{
  display:flex;
  flex-direction:column;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
}
</style>
