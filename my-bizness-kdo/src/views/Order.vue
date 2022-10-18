<template>
  <v-container class="pa-5" style="background-color: #04153b" fluid fill-height>
    <table-order />
  </v-container>
</template>

<script>
import TableOrder from '../components/order/TableOrder.vue'
export default {
  components: {
    TableOrder,
  },
}
</script>
