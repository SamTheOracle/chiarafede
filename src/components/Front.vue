<template>
  <v-container fluid class="pa-0" id="main-container">
    <v-row align="center" justify="center" no-gutters style="height:100vh">
      <v-col>
        <p class="nicetitle text-center">Siamo felici di annunciare il nostro matrimonio</p>
        <v-img
          src="@/assets/img/chiarafede.png"
          contain
          style="max-height:60vh"
          v-on:load="onImageLoaded()"
          v-if="$vuetify.breakpoint.smAndUp"
        />

        <div v-else>
          <div v-if="showText" style="overflow:hidden">
          </div>
          <v-img
            src="@/assets/img/chiarafede.png"
            v-on:load="onImageLoaded()"
            contain
            style="max-height:100vh;"
          ></v-img>
        </div>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Front',
  data: () => {
    return {
      showText: false
    }
  },
  methods: {
    onImageLoaded () {
      this.showText = true
      this.$emit('imageloaded')
    }
  }

}
</script>

<style>

</style>
