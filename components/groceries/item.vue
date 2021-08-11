<template>
  <li class="groceries-list_item" :class="{ 'deactive': !data.stock }">
    <a-button class="groceries-list_item_favorite" type="link" :disabled="!data.stock" @click="addToFavorites(data)">
      <a-icon type="heart" theme="twoTone" two-tone-color="red" />
    </a-button>
    <div class="groceries-list_item_image">
      <img :src="data.image_url" :alt="data.productName">
    </div>
    <div class="groceries-list_item_content">
      <h2 class="groceries-list_item_title">
        {{ data.productName }}
      </h2>
      <span class="groceries-list_item_accent">
        ${{ data.price }}
      </span>
      <p class="groceries-list_item_description">
        {{ data.productDescription }}
      </p>
      <div class="groceries-list_item_footer">
        <a-tag class="groceries-list_item_stock" color="#f3f3f3">
          {{ data.stock }} left
        </a-tag>
        <a-button class="groceries-list_item_add" type="primary" :disabled="!data.stock" :loading="loading" @click="addGroceryToCart(data)">
          <span v-if="!loading">
            <a-icon type="plus" />
            Add
          </span>
        </a-button>
      </div>
    </div>
  </li>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      groceries: 'groceries/groceries'
    })
  },
  methods: {
    ...mapActions({
      addItemToCart: 'cart/addItemToCart',
      updateGroceryStock: 'groceries/updateGroceryStock',
      fetchGroceries: 'groceries/fetchGroceries',
      addGroceryToFavorites: 'groceries/addGroceryToFavorites'
    }),
    async addGroceryToCart (grocery) {
      const item = grocery
      const groceries = this.groceries
      this.loading = true
      try {
        await this.updateGroceryStock({ groceries, item, remove: true })
        await this.fetchGroceries()
        await this.addItemToCart(grocery)
        this.$message.success(`${grocery.productName} added to the cart`)
      } catch (e) {
        this.$message.error(e.message)
      } finally {
        this.loading = false
      }
    },
    async addToFavorites (grocery) {
      const groceries = this.groceries
      const item = grocery
      try {
        await this.addGroceryToFavorites({ groceries, item })
        this.$message.success(`${grocery.productName} added to the favorites!`)
      } catch (e) {
        console.error(e.message)
      }
    }
  }
}

</script>

<style lang="scss">
@import "~assets/styles/init/variables";

.groceries-list_item {
  border-radius: 7px;
  position: relative;
  background-color: white;
  box-shadow: 1px 1px 7px 0px rgba(0, 0, 0, 0.1);
  &:before,
  &:after {
    content: '';
    top: 80px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    background-color: $lunar-white;
    z-index: 10;
  }
  &:before {
    left: -12px;
  }
  &::after {
    right: -12px;
  }
  &.deactive {
    opacity: 0.5;
  }
  &_favorite {
    top: 10px;
    right: 10px;
    font-size: 1em;
    padding: 0;
    position: absolute;
    z-index: 10;
  }
  &_image {
    height: 150px;
    position: relative;
    overflow: hidden;
    -webkit-border-top-left-radius: 7px;
    -webkit-border-top-right-radius: 7px;
    -moz-border-radius-topleft: 7px;
    -moz-border-radius-topright: 7px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    > img {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
    }
  }
  &_content {
    display: flex;
    padding: 15px;
    flex-direction: column;
  }
  &_title,
  &_description,
  &_accent {
    display: block;
    margin-bottom: 15px;
  }
  &_title {
    font-weight: bolder;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  &_accent {
    color: $accent-color;
  }
  &_description {
    font-size: .9em;
    line-height: 1.2em;
    color: $space-grey;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  &_stock,
  &_add {
    padding: 5px 10px;
  }
  &_footer {
    display: flex;
    justify-content: space-between;
  }
  &_stock {
    color: #666;
  }
  &_add {
    min-width: 68px;
    padding: 5px 10px;
  }

}
</style>
