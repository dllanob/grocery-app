<template>
  <div class="favorites">
    <loading v-if="$fetchState.pending" />
    <layout-favorite-header />
    <groceries-list :data="groceries" type="list" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  async fetch () {
    await this.fetchGroceries()
  },
  computed: {
    ...mapGetters({
      groceries: 'groceries/favorites'
    })
  },
  methods: {
    ...mapActions({
      fetchGroceries: 'groceries/fetchFavoriteGroceries'
    })
  }
}
</script>

</script>

<style lang="scss">
@import "~assets/styles/init/variables";

.favorites {
  padding-top: 50px;
  min-height: 100vh;
  background-color: $lunar-white;
}
</style>
