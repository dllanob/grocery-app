<template>
  <ul class="groceries-list">
    <grocery-item v-for="grocery in groceries" :key="grocery.id" :data="grocery" />
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  async fetch () {
    await this.fetchGroceries()
  },
  computed: {
    ...mapGetters({
      groceries: 'groceries/groceries'
    })
  },
  methods: {
    ...mapActions({
      fetchGroceries: 'groceries/fetchGroceries'
    })
  }
}
</script>

<style>
.groceries-list {
  padding: 20px;
  margin: 2em;
  display: grid;
  grid-gap: 20px;
  list-style: none;
  grid-template-columns: repeat(auto-fill,minmax(180px, 1fr));
}
</style>
