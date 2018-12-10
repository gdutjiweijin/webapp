const echartsCallBackCollection = {
    yAxisCallBack(value) {
        if (value <= 1000) {
            return String(value);
        } else if (value < 100000000) {
            return value / 10000 + '万';
        } else {
            return value / 100000000 + '亿';
        }
    },
    xAxisCallBack(value) {
        let yearMonthDayFormatReg = new RegExp(
            /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/
        );
        let yearMonthFormatReg = new RegExp(
            /^[1-9]\d{3}-(0[1-9]|1[0-2])$/
        );
        let quarterFormatReg = new RegExp(
            /^[1-9]\d{3}Q([1-9])$/
        )
        if (yearMonthDayFormatReg.test(value)) {
            let yearMonthDay = value.slice(5);
            return yearMonthDay;
        } else if (yearMonthFormatReg.test(value)) {
            let yearMonth = value.slice(2);
            return yearMonth;
        } else if (quarterFormatReg.test(value)) {
            let quarter = value.slice(2);
            return quarter;
        } else {
            return value;
        }
    },
    realTimetootipCallBack(originData) {
        return function (params) {
            console.info('get tootip datas', params);
            let data = originData[params[0]['dataIndex']];
            console.log(data);
            let title = '截止' + params[0]['name'];
            let formatValue = '累计值：' + data['ljValue'];
            let rhbValue = ((data['value'] - data['hbValue']) / data['hbValue'] * 100).toFixed(2);
            if (+rhbValue > 0) {
                rhbValue = '<span style="color: #FF2E2E"> + ' + rhbValue + '%</span>'
            } else {
                rhbValue = '<span style="color: #4DC49A">' + rhbValue + '%</span>'
            }
            let ztbValue = ((data['value'] - data['ztbValue']) / data['ztbValue'] * 100).toFixed(2);
            if (+ztbValue > 0) {
                ztbValue = '<span style="color: #FF2E2E">+ ' + ztbValue + '%</span>'
            } else {
                ztbValue = '<span style="color: #4DC49A">' + ztbValue + '%</span>'
            }
            let gztbValue = ((data['value'] - data['gztbValue']) / data['gztbValue'] * 100).toFixed(2);
            if (+gztbValue > 0) {
                gztbValue = '<span style="color: #FF2E2E">+' + gztbValue + '%</span>'
            } else {
                gztbValue = '<span style="color: #4DC49A">' + gztbValue + '%</span>'
            }
            let annularRatio = '日环比：' + rhbValue;
            let weekRatio = '周同比：' + ztbValue;
            let septumRatio = '隔周比：' + gztbValue;
            let showStingHTML = `<p style="margin-bottom: 6px">${title}</p><p style="margin-bottom: 6px">${formatValue}</p>
          <p style="margin-bottom: 6px">${annularRatio}</p><p style="margin-bottom: 6px">${weekRatio}</p><p>${septumRatio}</p>`;
            return showStingHTML;
        }
    }
}

const echartsOptions = {
    realtimeEchartsOption: (echartsDatas) => {
        return {
            title: {},
            tooltip: {
                trigger: 'axis',
                textStyle: {
                    fontSize: 11,
                    fontFamily: 'PingFangSC-Regular',
                    align: 'left',
                    lineHeight: 500
                },
                padding: 6,
                backgroundColor: 'rgb(156, 155, 155)',
                formatter: echartsCallBackCollection.realTimetootipCallBack(echartsDatas)
            },
            legend: {
                icon: 'radar',
                top: '9px',
                left: '12px',
                itemGap: 8,
                itemWidth: 21,
                itemHeight: 14,
                selected: {
                    上上周同日值: false
                }
            },
            grid: {
                left: 16,
                right: 16,
                bottom: 35
            },
            color: ['#F98787', '#4DC49A', '#3998FC', '#FED51E'],
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    axisLabel: {
                        inside: false,
                        interval: 11,
                        formatter: echartsCallBackCollection.xAxisCallBack,
                        fontFamily: 'PingFangSC-Regular',
                        fontSize: 10,
                        color: '#343434'
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgb(214, 214, 214)'
                        }
                    },
                    axisPointer: {
                        lineStyle: {
                            color: 'rgb(226, 226, 226)',
                            width: 0.5
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    data: []
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        inside: true,
                        formatter: echartsCallBackCollection.yAxisCallBack,
                        fontFamily: 'PingFangSC-Regular',
                        fontSize: 10,
                        color: '#A6A4A2'
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgb(214, 214, 214)'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    z: 10
                },
                {
                    type: 'value',
                    axisLabel: {
                        inside: true,
                        formatter: echartsCallBackCollection.yAxisCallBack,
                        fontFamily: 'PingFangSC-Regular',
                        fontSize: 10,
                        color: '#A6A4A2'
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgb(214, 214, 214)'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    z: 10
                }
            ],
            series: [
                {
                    name: '当日值',
                    type: 'line',
                    smooth: true,
                    data: [],
                    originData: []
                },
                {
                    name: '昨日值',
                    type: 'line',
                    smooth: true,
                    data: [],
                    originData: []
                },
                {
                    name: '上周同日值',
                    type: 'line',
                    smooth: true,
                    data: [],
                    originData: []
                },
                {
                    name: '上上周同日值',
                    type: 'line',
                    smooth: true,
                    data: [],
                    originData: []
                }
            ]
        }
    }
}
export default echartsOptions;
