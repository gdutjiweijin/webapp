<template>
  <div class="tabs">
    <div @click="activeTab = item.name" class="each-tabs" v-for="item of tabsData" :key="item.name" :class="[item.name == activeTab ?  'active' : '']">
      <div class="icon">
        <!--<ion-icon :name="item.icon"></ion-icon>-->
        <icon-svg :icon-class="item.icon" />
      </div>
      <div class="name">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            activeTab: 'KPI',
            tabsData: [
                {name: 'Test1', icon: 'kpi'},
                {name: 'Test2', icon: 'shishi'},
                {name: 'Test3', icon: 'chanpin'},
                {name: 'Test4', icon: 'zhuanxiang'},
                {name: 'Me', icon: 'wode'}
            ]
        }
    },
    created() {
        let activeTab = this.$route.path.split('/')[1];
        switch (activeTab) {
            case 'Test1':
                this.activeTab = 'Test1';
                break;
            case 'Test2':
                this.activeTab = 'Test2';
                break;
            case 'Test3':
                this.activeTab = 'Test3';
                break;
            case 'Test4':
                this.activeTab = 'Test4';
                break;
            case 'Me':
                this.activeTab = 'Me';
                break;
        }
    },
    watch: {
        $route() {
            let activeTab = this.$route.path.split('/')[1];
            switch (activeTab) {
              case 'Test1':
                this.activeTab = 'Test1';
                break;
              case 'Test2':
                this.activeTab = 'Test2';
                break;
              case 'Test3':
                this.activeTab = 'Test3';
                break;
              case 'Test4':
                this.activeTab = 'Test4';
                break;
              case 'Me':
                this.activeTab = 'Me';
                break;
            }
        },
        activeTab(newValue) {
            this.activeTab = newValue;
            switch (newValue) {
                case 'Test1':
                    this.$router.push({path: '/Test1'})
                    break;
                case 'Test2':
                    this.$router.push({path: '/Test2'})
                    break;
                case 'Test3':
                    this.$router.push({path: '/Test3'})
                    break;
                case 'Test4':
                    this.$router.push({path: '/Test4'})
                    break;
                case 'Me':
                    this.$router.push({path: '/Me'})
                    break;
            }
        }
    }
}
</script>

<style lang="less" scoped>
  @import "../../common/css/index.less";
  .tabs {
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100vw;
    border-top: solid 1px #eee;
    z-index: 1000;
    background: #fff;
    .each-tabs {
      flex: 1;
      display: flex;
      flex-direction: column;
      color: @font-dark-color;
      .icon {
        height: 29px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
      }
      .name {
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
      }
      &.active {
        color: @font-active-color;
      }
    }
  }
</style>
