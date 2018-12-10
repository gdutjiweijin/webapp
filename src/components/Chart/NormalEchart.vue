<template>
  <div class="normarl-echart" ref="normarlEchart">
  </div>
</template>

<script>
import echart from 'echarts'
export default {
    props: {
        optionData: {
            type: Object
        },
        height: {
            type: String,
            default: '300px'
        }
    },
    mounted () {
        this.$refs.normarlEchart.style.height = this.height;
        this.initChart(this.optionData);
    },
    computed: {},
    watch: {
        optionData () {
            this.initChart(this.optionData);
            console.info('watched echarts optionData', this.optionData);
        }
    },
    methods: {
        initChart (option) {
        // echart.dispose(this.$refs.normarlEchart)
            let that = this;
            let myChart = echart.init(this.$refs.normarlEchart, null, {render: 'svg'})
            // myChart.resize(385, 320);
            myChart.setOption(this.optionData)
            myChart.on('legendselectchanged', function (params) {
                // 获取点击图例的选中状态
                let isSelected = params.selected[params.name];
                // // 在控制台中打印
                console.log((isSelected ? '选中了' : '取消选中了') + '图例' + params.name);
                // // 打印所有图例的状态
                if (!isSelected && params.name === '当日值') {
                    that.optionData['legend']['selected']['当日值'] = true;
                    that.initChart(this.optionData);
                }
            });
        }
    }
}
</script>

<style lang="less">
  @import "../../common/css/index.less";
  .normarl-echart {
    height: 300px;
    box-sizing: border-box;
    background: #fff;
  }
</style>
