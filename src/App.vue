<template>
  <v-app>
    <usertop v-if="!check_route" :userData="user_data"/>
    <navbar v-if="!check_route" :userData="user_data"/>
    <router-view :userData="user_data"></router-view>
  </v-app>
</template>

<script>
import navbar from './components/Navigation'
import usertop from './components/UserTop'
export default {
  name: 'App',
  components: {
    navbar, usertop
  },

  data: () => ({
    user_data:{}
  }),
  methods:{
    getUserData(){
      if(this.$cookies.isKey('userData')){
        this.user_data = this.$cookies.get('userData')
      }
      else{
        this.$router.replace({name:'login'})
      }
      
    }
  },
  computed:{
    check_route(){
      return (this.$route.name === 'login' || this.$route.name==='check' || this.$route.name==='new_check')
    }
  },
  mounted(){
    this.getUserData()
  }
};
</script>
<style>
  .v-main{
    padding-left: 320px!important;
    padding-top: 150px!important;
  }
</style>
