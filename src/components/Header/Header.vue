<template>
    <div class="header-wrapper">
      <!--<div class="padding-heigh"></div>-->
      <ion-header>
        <ion-toolbar>
          <div slot="start">
            <slot name="start"></slot>
          </div>
          <ion-title>{{activeTab}}</ion-title>
          <ion-buttons slot="end">
            <div @click="showDateSelect">
              <icon-svg class="data-icon" icon-class="rili"/>
            </div>
            <!--<ion-icon class="data-icon" name="ios-calendar" style="" @click="showDateSelect"></ion-icon>-->
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
    </div>
</template>

<script>
import {timeStrToDate} from '@/common/js/timeFormat'
export default {
    props: {
        maxTime: {
            type: String,
            default: new Date().format('yyyyMMdd')
        },
        activeTab: {
            type: String,
            default: ''
        },
        myDate: {
            type: String,
            default: new Date().format('yyyyMMdd')
        }
    },
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
        showDateSelect() {
            let that = this;
            // 组件内使用
            this.$vux.datetime.show({
                value: timeStrToDate(this.myDate + '00000').format('yyyy-MM-dd'),
                endDate: timeStrToDate(this.maxTime + '00000').format('yyyy-MM-dd'),
                format: 'YYYY-MM-DD',
                onHide () {
                },
                onShow () {
                },
                onConfirm (value) {
                    console.log(value);
                    value = value.replace(/-/g, '');
                    that.$emit('emitDate', value)
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
  .header-wrapper {
    // .padding-heigh {
    //   height: 37px; // KPI字体上面大概是6px
    //   background-color: rgb(248, 248, 248);
    // }
    .data-icon {
      font-size: 22px;
      margin-right: 10px;
    }
  }
</style>
