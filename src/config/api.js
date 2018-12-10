/* eslint-disable */
// 权限相关api
let host;

host = process.env.NODE_ENV == 'development' ? '/webapi' : '';

export const user = {
  //  获取用户名信息
  getUserName: host+'/user/getUserName',
  //  用户退出
  logout: host+'/user/logout'
};

export const OK = 100;
export const ERROR = -1;
