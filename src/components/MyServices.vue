<template>
  <v-main>
    <myservicesholder v-for="docs in myServices" :key="docs.name" :docsData="docs" :userData="userData"/>
  </v-main>
</template>

<script>
import {db} from '../main'
import myservicesholder from './ServicesHolderMy'
export default {
  props:['userData'],
  components:{
    myservicesholder
  },
  data:()=>({
    myServices:[]
  }),
  methods:{
    getServices(){
        db.collection('services').get().then(docs =>{
            docs.forEach(data =>{
                db.collection('services').doc(data.id).collection('users').get().then(subdocs =>{
                    subdocs.docs.forEach(subdoc =>{
                        if(subdoc.id === this.userData.email){
                            this.myServices.push({id: data.id, data: data.data()})
                        }
                    })
                })
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