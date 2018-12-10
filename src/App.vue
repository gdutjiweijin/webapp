<template>
    <div id="app">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
        }
    }
}
</script>

<style lang="less">
@import "./common/css/index.less";
body{
  background-color: @background-dark-color;
}
#app {
  font-family: 'pingfang sc regular', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
