<template>
  <div class="loader">
    <a-spin class="loader_spinner" size="large" />
  </div>
</template>

<style lang="scss">
@import "~assets/styles/init/variables";

.loader {
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  min-height: 100vh;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: rgba(255,255,255,0.5);
  z-index: 100;
  &_spinner {
    .ant-spin-dot-item {
      background-color: $primary-color;
    }
  }
}
</style>
