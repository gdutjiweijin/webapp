<template>
  <img src="../common/images/startup.jpg" alt="">
</template>
<script>
export default {
    data(){
        return {
        }
    },
    mounted(){
        setTimeout(() => {
            this.$router.push('/Kpi')
        }, 2000)
    }
}
</script>
<style>
.startUp{
  width: 100%;
}
</style>
