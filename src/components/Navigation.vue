<template>
    <v-card class="navbar-card" width="300">
    <v-navigation-drawer
      absolute
      permanent
      fixed
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img :src="userData.picture"/>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{userData.full_name}}</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.name"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
                {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn @click="logout" outlined block rounded>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  props:['userData'],
  data () {
        return {
          items: [
            { title: 'Početna', icon: 'mdi-home', name:'home'},
            { title: 'Profil', icon: 'mdi-account', name:'profile' },
            { title: 'Usluge', icon: 'mdi-dns', name:'services' },
            { title: 'Kartice', icon: 'mdi-credit-card', name:'cards' },
            
          ],
        }
      },
  methods:{
    logout(){
      this.$cookies.remove('userData')
      this.$router.replace({name: 'login'})
    }
  }
}
</script>

<style>

.navbar-card{
    height: 100%!important;
    position: fixed!important;
    z-index: 100;
}
.v-navigation-drawer{
    width: 100%!important;
}

</style>