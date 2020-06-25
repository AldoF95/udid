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
      actionContract.methods.getBalance().call().then(balance =>{
        console.log(balance);
      });

      /*actionContract.methods.setAction('0x5b111846218DdFeA9C8C6EeB158617A241e30c5D', 'name', 'location', 'time')
        .send({
          from: '0x255b719457c844dD7772C2d7322Bf2aC60C54a57',
          gas: 3000000,
          value: '1000000000'})
        .then(recipe =>{
          console.log(recipe);

          actionContract.methods.getUserActions().call().then(responce =>{
            console.log(responce.actionsList);
            this.actions = responce.actionsList;
          })
        })*/
      
    },
  },
  mounted(){
    this.getAccountBalance();
  }
  
}
</script>

<style>

</style>