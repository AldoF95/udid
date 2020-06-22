<template>
  <v-card v-bind:color="docsData.data.color" dark justify="center" align="center" class=" services-card">

      <v-layout column fill-height>
        <v-spacer/>
        <v-card-title class="justify-center">{{docsData.data.name.toUpperCase()}}</v-card-title>
        <v-spacer/>
        <v-divider class="mx-4"></v-divider>
        <v-spacer/>
        <v-btn v-on:click="toggleBox" outlined rounded width="180">Aktiviraj</v-btn>
        <v-spacer/>
      </v-layout>
      
    <activateservice v-if="toggleActivateService" @closeBox="toggleBox" :activateData="docsData" :userData="userData"/>
  </v-card>
</template>

<script>
import activateservice from './ActivateService'
export default {
    components:{
        activateservice
    },
    props:['docsData', 'userData'],
    data:()=>({
        toggleActivateService: false
    }),
    methods:{
        toggleBox(){
            this.toggleActivateService = !this.toggleActivateService
        }
    }

}
</script>

<style>
.services-card{
    display: inline-block;
    width: 400px!important;
    height: 200px!important;
    border: none!important;
    border-radius: 0!important;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.3)!important;
    margin: 30px;
}
</style>