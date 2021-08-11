<template>
  <div class="cart-footer">
    <!-- <a-button v-if="items.length > 0" class="cart_delete" type="link" @click="clearCartItems">
      Clear cart
      <a-icon type="delete" />
    </a-button> -->
    <div class="cart-footer_total">
      <span>
        Total Amount
      </span>
      <span class="cart-footer_total_value">
        ${{ total }}
      </span>
    </div>
    <a-button class="cart-footer_button" :disabled="items.length === 0" @click="makePayment">
      Make a Payment
    </a-button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
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
    clearCartItems () {
      this.clearCart()
      this.clearTotal()
      this.visible = false
      this.$message.success('Now the cart is empty')
    },
    makePayment () {
      alert('makePayment')
    }
  }
}
</script>

<style lang="scss">
@import "~assets/styles/init/variables";

.cart-footer {
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
  &_total {
    display: flex;
    color: black;
    font-size: 1.2em;
    padding: 0 0 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid #ececec;
    justify-content: space-between;
    &_value {
      color: $primary-color;
    }
  }
  &_button {
    width: 100%;
    padding: 25px;
    color: white;
    background: $gradient-primary;
    border-color: $primary-color;
    &:hover {
      color: white;
      background: $gradient-primary-dark;
      border-color: $primary-color;
    }
    &:focus,
    &:active {
      color: white;
      background: $gradient-primary-dark;
      border-color: $primary-color;
    }
  }
}
</style>
