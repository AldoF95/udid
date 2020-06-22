<template>
  <v-main align="center" style="padding-left:0!important">
      <v-row class="login-row" align="center" justify="center">
            <v-card class="login-card justify-center" width="500" height="400">
                
                <v-list-item>
                    <v-list-item-avatar size="60" color="grey">
                        <img :src="user_data.picture"/>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title class="headline">{{user_data.full_name}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-text-field class="login-text-field" outlined 
                        placeholder="Insert new key" 
                        value="" 
                        label="Login key"
                        v-model="login_key"></v-text-field>
                </v-list-item>
                <v-list-item>
                    <v-btn outlined color="blue" @click="saveKey">Save and log in</v-btn>
                </v-list-item>
               
            </v-card>
      </v-row>
            
  </v-main>
</template>

<script>
import {db} from '../main'
export default {
    data:()=>({
        login_key: "",
        user_data: {}
    }),

    methods:{
        saveKey(){
            console.log(this.user_data.email)
            db.collection('users').doc(this.user_data.email).update({
                login_key: this.login_key
            }).then(()=>{
                this.$router.replace({name:'home'})
            })
        },
        getUserData(){
            this.user_data = this.$cookies.get('userData')
            console.log(this.user_data)
        }
    },
    mounted(){
        console.log("mouted")
        this.getUserData()
    }
    
}
</script>

<style>
.login-text-field{
    width: 300px!important;
}
</style>