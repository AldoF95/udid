<template>
  <v-main>
      <v-card class="simulation-card" width="700">
          <v-card-title>Simulacija dodavanje akcije</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
              <v-select label="Usluga" :items="items" item-text="name" item-value="hash" v-model="action.service_id"></v-select>
              <v-text-field label="Naziv" outlined v-model="action.name"></v-text-field>
              <v-text-field label="Lokacija" outlined v-model="action.location"></v-text-field>
              <v-text-field label="Cijena" outlined v-model="action.amount"></v-text-field>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
              <v-btn @click="submit" outlined rounded color="blue">
                  Save to block chain
              </v-btn>

          </v-card-actions>
          <v-alert type="success" v-if="alertMsg.visible">
              {{alertMsg.text}}
          </v-alert>
      </v-card>
  </v-main>
</template>

<script>
import {db} from '../main'
import {actionContract} from '../main'
import web3 from '../main'
export default {
    data:()=>({
        action:{
            service_id: "",
            name: "",
            location: "",
            time: "",
            amount: ""
        },
        account: "",
        items: [],
        services: [],
        alertMsg:{
            text: "Korištenje usluge spremljeno na lancu",
            visible: false
        }
    }),
    methods:{
        getServices(){
            db.collection('services').get().then(docs =>{
                docs.forEach(doc =>{
                this.services.push({id: doc.id, data: doc.data()})
                })
                this.fillItems()
            })
        },
        fillItems(){
            this.items = []
            this.services.forEach(item=>{
                this.items.push({
                    name: item.data.name,
                    hash: item.data.account_hash
                })
            })
        },
        getTime(){
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0');
            var yyyy = today.getFullYear();
            today = mm + '/' + dd + '/' + yyyy;

            this.action.time = today
        },
        alertCreated(){
            setTimeout(()=>{
                this.alertMsg.visible = false
            }, 3000)
        },
        submit(){
            this.getTime()
            console.log(this.action)

            actionContract.methods.setAction(
                this.action.service_id,
                this.action.name,
                this.action.location,
                this.action.time
            ).send({
                from: this.account,
                gas: 3000000,
                value: this.action.amount+"000000000000000000"
            }).then(recipe =>{
                console.log(recipe)
                this.alertMsg.visible = true
                this.alertCreated()
            })
        },
        
    },
    mounted(){
        this.getServices()
        this.account = web3.eth.accounts.givenProvider.selectedAddress;

    }
}
</script>

<style>
.simulation-card{
    box-shadow: none!important;
    border: none!important;
}
</style>