<template>
  <div>
    <VueCard :value=value />
<!--    <testing-card-component />-->
  </div>
</template>

<script>

export default {
  layout: 'default',
   data(){
    return{
      value: 0
    }
   }

}

</script>
