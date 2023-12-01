<template>
  <div>
  <l-marker
    :key="marker.id"
    :lat-lng="marker.coordinates"
  >
    <l-icon ref="icon">
      <img class="Taxi-icon"  src="marker.imageUrl"/>
    </l-icon>
  </l-marker>
  <l-circle-marker
      :lat-lng="marker.coordinates"
      :radius="marker.range"
      :color="rangeColor"
      :fill-opacity="0.3"
    ></l-circle-marker>
    </div>
</template>

<script>
import { LCircleMarker, LMarker ,LIcon} from 'vue2-leaflet'
export default {
  components: { LIcon, LMarker, LCircleMarker},
  props: {
    marker: {
      type: Object,
      required: true
    },
  },
  computed: {
    rangeColor() {
      // Adjust the range color as needed
      return 'blue';
    },
  },
};

</script>

<style>
  .Taxi-icon {
    height: 50px;
    width: auto;
  }
</style>
