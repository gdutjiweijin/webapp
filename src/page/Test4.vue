<template>
  <div class="test4">
    <ion-app>
      <my-header :activeTab="activeTab">
      </my-header>
      <ion-content>
        <my-tabs></my-tabs>
      </ion-content>
    </ion-app>
  </div>
</template>

<script type='text/ecmascript-6'>
  import MyHeader from '@/components/Header/Header';
  import MyTabs from '@/components/Tabs/Tabs';

  export default {
    data() {
      return {
        activeTab: 'Test4'
      };
    },
    created() {
    },
    watch: {},
    methods: {
    },
    components: {
      'my-header': MyHeader,
      'my-tabs': MyTabs
    }
  };
</script>

<style lang='less' scoped>
</style>
