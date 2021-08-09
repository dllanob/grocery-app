<template>
  <div class="cart">
    <a-button class="cart_button" type="primary" @click="openCart">
      <a-badge :count="items.length">
        <a href="#" class="head-example" />
      </a-badge>
      <a-icon type="shopping-cart" />
    </a-button>
    <a-drawer
      title="Cart"
      class="cart_drawer"
      placement="right"
      :closable="true"
      :visible="visible"
      :destroy-on-close="true"
      width="400"
      @close="onClose"
    >
      <cart-list />
      <hr>
      <a-button v-if="items.length > 0" class="cart_delete" type="link" @click="clearCartItems">
        Clear cart
        <a-icon type="delete" />
      </a-button>
      Total: {{ total }}
    </a-drawer>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      visible: false
    }
  },
  computed: {
    ...mapGetters({
      items: 'cart/items',
      total: 'cart/total'
    })
  },
  methods: {
    ...mapMutations({
      clearCart: 'cart/CLEAR_CART',
      clearTotal: 'cart/CLEAR_TOTAL'
    }),
    openCart () {
      this.visible = !this.visible
    },
    onClose () {
      this.visible = false
    },
    clearCartItems () {
      this.clearCart()
      this.clearTotal()
      this.visible = false
      this.$message.success('Now the cart is empty')
    }
  }
}
</script>

<style lang="scss">
.cart {

}
</style>
