<template>
  <div class="product-list">
    <div @click="changeProduct(item)" :class="flexActive ? 'flexActive': ''"
         class="each-product"
         v-for="item of productList"
         :key="item.name"
         v-if="item.name !== activeProduct">
      <span>{{item.name}}</span>
    </div>
    <div @click="changeProduct(item)"
         :class="flexActive ? 'flexActive': ''"
         class="each-product active"
         id="active"
         v-else>
      <span>{{item.name}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      productList: {
        type: Array,
        default: function () {
          return []
        }
      },
      activeProduct: {
        type: String,
        default: ''
      },
      flexActive: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      changeProduct(eachProduct) {
        this.$emit('activeProductChange', eachProduct['name']);
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/css/index.less";
  .product-list {
    display: flex;
    border-bottom: solid 1px #eee;
    height: 38px;
    font-size: 15px;
    // overflow: scroll;
    .each-product {
      padding: 0 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgba(131,131,131,0.87);
      &.flexActive {
        flex: 1;
      }
      span{
        white-space: nowrap;
        word-break: keep-all;
      }
      &.active {
        color: @font-active-color;
        border-bottom: solid 2px #fd9b34;
        span {
          height: 100%;
          display: flex;
          align-items: center;
        }
        // background-color: @background-dark-color;
      }
    }
  }
</style>
