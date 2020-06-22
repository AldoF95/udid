<template>
  <v-main>
    <v-card class="profile-card">
      <v-list-item>
      <v-list-item-avatar color="grey" size="100">
       <img :src="userData.picture"/> 
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{userData.full_name}}</v-list-item-title>
        <v-list-item-subtitle>{{userData.level}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    </v-card>
    <v-divider/>
    <v-simple-table class="profile-table">
      <template v-slot:default>
        <tbody>
          <tr>
            <td>
              <v-icon>mdi-account-box</v-icon>
              Ime
            </td>
            <td>
              {{userData.name}}
            </td>
          </tr>
          <tr>
            <td>
              <v-icon>mdi-account-box-outline</v-icon>
              Prezime
            </td>
            <td>
              {{userData.last_name}}
            </td>
          </tr>
          <tr>
            <td>
              <v-icon>mdi-email</v-icon>
              Email
            </td>
            <td>
              {{userData.email}}
            </td>
          </tr>
          <tr>
            <td>
              <v-icon>mdi-calendar-check-outline</v-icon>
              Datum rođenja
            </td>
            <td>
              <v-text-field outlined 
                        hide-details
                        :placeholder="userData.birth_date" 
                        v-model="user_date"
                        ></v-text-field>
            </td>
          </tr>
          <tr>
            <td>
              <v-icon>mdi-map-marker</v-icon>
              Adresa
            </td>
            <td>
              <v-text-field outlined 
                        hide-details
                        :placeholder="userData.address" 
                        v-model="user_address"
                        ></v-text-field>
            </td>
          </tr>
          <tr>
            <td>
              <v-icon>mdi-identifier</v-icon>
              OIB
            </td>
            <td>
              <v-text-field outlined 
                        hide-details
                        :placeholder="userData.oib" 
                        v-model="user_oib"
                        ></v-text-field>
            </td>
          </tr>
          <tr>
            <td>
              <v-icon>mdi-image-outline</v-icon>
              Slika
            </td>
            <td>
              <v-avatar size="50"><img :src="userData.picture"/></v-avatar>
            </td>
          </tr>
          <tr>
            <td>
              <v-icon>mdi-file-document-outline</v-icon>
              Dokument
            </td>
            <td>
              <v-text-field outlined 
                        hide-details
                        :placeholder="userData.document" 
                        v-model="user_doc"
                        ></v-text-field>
            </td>
          </tr>
          <tr>
            <td>
            </td>
            <td>
              <v-btn @click="updateUser" outlined color="blue">Spasi pormjene</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-main>
</template>

<script>

import {db} from '../main'
export default {
  props:['userData'],
  data:()=>({
    user_address:"",
    user_oib:"",
    user_doc:"",
    user_date: ""
  }),
  methods:{
    updateUser(){
      db.collection('users').doc(this.userData.email).update({
        address: this.user_address,
        oib: this.user_oib,
        document: this.user_doc,
        birth_date: this.user_date
      }).then(()=>{
        this.updateCookie()
      })
    },
    updateCookie(){
      db.collection('users').doc(this.userData.email).get().then(data=>{
        this.$cookies.set('userData', data.data()),
        location.reload()
      })
    }
  },
  mounted(){
    this.user_address = this.userData.address
    this.user_oib = this.userData.oib
    this.user_doc = this.userData.document
    this.user_date = this.userData.birth_date
  },
  updated(){
    this.user_address = this.userData.address
    this.user_oib = this.userData.oib
    this.user_doc = this.userData.document
    this.user_date = this.userData.birth_date
  }
}
</script>

<style>
.profile-card{
  box-shadow: none!important;
  border: none!important;
  margin-top: 50px;
  margin-bottom: 50px;
}
.profile-table tr{
  height: 80px;
}
</style>