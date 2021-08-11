<template>
  <div class="groceries">
    <loading v-if="$fetchState.pending" />
    <layout-header />
    <groceries-list :data="groceries" />
    <nuxt-link class="groceries_favorites" to="/favorites">
      <a-button type="primary" shape="circle" icon="heart" />
    </nuxt-link>
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

</script>

<style lang="scss">
@import "~assets/styles/init/variables";

.groceries {
  padding-top: 50px;
  min-height: 100vh;
  background-color: $lunar-white;
  &_favorites {
    left: 50px;
    bottom: 50px;
    position: fixed;
    font-size: 1.6em;
    z-index: 50;
    .ant-btn {
      min-width: auto;
      padding: 30px 30px;
      text-align: center;
      position: relative;
      .anticon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
      }
    }
  }
}
</style>
