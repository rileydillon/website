<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="site-container">
      <transition name="vt-fade" mode="out-in">
        <router-view/>
      </transition>
    </div>      
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  position: absolute;
}
.site-container {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: 1024px;
}
h1, h2, h3 {
  font-weight: normal;
}
.vt-fade-enter-active {
  transition: opacity 0.5s ease 0s;
}

.vt-fade-leave-active {
  transition: opacity 0.5s ease 0s;
}

.vt-fade-enter {
  opacity: 0.0;
}

.vt-fade-enter-to {
  opacity: 1.0;
}

.vt-fade-leave-to {
  opacity: 0.0;
}
</style>
