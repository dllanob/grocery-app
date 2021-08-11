<template>
  <header class="header">
    <nuxt-link class="header_back" to="/groceries">
      <a-button type="link">
        <a-icon type="left" />
      </a-button>
    </nuxt-link>
    <h2 class="header_title">
      Favorites
    </h2>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 21px;
  justify-content: center;
  &_back {
    left: 50px;
    position: absolute;
  }
}
</style>
