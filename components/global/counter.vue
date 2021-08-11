<template>
  <div class="counter">
    <div>
      <a-button v-if="item.quantity > 1" class="counter_button" type="link" @click="subtractItem(item)">
        <a-icon type="minus" />
      </a-button>
      <a-button v-else class="counter_button" type="link" @click="subtractItem(item)">
        <a-icon type="delete" />
      </a-button>
      <span class="counter_value">
        {{ item.quantity }}
      </span>
      <a-button class="counter_button" type="link" @click="addItem(item)">
        <a-icon type="plus" />
      </a-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    item: {
      type: Object,
      default: null
    },
    max: {
      type: Number,
      default: null
    }
  },
  computed: {
    ...mapGetters({
      items: 'cart/items',
      groceries: 'groceries/groceries'
    })
  },
  methods: {
    ...mapActions({
      increaseItemOnCart: 'cart/increaseItemOnCart',
      subtractItemOnCart: 'cart/subtractItemOnCart',
      removeItemFromCart: 'cart/removeItemFromCart',
      updateGroceryStock: 'groceries/updateGroceryStock',
      fetchGroceries: 'groceries/fetchGroceries',
      fetchGroceryData: 'groceries/fetchGroceryData'
    }),
    async addItem (grocery) {
      const id = grocery.id
      const cartItems = this.items
      const groceries = this.groceries
      const item = await this.fetchGroceryData({ groceries, id })
      try {
        await this.increaseItemOnCart({ cartItems, item })
        await this.updateGroceryStock({ groceries, item, remove: true })
        await this.fetchGroceries()
      } catch (e) {
        console.error(e)
      }
    },
    async subtractItem (grocery) {
      const id = grocery.id
      const cartItems = this.items
      const groceries = this.groceries
      const item = await this.fetchGroceryData({ groceries, id })
      if (grocery.quantity > 1) {
        this.subtractItemOnCart({ cartItems, item })
        await this.updateGroceryStock({ groceries, item, remove: false })
        await this.fetchGroceries()
      } else {
        this.removeItemFromCart({ cartItems, item })
      }
    }
  }
}
</script>

<style lang="scss">
.counter {
  border-radius: 5px;
  display: inline-block;
  border: 2px solid #ececec;
  &_button {
    color: black;
    padding: 5px;
  }
  &_value {
    padding: 7px;
  }
}
</style>
