<template>
  <div class="cart-page">
    <cart-header />
    <cart-list class="cart-page_list" />
    <cart-footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
  }
}
</script>

<style lang="scss">
@import "~assets/styles/init/variables";

.cart-page {
  padding: 100px 50px;
  min-height: 100vh;
  @media only screen and (max-width: $screen-sm) {
    padding: 80px 20px;
  }
  &_header {
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    position: fixed;
    padding: 20px 20px;
    align-items: center;
    justify-content: center;
  }
  &_title {
    font-size: 1.6em;
  }
  &_list {
    width: 600px;
    margin: 0 auto;
    display: block;
    @media only screen and (max-width: $screen-sm) {
      width: 100%;
    }
  }
  &_link {
    left: 50px;
    position: absolute;
    @media only screen and (max-width: $screen-sm) {
      left: 20px;
    }
    .ant-btn {
      padding: 10px;
      font-size: 1.4em;
      color: black;
    }
  }
  .cart-footer {
    width: 600px;
    padding-bottom: 20px;
    @media only screen and (max-width: $screen-sm) {
      width: 100%;
      padding: 20px;
    }
  }
}
</style>
