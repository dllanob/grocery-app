<template>
  <li class="cart-list_item">
    <div class="cart-list_item_image">
      <img :src="data.image_url" :alt="data.productName">
    </div>
    <div class="cart-list_item_content">
      <h4 class="cart-list_item_content_title">
        {{ data.productName }}
      </h4>
      <span class="cart-list_item_content_price">${{ data.price }}</span>
      <counter :max="data.stock" :item="data" />
    </div>
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
  &:not(:last-child) {
     margin-bottom: 20px;
  }
  &_image {
    width: 150px;
    height: 100px;
    overflow: hidden;
    border-radius: 5px;
    margin-right: 20px;
    position: relative;
    > img {
      top: 0;
      left: 0;
      width: 100%;
      object-fit: cover;
      position: absolute;
    }
  }
  &_content {
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-between;
    &_title {
      font-size: 1.2em;
      margin-bottom: 20px;
    }
    &_price {
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      position: absolute;
      color: $accent-color;
      font-size: 1.2em;
    }
  }
}
</style>
