/* eslint-disable no-extend-native */
/**
 * @file 时间格式化
 * @author jiweijin
 * @email jiweijin@baidu.com
 */

Date.prototype.format = function (fmt) {
    let o = {
        'M+': this.getMonth() + 1,
        'd+': this.getDate(),
        'h+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
        'q+': Math.floor((this.getMonth() + 3) / 3),
        'S': this.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1)
                ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
        }
    }
    return fmt;
};

// 如20171112111111 改为 2017-11-11 11:11:11
export const timeStrToDate = function (timeStr) {
    return new Date(timeStr.substring(0, 4),
        timeStr.substring(4, 6) - 1,
        timeStr.substring(6, 8),
        timeStr.substring(8, 10),
        timeStr.substring(10, 12),
        timeStr.substring(12, 14));
}

// unix时间戳转为正常可读时间  如 20171112111111 改为 2017-11-11 11:11:11
export const timeStampToNomalData = function (ts) {
    let date = new Date(ts * 1000);
    return date.format('yyyy-MM-dd hh:mm:ss');
}

export const weekMap = {
    0: 'Mon',
    1: 'Tue',
    2: 'Wed',
    3: 'Thu',
    4: 'Fri',
    5: 'Sat',
    6: 'Sun'
}

export const monthMap = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
}
