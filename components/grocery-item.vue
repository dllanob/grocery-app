<template>
  <li class="groceries-list_item" :class="{ 'deactive': !data.stock }">
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
      <p />
      <a-tag class="groceries-list_item_stock" color="#f3f3f3">
        {{ data.stock }} left
      </a-tag>
      <a-button type="primary" :disabled="!data.stock" @click="addGorceryToCart(data)">
        <a-icon type="plus" />
        Add
      </a-button>
    </div>
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  methods: {
    ...mapActions({
      addItemToCart: 'cart/addItemToCart'
    }),
    addGorceryToCart (grocery) {
      this.addItemToCart(grocery).then(() => this.$message.success('Grocery added to the cart'))
    }
  }
}

</script>

<style lang="scss">
.groceries-list_item {
  overflow: hidden;
  border-radius: 7px;
  background-color: white;
  box-shadow: 1px 1px 7px 0px rgba(0, 0, 0, 0.1);
  &.deactive {
    opacity: 0.5;
  }
  &_image {
    height: 120px;
    position: relative;
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
    padding: 15px;
  }
  &_title,
  &_description,
  &_accent {
    display: block;
    margin-bottom: 15px;
  }
  &_title {
    font-weight: bolder;
  }
  &_accent {
    color: #6187CA;
  }
  &_description {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  &_stock {
    color: #666;
  }

}
</style>
