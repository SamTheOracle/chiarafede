<template>
  <v-container fluid class="mt-5">
    <v-row align="center" justify="space-between">
      <v-col cols=12>
        <p class="text-center cardtitle mb-1">17 Giugno 2023</p>
      </v-col>
      <v-col>
        <p class="text-center cardtitle mb-1">ore 15:30</p>
      </v-col>
      <v-col cols=12>
        <v-img
          src="@/assets/img/heart.png"
          contain
          :style="$vuetify.breakpoint.smAndUp?'max-height:150px;;':'max-height:100px'"
        />
      </v-col>
      <v-col cols=12>
        <p class="text-center cardtitle mb-1">Chiesa santi cristoforo e aquilina</p>
      </v-col>
      <v-col>
        <p class="text-center cardtitle mb-1">via montechiaro 23, rimini (rn)</p>
      </v-col>
      <v-col cols=12>
        <v-img
          src="@/assets/img/heart.png"
          contain
          :style="$vuetify.breakpoint.smAndUp?'max-height:150px;;':'max-height:100px'"
        />
      </v-col>
      <v-col cols=12>
        <p class="text-center cardtitle mb-1">Dopo la cerimonia saremo lieti di festeggiare insieme presso</p>
      </v-col>
      <v-col cols="12">
        <p class="text-center nicetitle-ricev mb-1">Castello due Torri</p>
      </v-col>
      <v-col cols=12>
        <p class="text-center cardtitle mb-1">Via castello 15, Poggio Torriana (RN)</p>
      </v-col>
      <v-col cols=12>
        <v-img
          src="@/assets/img/heart.png"
          contain
          :style="$vuetify.breakpoint.smAndUp?'max-height:150px;;':'max-height:100px'"
        />
      </v-col>
    </v-row>
  
  </v-container>
</template>

<script>
const SaveTheDate = () => import('./SaveTheDate')
const Celebration = () => import('./Celebration')
export default {
  name: 'Information',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    SaveTheDate,
    Celebration
  },
  data: () => {
    return {
      swapLanguage: false
    }
  },
  props: {
    language: String
  },
  watch: {
    language: function () {
      this.swapLanguage = !this.swapLanguage
    }
  }
}
</script>

<style>

</style>
