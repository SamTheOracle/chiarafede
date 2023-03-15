<template>
  <v-container fluid class="mt-5">
    <v-row align="center" justify="space-between">
      <v-col cols=12>
        <v-img src="@/assets/img/heart.png" contain
          :style="$vuetify.breakpoint.smAndUp ? 'max-height:150px;;' : 'max-height:100px'" />
      </v-col>
      <v-col cols=12>
        <p class="text-center cardtitle mb-1">17 Giugno 2023</p>
      </v-col>
      <v-col>
        <p class="text-center cardtitle mb-1">ore 15:30</p>
      </v-col>
      <v-col cols=12 align="center">
        <v-img src="@/assets/img/church-bell.png" contain
          :style="$vuetify.breakpoint.smAndUp ? 'max-height:150px;;' : 'max-height:100px'" />
        <p class="text-center cardtitle mt-4">Chiesa santi cristoforo e aquilina, via montechiaro 23, rimini (rn) </p>
        <v-btn href="https://goo.gl/maps/EKGiAeWHZa2mPSVv5" target="_blank" color="white" depressed light fab><v-icon class="text-center"
            dense large end light>mdi-map-marker-radius</v-icon></v-btn>
      </v-col>
      <v-col cols=12>
        <v-img src="@/assets/img/heart.png" contain
          :style="$vuetify.breakpoint.smAndUp ? 'max-height:150px;;' : 'max-height:100px'" />
      </v-col>
      <v-col cols=12 class="mt-16">
        <p class="text-center cardtitle mb-1">Dopo la cerimonia saremo lieti di festeggiare insieme presso</p>
      </v-col>
      <v-col cols=12>
        <v-img src="@/assets/img/cake.png" contain
          :style="$vuetify.breakpoint.smAndUp ? 'max-height:150px;;' : 'max-height:100px'" />
      </v-col>
      <v-col cols="12">
        <p class="text-center nicetitle-ricev mb-1">Castello due Torri</p>
      </v-col>
      <v-col cols=12 align="center">
        <p class="text-center cardtitle mb-1">Via castello 15, Poggio Torriana (RN)</p>
        <v-btn color="white" href="https://goo.gl/maps/zCaiCouUTjxTZwnZ7" target="_blank" depressed light fab><v-icon class="text-center" dense large end
            light>mdi-map-marker-radius</v-icon></v-btn>
      </v-col>
      <v-col cols=12>
        <v-img src="@/assets/img/heart.png" contain
          :style="$vuetify.breakpoint.smAndUp ? 'max-height:150px;;' : 'max-height:100px'" />
      </v-col>
      <v-col cols=12>
        <v-img src="@/assets/img/phone-book.png" contain class="ma-10"
          :style="$vuetify.breakpoint.smAndUp ? 'max-height:150px;;' : 'max-height:95px'" />
        <p class="text-center cardtitle-contacts mb-1">è gradita gentile conferma entro il 12 maggio 2023 al +39
          3661167291 o +39 3388461341</p>
      </v-col>
      <v-col cols=12>
        <v-img src="@/assets/img/heart.png" contain
          :style="$vuetify.breakpoint.smAndUp ? 'max-height:150px;;' : 'max-height:100px'" />
      </v-col>
      <v-col cols=12 class="mt-16">
        <p class="text-center cardtitle-quote mb-1">"Dicono che i soldi non possono comprare la felicità...ma ti
          permettono di regalarla!"</p>
        <p class="text-center cardtitle-ramimalek mb-1">Rami Malek - Freddy Mercury</p>
        <v-img src="@/assets/img/gift-box.png" contain class="ma-10"
          :style="$vuetify.breakpoint.smAndUp ? 'max-height:150px;;' : 'max-height:100px'" />
        <p class="text-center cardtitle mb-1">Se anche tu vuoi contribuire a regalarci un po' di felicità:</p>
        <p class="text-center cardtitle mb-1">Iban: IT76T306988570100000001038</p>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
</script>

<style></style>
