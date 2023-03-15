<template>
  <v-card :height="$vuetify.breakpoint.xsOnly?'100%':600" style="overflow-y:hidden">
    <v-toolbar color="#EBF0BA">
      <v-btn fab text color="black" @click="$emit('mapdialogclosed')" dense>
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title class="text-center">{{title}}</v-toolbar-title>
    </v-toolbar>
    <div
      class="pa-1"
      ref="map"
      style="width: 100%;
        height: 100%;
        background-color: grey;"
    ></div>
  </v-card>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import GoogleMapsApiLoader from 'google-maps-api-loader'

export default {
  props: {
    coordinates: Array,
    center: Object,
    title: String,
    initialZoom:Number
  },
  data: () => {
    return {
      google: null,
      map: null
    }
  },
  async mounted () {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: 'AIzaSyBQEyi2CbrV4fGzROrV4krYpRMWpI8HkyE',
      language: 'it'
    })
    this.google = googleMapApi
    this.initializeMap()
  },
  methods: {
    // Initialize and add the map
    initializeMap () {
      const mapContainer = this.$refs.map
      var center = new google.maps.LatLng(this.center.lat, this.center.lng)
      this.map = new google.maps.Map(mapContainer, {
        zoom: this.initialZoom == null?16:this.initialZoom,
        center: center
      })
      var mark = new google.maps.Marker({
        position: center,
        map: this.map,
        icon: { url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' }
      })
      this.coordinates.forEach(
        coordinate => {
          var marker = new google.maps.Marker({
            position: coordinate,
            map: this.map,
            label: coordinate.label
          })
        }
      )
      /* this.map.addListener('click',function(){
        this.map.setCenter()
      }) */
      // eslint-disable-next-line no-new
    }
  },
  watch: {
    title: function () {
      this.initializeMap()
    }
  }
}
</script>

<style>
</style>
