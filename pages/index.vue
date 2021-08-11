<template>
  <div class="home">
    <img src="~assets/images/bg.jpg" class="home_background" alt="background image" draggable="false">
    <h1>Welcome to grocery store app</h1>
    <nuxt-link to="/groceries">
      <a-button type="primary">
        Discover groceries
      </a-button>
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.home {
  width: 100vw;
  min-height: 100%;
  display: flex;
  color: white;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 1.5em;
    margin-bottom: 30px;
    color: white;
    z-index: 5;
  }
  &:before,
  &_background {
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;

    background-color: rgba($color: #000, $alpha: .4);
  }
  &:before {
    content: '';
    position: absolute;
    z-index: 0;
  }
  &_background {
    position: fixed;
    object-fit: cover;
    z-index: -1;
  }
}
</style>
