<template>
  <v-card class="activity-card">
      <v-card-title>Ime aktivnosti</v-card-title>
      <v-divider></v-divider>
          <v-simple-table class="activity-table">
              <tr>
                  <td><v-icon size="30">mdi-map-marker</v-icon>Lokacija</td>
                  <td><v-icon size="30">mdi-clock-outline</v-icon>Vrijeme</td>
              </tr>
              <tr>
                  <td><v-icon size="30">mdi-shape-outline</v-icon>Kategorija</td>
                  <td><v-icon size="30">mdi-ethereum</v-icon>Vrijednost</td>
              </tr>
          </v-simple-table>

  </v-card>
</template>

<script>
export default {

}
</script>

<style>
.activity-card{
    display: inline-block;
    width: 400px!important;
    height: 200px!important;
    border: none!important;
    border-radius: 0!important;
    border-left: solid 7px red!important;
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