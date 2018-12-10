<template>
  <div class="table-content">
    <div class="table-header">
      <div class="each-row">
        <span></span>
        <span>指标1</span>
        <span>指标2</span>
        <span>指标3</span>
      </div>
    </div>
    <div class="table-body">
      <div @click="emitTableChange(item)" class="each-row" v-for="item of tableData" :key="item.name" :class="item.name === activeTable ? 'active' : ''">
        <span>{{item.name}}</span>
        <span v-html="changeData(item.hb)"></span>
        <span v-html="changeData(item.ztb)"></span>
        <span v-html="changeData(item.gztb)"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        activeTable: {
            type: String,
            default: ''
        },
        tableData: {
            type: Array,
            default: function () {
                return []
            }
        }
    },
    methods: {
        changeData(item) {
            if (+item > 0) {
                return '<span style="color: #FF2E2E">+' + (item * 100).toFixed(1) + '%</span>'
            } else {
                return '<span style="color: #49B205">' + (item * 100).toFixed(1) + '%</span>'
            }
        },
        emitTableChange(item) {
            this.$emit('emitTableChange', item);
        }
    }
}
</script>

<style lang="less" scoped>
  .table-content {
    font-size: 12px;
    height: calc(~'(100vh - 189px)* (291/568)');
    overflow-y: scroll;
  .table-header {
    border-top: solid 1px rgb(202, 202, 202);
    color: rgb(49, 49, 49);
    height: 33px;
  }
  .each-row {
    height: 35px;
    display: flex;
    border-bottom: solid 1px rgb(226, 226, 226);
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      &:first-child {
        justify-content: left;
        color: rgb(79, 79, 79);
        padding-left: 16px;
        flex: 0 0 (110/375)*100%;
      }
      &:nth-child(2) {
        flex: 0 0 (86/375)*100%;
      }
      &:nth-child(3) {
        flex: 0 0 (85/375)*100%;
      }
      &:nth-child(4) {
        flex: 0 0 (77/375)*100%;
      }
    }
    &.active {
       background-color: #FFF7EE;
     }
    }
  }
</style>
