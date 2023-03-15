<template>
  <v-card height="700" style="width:100%;overflow:hidden">
    <v-toolbar color="#EBF0BA">
      <v-btn text fab :large="$vuetify.breakpoint.mdAndUp" light @click="$emit('close')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-spacer v-if="$vuetify.breakpoint.smAndUp" />
      <v-toolbar-title class="text-center cardtitle">Qualche dettaglio</v-toolbar-title>
      <v-spacer v-if="$vuetify.breakpoint.smAndUp" />
    </v-toolbar>
    <v-row align="start" justify="center">
      <v-col>
            <v-container fluid class="text-center fill-height">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfRQ9yLePTk4n4JzuxNSlY9NDDYl6wLjBfMhrPqIQvf_0Hurg/viewform?embedded=true"
           width="100%"
            height="600px"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            class="mx-auto"
          >
          </iframe>
  
        </v-container>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "SaveTheDate",
  data: () => {
    return {
      width: null,
      height: 700,
      spinner: true
    };
  },
  mounted() {
    this.resize();
  },
  methods: {
    resize() {
      const width = window.innerWidth;
      if (width < 450) {
        this.width = 320;
      } else if ((width >= 450) & (width < 600)) {
        this.width = 400;
      } else if ((width >= 600) & (width < 768)) {
        this.width = 550;
      } else {
        this.width = 700;
      }
    }
  }
};
</script>
<style>
</style>
