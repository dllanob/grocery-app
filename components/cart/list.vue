<template>
  <ul class="cart-list">
    <a-empty v-if="items.length === 0" class="cart-list_empty" :image="simpleImage" />
    <cart-list-item v-for="(item, index) in items" v-else :key="index" class="cart-list_item" :data="item" />
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
import { Empty } from 'ant-design-vue'

export default {
  computed: {
    ...mapGetters({
      items: 'cart/items'
    })
  },
  beforeCreate () {
    this.simpleImage = Empty.PRESENTED_IMAGE_SIMPLE
  }
}
</script>

<style lang="scss">
@import "~assets/styles/init/variables";

.cart-list {
  color: $space-grey;
  &_empty {
     color: $space-grey;
  }
}

</style>
