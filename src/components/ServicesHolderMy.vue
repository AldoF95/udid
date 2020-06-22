<template>
  <v-card v-bind:color="docsData.data.color" dark justify="center" align="center" class=" services-card-my">

      <v-layout column fill-height>
        <v-spacer/>
        <v-card-title class="justify-center services-title">{{docsData.data.name.toUpperCase()}}</v-card-title>
        <v-spacer/>
      </v-layout>
      

  </v-card>
</template>

<script>
export default {
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
.services-card-my{
    display: inline-block;
    width: 400px!important;
    height: 200px!important;
    border: none!important;
    border-radius: 0!important;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.3)!important;
    margin: 30px;
}
.services-title{
    font-size: 1.8em;
}
</style>