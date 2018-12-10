<template>
  <div class="index">
    <!-- Default -->
    <ion-app>
      <router-view/>
    </ion-app>

  </div>
</template>

<script lang="">
export default {
    name: 'App',
    data () {
        return {
            time: 0
        }
    },
    mounted(){
    }
}
</script>

<style lang="less">
  @import "../common/css/index.less";
</style>
