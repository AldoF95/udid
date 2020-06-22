<template>
  <v-main>
    <activityholder v-for="n in 8" :key="n"/>
  </v-main>
</template>

<script>
import activityholder from './ActivityHolder'
export default {
  components:{
    activityholder
  }

}
</script>

<style>

</style>