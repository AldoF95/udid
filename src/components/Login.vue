<template>
  <v-main align="center" style="padding-left:0!important">
      <v-row class="login-row" align="center" justify="center">
            <v-card class="login-card justify-center" width="500" height="300">
                <v-card-title>
                <v-btn @click="googleLogin" class="login-btn" outlined color="red"><v-icon>mdi-google</v-icon> Google login</v-btn>
                </v-card-title>
            </v-card>
      </v-row>
            
  </v-main>
</template>

<script>
import firebase from 'firebase'
import {db} from '../main'
export default {
    methods:{
        googleLogin(){
            var provider = new firebase.auth.GoogleAuthProvider()
            firebase.auth().signInWithPopup(provider).then(user=>{
                console.log(user.additionalUserInfo.profile)
                db.collection('users').doc(user.additionalUserInfo.profile.email).get().then(data=>{
                    if(data.exists){
                        this.cookieSave(data.data(), 'check')
                    }
                    else{
                        this.saveData(user.additionalUserInfo.profile)
                    }
                })
                

            }).catch(err => {
                console.log(err)
            })
        },
        saveData(data){
            db.collection('users').doc(data.email).set({
                id: data.id,
                email: data.email,
                name: data.given_name,
                full_name: data.name,
                last_name: data.family_name,
                address: "",
                oib: "",
                picture: data.picture,
                document: "",
                login_key: "",
                birth_date: "",
                level: "građanin"
            }).then(()=>{
                db.collection('users').doc(data.email).get().then(res=>{
                    this.cookieSave(res.data(), 'new_check')
                })
            })
        },
        cookieSave(data, name){
            this.$cookies.set('userData', data)
            this.$router.replace({name: name})
        }
    }
}
</script>

<style>
.login-card{
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    border: none!important;
    box-shadow: 0px 0px 50px 10px rgba(0, 0, 0, 0.2)!important;
}
.login-row{
    height: 100%!important;
}
.login-btn{
    height: 80px!important;
    width: 250px;
}
</style>