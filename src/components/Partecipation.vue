<template>
  <v-container fluid style="background-color:#f7f9e4">
    <v-row align="center" justify="center" v-if="!swapLanguage">
      <v-col class="text-center" >
        <p class="nicetitle text-center">Conferma la tua partecipazione</p>
        <p
          class="descr text-center"
        >Dicci se verrai al nostro matrimonio! Casoncelli e ciccia a volontà!</p>
        <v-btn
          rounded
          color="#EBF0BA"
          :large="$vuetify.breakpoint.mdAndUp"
          @click="$emit('partecipationclicked')"
        >
          Parteciperò
          <!-- <v-icon color="red">mdi-heart</v-icon> -->
        </v-btn>
          <p class="overline mt-8" style="font-size:12px!important">È gradita la conferma entro il 10 Settembre</p>

      </v-col>
    </v-row>
    <v-row align="center" justify="center" v-else>
      <v-col class="text-center">
        <p class="nicetitle text-center">Confirm your partecipation</p>
        <p
          class="descr text-center"
        >Tell us if you will come! Lots of casoncelli and beef are waiting for you</p>
        <v-btn
          rounded
          color="#EBF0BA"
          :large="$vuetify.breakpoint.mdAndUp"
          @click="$emit('partecipationclicked')"
        >
          Signup
          <!-- <v-icon color="red">mdi-heart</v-icon> -->
        </v-btn>
          <p class="overline mt-8" style="font-size:12px!important">Confirmation by 10 September</p>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    language: String
  },
  data: () => {
    return {
      swapLanguage: false
    }
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
