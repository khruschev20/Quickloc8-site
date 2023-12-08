<!--Attempted fix-->
<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
      <div class="container">
        <router-link class="navbar-brand" style="padding:none;" to="/"><img style="width: 20%; height: 10%;" :src="require('@/assets/Quicloc8-logo.png')" /></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav" style="margin-left: 5%;">
            <li class="nav-item" style="margin-right: 10%;">
              <router-link class="nav-link" to="/" >Home</router-link>
            </li>
            <li class="nav-item" style="margin-right: 10%;" >
              <router-link class="nav-link" to="/about" >Pricing</router-link>
            </li>
            <li class="nav-item" style="margin-right: 10%;">
              <router-link class="nav-link" to="/about" >News&Updates</router-link>
            </li>
            <li class="nav-item" style="margin-right: 10%;">
              <router-link class="nav-link" to="/about" >Policy</router-link>
            </li>
            <li class="nav-item" style="margin-left: 20%;">
              <router-link class="nav-link" to="/about" >Contact</router-link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>


    <l-map
    :center="center"
    :zoom="zoom"
    class="map"
    ref="map"
    @update:zoom="zoomUpdated"
    @update:center="centerUpdated"
  >
    <l-tile-layer
      :url="url"
    >
    </l-tile-layer>
   
    <Taxi
      v-for="marker in markers"
      :key="marker.id"
      :marker="marker"
    >
  </Taxi>

  </l-map>
   
  
  <router-view />

<SplashScreen :show="showSplash" />
  
  </div>
  
</template>

<script>
import SplashScreen from '@/components/SplashScreen.vue';
import { LMap, LTileLayer } from 'vue2-leaflet';
import Taxi from './Taxi';
import 'leaflet/dist/leaflet.css';


export default {
  components: {
    LMap,
    LTileLayer,
    Taxi,
    SplashScreen,
  },
  data () {
    return {
      showSplash: true,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      center: [  -25.758009, 28.201207 ],
      zoom: 18,
      markers: [
  {id: 1, imageUrl: require('@/assets/ic_new_white_taxi.png'), coordinates: [  -25.757999 , 28.201021], Range:1000},
  {id: 2, imageUrl: require('@/assets/ic_new_white_taxi.png'), coordinates: [-25.75813293457, 28.201217651367 ], Range:1000},
  {id: 3, imageUrl: require('@/assets/ic_new_white_taxi.png'), coordinates: [  -25.757912, 28.201139 ], Range:5607},
]

    }
  },
  methods: {
    zoomUpdated (zoom) {
      this.zoom = zoom;
    },
    centerUpdated (center) {
      this.center = center;
    },
    hideSplash() {
      this.showSplash = false;
    }
  },
  created() {
  setTimeout(() => {
    this.showSplash = false;
  }, 3500); // 3500 milliseconds (3.5 seconds)
},
}
</script>

<style>

  .map {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow :hidden
  }
  
  
</style>
