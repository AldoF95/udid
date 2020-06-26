<template>
  <v-main>
    <activityholder v-for="action in actions" :key="action.name" :actionData="action"/>
  </v-main>
</template>

<script>
import activityholder from './ActivityHolder'
import {actionContract} from '../main';
export default {
  components:{
    activityholder
  },
  data:()=>({
    actions:{}
  }),
  methods:{
    getAccountBalance(){
      /*actionContract.methods.getBalance().call().then(balance =>{
        console.log(balance);
      });*/

      /*actionContract.methods.setAction('0x229991483832abc24f995BDAa865F7cF29CbA157', 'name', 'location', 'time')
        .send({
          from: '0x4C3126b20CDfd5e8b436BD0337Cce5743338cdd4',
          gas: 3000000,
          value: '100000000'})
        .then(recipe =>{
          console.log(recipe);
          console.log('data write')
        })*/
      actionContract.methods.getUserActions().call().then(responce =>{
        this.actions = responce.actionsList;
        console.log('data read')
      })
      
    },
  },
  mounted(){
    this.getAccountBalance();
  }
  
}
</script>

<style>

</style>