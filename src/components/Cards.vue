<template>
  <v-main>
    <cardsitems :account="account"/>
  </v-main>
</template>

<script>
import cardsitems from './CardItem';
import web3 from '../main'
export default {
  components:{
    cardsitems
  },
  data:()=>({
    account: ""
  }),
  methods:{
    getAccount(){
      this.account = web3.eth.accounts.givenProvider.selectedAddress;
      console.log(this.account)
    }
  },
  mounted(){
    this.getAccount()
  }

}
</script>

<style>

</style>