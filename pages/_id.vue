<template>

  <div>
    <VueCard :value=value />
    <!--    <testing-card-component />-->
  </div>

</template>

<script>
export default {
  name: "selectPage",
  data(){
    return{
      value: parseInt(this.$route.params.id)
    }
  },
}
</script>

<style scoped>

</style>
