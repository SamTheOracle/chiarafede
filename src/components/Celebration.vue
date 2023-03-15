<template>
  <v-card :min-height="$vuetify.breakpoint.xsOnly?300:400" :flat="!$vuetify.breakpoint.xsOnly" :outlined="$vuetify.breakpoint.xsOnly" :max-width="$vuetify.breakpoint.smAndDown?350:450" class="mx-auto">
      <v-list-item two-line>
        <v-list-item-content>
          <div class="overline mb-1">{{type}}</div>
          <p class="cardtitle mb-1">{{title}}</p>
        </v-list-item-content>

        <v-list-item-avatar
          tile
          :width="size"
          :height="size"
        >
          <v-img :src="require('@/assets/'+icon)" contain />
        </v-list-item-avatar>
      </v-list-item>
      <v-list-item two-line v-if="timeSentence">
        <v-list-item-content>
          <p class="descr mb-1">{{timeSentence}}</p>
          <p class="descr mb-1" v-if="timeSecondSentence">{{timeSecondSentence}}</p>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line v-if="place">
        <v-list-item-content>
          <p class="descr mb-1">{{place}}</p>
          <p class="descr mb-1" v-if="placeSecondSentence">{{placeSecondSentence}}</p>
        </v-list-item-content>
      </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: 'Celebration',
  props: {
    type: String,
    title: String,
    icon: String,
    timeSentence: String,
    timeSecondSentence: String,
    place: String,
    placeSecondSentence: String
  },
  data: () => {
    return {
      size: 65
    }
  }
}
</script>

<style>
</style>
