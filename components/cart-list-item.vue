<template>
  <li class="cart-list_item">
    <span>{{ data.productName }}</span>
    <span>${{ data.price }}</span>
  </li>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss">
@import "~assets/styles/init/variables";

.cart-list_item {
  color: $dark-grey;
  font-weight: bolder;
  font-size: 1em;
  display: flex;
  padding-bottom: 10px;
  margin-bottom: 10px;
  justify-content: space-between;
  &:not(:last-child) {
     border-bottom: 1px solid #f7f7f7;
  }
}
</style>
