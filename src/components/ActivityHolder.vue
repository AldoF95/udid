<template>
  <v-card class="activity-card" :style="{borderLeftColor: color}">
      <v-card-title>{{actionData.name}}</v-card-title>
      <v-divider></v-divider>
          <v-simple-table class="activity-table">
              <tr>
                  <td><v-icon size="30">mdi-map-marker</v-icon>{{actionData.location}}</td>
                  <td><v-icon size="30">mdi-clock-outline</v-icon>{{actionData.time}}</td>
              </tr>
              <tr>
                  <td><v-icon size="30">mdi-shape-outline</v-icon>Kategorija</td>
                  <td><v-icon size="30">mdi-ethereum</v-icon>{{displayEth}}</td>
              </tr>
          </v-simple-table>

  </v-card>
</template>

<script>
import {db} from '../main'
export default {
    props:['actionData'],
    data:()=>({
        color: "",
        displayEth: ""
    }),
    methods:{
        getService(){
            db.collection('services')
                .where('account_hash', '==', this.actionData.provider_id)
                .get()
                .then(snapshot =>{
                snapshot.forEach(doc =>{
                    let color_string = doc.data().color +"!important"
                    this.color = color_string
                })
            })
        },
        formatWei(){
            let wei = this.actionData.payment_amount
            if(wei.length > 18){
                let eth = [wei.slice(0, (wei.length-18)), ".", wei.slice((wei.length-18), (wei.length-18)+2)].join('')
                this.displayEth = eth
            }
            else{
                this.displayEth = wei
            }      

        }
    },
    mounted(){
        this.getService()
        this.formatWei()
    }
}
</script>

<style>
.activity-card{
    display: inline-block;
    width: 400px!important;
    height: 200px!important;
    border: none!important;
    border-radius: 0!important;
    border-left: solid 7px!important;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.3)!important;
    margin: 30px;
}
.activity-table{
    width: 100%!important;
    padding-left: 10px;
    bottom: 10px!important;
}
.activity-table tr td{
    padding: 10px;
}
.activity-table tr td .v-icon{
    margin-right: 10px;
}

</style>