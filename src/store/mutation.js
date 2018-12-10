/**
 * @file mutation
 * @Author: jiweijin
 * @Date:   2018-09-28 19:45:14
 * @Last Modified by:   jiweijin
 * @Last Modified time: 2018-09-28 19:45:14
 */
import * as types from './mutation-types.js';

export default {
    // 添加用户名
    [types.MODIFY_KPIMAXTIME](state, kpiMaxTime) {
        state.kpiMaxTime = kpiMaxTime;
    },
    [types.MODIFY_KPIMYDATE](state, kpiMyDate) {
        state.kpiMyDate = kpiMyDate;
    },
    [types.MODIFY_KPIMAXDATE](state, kpiMaxDate) {
        state.kpiMaxDate = kpiMaxDate;
    },
    [types.MODIFY_KPIACTIVETABINFO](state, kpiActiveTabInfo) {
        state.kpiActiveTabInfo = kpiActiveTabInfo;
    },
    [types.MODIFY_KPIAUTH](state, kpiAuthPage) {
        state.kpiAuth = kpiAuthPage;
    }
};
