<!-- Sidebar.vue -->
<template>
    <div :class="{ 'sidebar': true, 'responsive': isResponsive }">
      <button @click="toggleSidebar" class="toggle-button">&#9776;</button>
      <router-link to="/" @click="closeSidebar">Home</router-link>
      <router-link to="/about" @click="closeSidebar">About</router-link>
      <!-- Add more links as needed -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
    data() {
      return {
        isResponsive: false,
      };
    },
    methods: {
      toggleSidebar() {
        this.isResponsive = !this.isResponsive;
      },
      closeSidebar() {
        if (this.isResponsive) {
          this.isResponsive = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 200px;
    height: 100%;
    background-color: #333;
    color: #fff;
    padding: 20px;
    transition: width 0.3s;
  }
  
  .sidebar.responsive {
    width: 60px; /* Adjust as needed */
  }
  
  .sidebar a {
    color: #fff;
    text-decoration: none;
    display: block;
    margin-bottom: 10px;
  }
  
  .toggle-button {
    display: none; /* Hide by default */
    background: none;
    border: none;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
  }
  
  @media (max-width: 768px) {
    .sidebar {
      width: 60px; /* Adjust as needed */
    }
  
    .sidebar.responsive {
      width: 200px; /* Adjust as needed */
    }
  
    .sidebar a {
      display: none;
    }
  
    .toggle-button {
      display: block;
    }
  }
  </style>
  