<template>
  <ul class="groceries-list">
    <groceries-item v-for="grocery in data" :key="grocery.id" :data="grocery" />
  </ul>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss">
@import "~assets/styles/init/variables";

.groceries-list {
  padding: 20px;
  margin: 2em;
  display: grid;
  grid-gap: 20px;
  list-style: none;
  grid-template-columns: repeat(auto-fill,minmax(180px, 1fr));

  @media only screen and (max-width: $screen-xs) {
    padding: 0;
    margin: 2em 1em;
    grid-template-columns: repeat(auto-fill,minmax(120px, 1fr));
  }
}
</style>
