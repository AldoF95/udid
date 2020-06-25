<template>
  <v-card class="carditem-card" height="270" width="428">
      <v-icon size="70" color="rgb(255, 240, 133)" class="carditem-icon">mdi-memory</v-icon>
      <v-card-text>
          <v-list-item-title class="headline carditem-name">Ime Prezime</v-list-item-title>
          <v-list-item-subtitle class="carditem-code">{{stringFormat}}</v-list-item-subtitle>
      </v-card-text>

  </v-card>
</template>

<script>
export default {
    props:['account'],
    computed:{
        stringFormat(){
            let acc = ""
            let start = this.account.substring(0, 8)
            let end = this.account.substring((this.account.length - 8))

            acc = start +"..."+end
            return acc
        }
    }
}
</script>

<style>
.carditem-card{
    border-radius: 20px!important;
    background: linear-gradient(rgba(0,0,0,0.3), rgb(0, 0, 0, 0.3)), url('../assets/card_bg.jpg') ;
    background-size: cover;
    background-position: center;
    margin: 30px;

}
.carditem-card .v-card__text{
    bottom: 10px!important;
}
.carditem-icon{
    margin: 20px;
}
.carditem-name, .carditem-code{
    color: white;
    text-align: right;
}
.carditem-code{
    margin-top: 20px;
    font-size: 1.5em;
}


</style>