<template>
  <div class="me">
    <ion-app>
      <ion-header>
        <ion-toolbar>
          <ion-title>我的</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="title-wrapper">
          <div class="name-wrapper">
            <span>{{userName}}</span>
          </div>
          <div class="logo-wrapper">
          </div>
        </div>
        <div class="info-wrapper">
          <div class="data-wrapper">
            <div class="now-version">
              <img src="/static/images/nowversion.png" alt=""><span class="title">当前版本1.0</span>
            </div>
            <div class="message">
              <img src="/static/images/message.png" alt=""><span class="title">意见反馈</span>
            </div>
            <div class="history-version">
              <img src="/static/images/history.png" alt=""><span class="title">版本历史</span>
            </div>
          </div>
          <div class="sign-out" @click="logOut">
            <span>退出登录</span>
          </div>
        </div>
        <my-tabs></my-tabs>
      </ion-content>
    </ion-app>
  </div>
</template>

<script>
import MyTabs from '@/components/Tabs/Tabs'
import { OK } from '@/config/api.js';
import { getUser, logOut } from '@/api/me.js'
export default {
    data(){
        return {
            userName: ''
        }
    },
    mounted(){
        this.getUserInfo();
    },
    methods: {
        getUserInfo(){
            getUser().then((res) => {
                if (res.status === OK){
                    this.userName = res.result;
                }
            }).catch(err => {
                console.log(err)
            })
        },
        logOut(){
            logOut();
        }
    },
    components: {
        'my-tabs': MyTabs
    }
}
</script>

<style lang="less" scoped>
  @import "../common/css/index.less";
  .me {
    height: 100vh;
    .title-wrapper {
      height: 235px;
      background-color: rgb(255, 173, 88);
      display: flex;
      .name-wrapper {
        display: flex;
        align-items: center;
        padding-left: 30px;
        color: #fff;
        font-size: 30px;
        flex: 1;
      }
      .logo-wrapper {
        display: flex;
        align-items: flex-end;
        align-content: flex-end;
        flex: 0 0 112px;
        margin-right: 12px;
        margin-bottom: 6px;
        img {
          opacity: 0.27;
        }
      }
    }
    .info-wrapper {
      height: calc(~'100vh - 330px');
      background-color: #eeeeeebf;
    }
    .data-wrapper {
      height: 131px;
      background-color: #ffffff;
      margin-bottom: 34px;
      img {
        width: 18px;
        height: 18px;
      }
      .title {
        padding-left: 13px;
        color: rgb(49, 49, 49);
        font-size: 15px;
      }
      .now-version {
        height: 48px;
        margin-left: 16px;
        border-bottom: solid 1px #eee;
        display: flex;
        padding-top: 21px;
      }
      .message {
        height: 41px;
        margin-left: 16px;
        border-bottom: solid 1px #eee;
        display: flex;
        align-items: center;
      }
      .history-version {
        height: 42px;
        margin-left: 16px;
        border-bottom: solid 1px #eee;
        display: flex;
        align-items: center;
      }
    }
    .sign-out {
      height: 40px;
      font-size: 15px;
      color: rgb(253, 155, 52);
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffffff;
    }
  }
</style>
