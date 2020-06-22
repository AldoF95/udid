<template>
  <v-main>
    <services v-for="docs in services" :key="docs.name" :docsData="docs" :userData="userData"/>
  </v-main>
</template>

<script>
import {db} from '../main'
import services from './ServicesHolder'
export default {
  props:['userData'],
  components:{
    services
  },
  data:()=>({
    services:[]
  }),
  methods:{
    getServices(){
      db.collection('services').get().then(docs =>{
        docs.forEach(doc =>{
          this.services.push({id: doc.id, data: doc.data()})
        })
      })
    }
  },
  mounted(){
    this.getServices()
  }


}
</script>

<style>

</style>