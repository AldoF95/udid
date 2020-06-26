<template>
  <v-card class="topcard-user">
    <v-toolbar class="topbar-user" height="150">
      <v-simple-table>
        <tr>
          <td>
            <v-list-item>
            <v-list-item-avatar class="level-avatar" color="teal" size="50">
              <span class="white--text headline">
                {{userData.level.toUpperCase().charAt(0)}}
              </span>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title >{{userData.level.toUpperCase()}}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
          </td>
        </tr>
        <tr>
          <td>
            <v-btn @click="showServices" class="topbar-btn" :style="{borderBottomColor: borderColorD}" tile outlined>Dostupne usluge</v-btn>
            <v-btn @click="showServicesMy" class="topbar-btn" :style="{borderBottomColor: borderColorA}" tile outlined>Aktivne usluge</v-btn>
          </td>
        </tr>
      </v-simple-table>
      <v-spacer/>
      <span class="hash-account">{{account}}</span>
       <v-spacer/>
    </v-toolbar>
  </v-card>
</template>

<script>
import web3 from '../main'
export default {
  props:['userData'],
  data:()=>({
    borderColorD: 'black!important',
    borderColorA: 'black!important',
    account: ""
  }),
  methods:{
    showServices(){
      this.$router.replace({name: 'services'})
      this.checkRoute()
    },
    showServicesMy(){
      this.$router.replace({name: 'services_my'})
      this.checkRoute()
    },
    checkRoute(){
      if(this.$route.name === 'services'){
        this.borderColorD = 'blue!important'
        this.borderColorA = 'black!important'
      }
      else if(this.$route.name === 'services_my'){
        this.borderColorA = 'blue!important'
        this.borderColorD = 'black!important'
      }
      else{
        this.borderColorA = 'black!important'
        this.borderColorD = 'black!important'
      }
    },
    getAccount(){
      this.account = web3.eth.accounts.givenProvider.selectedAddress;

    }
  },
  mounted(){
    this.checkRoute()
    this.getAccount()
  },
  updated(){
    this.checkRoute()
  }
}
</script>

<style>
.topcard-user{
  padding-left: 320px!important; 
  box-shadow: none!important;
  border-radius: none!important;
  border-bottom: solid 0.3px rgba(0, 0, 0, 0.3)!important;
  position: fixed!important;
  width: 100%!important;
  z-index: 1;
}
.topbar-user{
  box-shadow: none!important;
  border-radius: none!important;
}

.topbar-user .v-toolbar__content{
  padding: 0!important;
}

.topbar-btn{
  border: none!important;
  border-bottom: solid 0.7px !important;
  margin: 0px 10px 0px 10px;
}
.hash-account{
  font-size: 1.3em;
  font-weight: 600;

  padding: 25px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
}
.level-avatar{
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
</style>