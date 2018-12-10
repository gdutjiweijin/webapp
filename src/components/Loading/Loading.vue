<template>
  <div class="loading-contain" v-show="show" @touchmove.stop.prevent  @click.stop.prevent>
    <div id="mask" @touchmove.stop.prevent  @click.stop.prevent>
      <ion-spinner icon="spiral"></ion-spinner>
      <div class="loading-text">{{text}}</div>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        show: true,
        text: {
            type: String,
            default: '正在加载中...'
        }
    }
}
</script>
<style scoped>
  #mask{
    flex: 1;
    background: rgba(255,255,255,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 999999;
  }
  .loading-contain{
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .loading-text{
    text-align: center;
    color: #fff;
    font-size: 12px;
    padding-top: 10px;
  }
  .spinner-lines{
    width: 60px !important;
    height: 85px !important;
  }
</style>
