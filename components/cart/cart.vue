<template>
  <div class="cart">
    <a-button class="cart_button" type="link" @click="openCart">
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
      <cart-footer />
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
@import "~assets/styles/init/variables";

.cart_drawer {
  .ant-drawer-header {
    padding: 22px 24px;
    text-align: center;
    .ant-drawer-title {
      color: black;
      font-size: 1.4em;
    }
  }
  .ant-drawer-content-wrapper {
    @media only screen and (max-width: $screen-xs) {
      width: 100% !important; // Important to override library styles
    }
  }
  .cart-footer {
    padding: 20px;
  }
}
</style>
