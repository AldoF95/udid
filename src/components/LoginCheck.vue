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
                        type="password"
                        placeholder="login key" 
                        value="" 
                        label="Login key"
                        prepend-inner-icon="mdi-key"
                        :hint="hint"
                        persistent-hint 
                        v-model="insertedKey"></v-text-field>
                </v-list-item>
                <v-list-item>
                    <v-btn @click="checkKey" outlined color="blue">Log in</v-btn>
                </v-list-item>
               
            </v-card>
      </v-row>
            
  </v-main>
</template>

<script>

export default {
    data:()=>({
        insertedKey:"",
        user_data: {},
        hint: ""
    }),
    methods:{
        checkKey(){
            if(this.user_data.login_key === this.insertedKey){
                console.log('all good')
                this.$router.replace({name:'home'})
            }
            else{
                this.hint= "Wrong key"
                console.log('fail')
            }
        },
        getUserData(){
            this.user_data = this.$cookies.get('userData')
            console.log(this.user_data)
        }

    },
    mounted(){
        this.getUserData()
    }
}
</script>

<style>
.login-text-field{
    width: 300px!important;
}
.login-text-field .v-text-field__details .v-messages__message{
    color: red!important;
}
</style>