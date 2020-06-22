<template>
<div class="overlay-container">
  <v-card light class="overflow-y-auto avtivateservice-card" height="400" width="500" :style="{borderLeftColor: activateData.data.color}">
    <v-card-title>{{activateData.data.name.toUpperCase()}}</v-card-title>
    <v-text-field v-for="textdata in textfield_data" 
                    :key="textdata.value" 
                    :placeholder="textdata.placeholder" 
                    :value="textdata.value"
                    v-model="textdata.data"></v-text-field>
    <v-btn v-on:click="closeBox" outlined color="red">Zatvori</v-btn>
    <v-btn v-on:click="submit" outlined color="blue">Predaj</v-btn>
    
  </v-card>
  </div>
</template>

<script>
import {db} from '../main'
export default {
    props:['activateData', 'userData'],
    data:()=>({
        textfield_data:[],
    }),
    methods:{
        closeBox(){
            this.$emit('closeBox', false);
        },
        submit(){
            console.log(this.textfield_data)
            var saveObj = {}
            this.textfield_data.forEach(element =>{
                saveObj[element.value] = element.data
            })
            db.collection('services')
                .doc(this.activateData.id)
                .collection('users')
                .doc(this.userData.email)
                .set(saveObj)
                .then(()=>{
                    this.closeBox()
                })
            
        },
        createPlaceHolder(){
            this.activateData.data.data.forEach(element =>{
                var obj = {
                    value: element, placeholder: element, data: ""
                }
                this.textfield_data.push(obj)
            })
        }
    },
    mounted(){
        this.createPlaceHolder()
    }
}
</script>

<style>
.overlay-container{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom:0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 2;
}
.avtivateservice-card{
    position: absolute;
    top: 30%;
    left: 30%;
    padding: 20px;
    border-radius: 0px!important;
    box-shadow: none!important;
    border-left: solid 10px;
}
.avtivateservice-card .v-btn{
    margin: 10px;
}
</style>