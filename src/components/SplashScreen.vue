<!-- SplashScreen.vue -->
<!-- SplashScreen.vue -->
<template>
    <div v-if="show" class="splash-screen">
      <img class="logo" :src="require('@/assets/Quicloc8-logo.png')" alt="Logo" />
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'SplashScreen',
    props: {
      show: Boolean,
    },
  };
  </script>
  
  <style scoped>
  .splash-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff; 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; 
  }
  
  .logo {
    width: 200px; 
    animation: pulse 2s infinite; 
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  </style>