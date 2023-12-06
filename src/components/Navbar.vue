<template>
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link to="/">Your Logo</router-link>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': isActive }">
        <div class="navbar-start">
          <!-- Add your navigation links here -->
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/about" class="navbar-item">About</router-link>
          <router-link to="/contact" class="navbar-item">Contact</router-link>
        </div>
      </div>
      <div class="navbar-burger" @click="toggleNavbar">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </template>
   
  <script>
  export default {
    data() {
      return {
        isActive: false,
      };
    },
    methods: {
      toggleNavbar() {
        this.isActive = !this.isActive;
      },
    },
  };
  </script>
   
  <style scoped>
  /* Add your custom styles here */
  </style>