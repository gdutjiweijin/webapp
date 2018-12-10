<template>
  <div class="lists-content" v-if="dataList.length" ref="listsContent" id="list-date-content">
    <div @click="selectDate(item)" class="each-content" v-for="item of dataList" :key="item.time" v-if="!checkData(item)">
      <div class="top">
        <div class="left">
          {{item.date}}
        </div>
        <div class="right">
          {{item.week}}
        </div>
      </div>
      <div class="bottom">
        {{item.month}}
      </div>
    </div>
    <div @click="selectDate(item)" class="each-content active" v-else id="activeContent">
      <div class="top">
        <div class="left active">
          {{item.date}}
        </div>
        <div class="right">
          {{item.week}}
        </div>
      </div>
      <div class="bottom">
        {{item.month}}
      </div>
    </div>
  </div>
</template>

<script>
import {timeStrToDate, weekMap, monthMap} from '@/common/js/timeFormat'
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
        },
        dateTimeShow: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            dataList: []
        }
    },
    created() {
        this._buildDateList(this.maxTime);
    },
    watch: {
        myDate(newValue) {
            let maxValue = this.maxTime;
            this._buildDateListWhenDateChange(newValue, maxValue);
        }
    },
    methods: {
        selectDate(item) {
            this.$emit('emitDate', item.myDate)
        },
        checkData(item) {
            let tmpvalue = this.myDate.replace(/-/g, '')
            let nowDate = timeStrToDate(tmpvalue + '000000');
            return +nowDate === item.time;
        },
        scrollToTarget(){
            this.$nextTick(() => {
                let activeContent = this.$el.querySelector('#activeContent');
                let productList = this.$el.querySelectorAll('#list-date-content .each-content');
                let clientWidth = document.body.clientWidth;
                let offsetLeft = 0;
                let scrollLeft = 0;
                for (let i = 0, l = productList.length; i < l; i++){
                    if (activeContent === productList[i] && offsetLeft > clientWidth / 2){
                        scrollLeft = offsetLeft - clientWidth / 2 + productList[i].offsetWidth / 2;
                        document.querySelector('#list-date-content').scrollLeft = scrollLeft;
                        break;
                    }
                    offsetLeft += productList[i].offsetWidth;
                }
            })
        },
        _buildDateList(value) {
            value = value.replace(/-/g, '')
            let nowDate = timeStrToDate(value + '000000');
            let dataList = [];
            for (let index = 365; index > 0; index--) {
                let tmpData = {};
                let nowDate2 = timeStrToDate(value + '000000');
                nowDate2.setDate(nowDate2.getDate() - index);
                tmpData = {
                    date: nowDate2.getDate(),
                    week: weekMap[nowDate2.getUTCDay()],
                    month: monthMap[nowDate2.getMonth()],
                    time: +nowDate2,
                    myDate: nowDate2.format('yyyyMMdd')
                };
                dataList.push(tmpData);
            }
            dataList.push({
                date: nowDate.getDate(),
                week: weekMap[nowDate.getUTCDay()],
                month: monthMap[nowDate.getMonth()],
                time: +nowDate,
                myDate: nowDate.format('yyyyMMdd')
            });
            this.dataList = dataList;
            this.scrollToTarget()
        },
        _buildDateListWhenDateChange(value, maxValue){
        /**
         * 当日期发生改变时候，重新绘制日期。
         * 1.如果点击头部上的日期，则总时间不发生变化，
         * 2.点击下拉日期框，时间逻辑为:
         * 向前取一年的天数，向后截止到maxdate的天数，最多取一年的天数。
        * */
            let dataList = [];
            if (maxValue){
                value = value.replace(/-/g, '');
                maxValue = maxValue.replace(/-/g, '');
                let nowDate = timeStrToDate(value + '000000');
                let maxDate = timeStrToDate(maxValue + '000000');
                let s1 = new Date(nowDate).getTime();
                let s2 = new Date(maxDate).getTime();
                const dayMs = 24 * 3600 * 1000;
                let timeToDay = (s2 - s1) / dayMs;
                if (timeToDay > 365){ timeToDay = 365 }
                for (let index = 365; index > 0; index--) {
                    let tmpData = {};
                    let nowDate2 = timeStrToDate(value + '000000');
                    nowDate2.setDate(nowDate2.getDate() - index);
                    tmpData = {
                        date: nowDate2.getDate(),
                        week: weekMap[nowDate2.getUTCDay()],
                        month: monthMap[nowDate2.getMonth()],
                        time: +nowDate2,
                        myDate: nowDate2.format('yyyyMMdd')
                    };
                    dataList.push(tmpData);
                }
                dataList.push({
                    date: nowDate.getDate(),
                    week: weekMap[nowDate.getUTCDay()],
                    month: monthMap[nowDate.getMonth()],
                    time: +nowDate,
                    myDate: nowDate.format('yyyyMMdd')
                });
                for (let index = 1; index < timeToDay + 1; index++) {
                    let tmpData = {};
                    let nowDate2 = timeStrToDate(value + '000000');
                    nowDate2.setDate(nowDate2.getDate() + index);
                    tmpData = {
                        date: nowDate2.getDate(),
                        week: weekMap[nowDate2.getUTCDay()],
                        month: monthMap[nowDate2.getMonth()],
                        time: +nowDate2,
                        myDate: nowDate2.format('yyyyMMdd')
                    };
                    dataList.push(tmpData);
                }
            }
            this.dataList = dataList;
            this.scrollToTarget();
        }
    },
    components: {
    }
}
</script>

<style lang="less" scoped>
  @import "../../common/css/index.less";
  .lists-content {
    display: flex;
    height: 43px;
    border-bottom: solid 1px #eee;
    overflow: scroll;
  .each-content {
    flex: 0 0 74px;
    margin: 3px 0px;
    border-right: solid 1px #eee;
    display: flex;
    flex-direction: column;
  &.active {
     // border-bottom: solid 3px @font-active-color;
   }
  .top {
    display: flex;
    flex: 0 0 22px;
  .left {
    flex: 1;
    font-size: 18px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  &.active {
     color: @font-active-color;
   }
  }
  .right {
    flex: 1;
    font-size: 12px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    transform: scale(0.80);
  }
  }
  .bottom {
    flex: 0 0 18px;
    font-size: 12px;
    transform: scale(0.80);
    color: rgb(132, 132, 132);
  }
  &:last-child {
     border-right: none;
   }
  }
  }
</style>
