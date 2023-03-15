<template>
  <v-card shaped outlined color="#f7f9e4" light :max-width="340" :height="380" :class="$vuetify.breakpoint.smAndDown?'mx-auto':'ma-2'" >

    <v-list-item>
      <v-list-item-avatar tile width="50" height="50">
        <v-img contain :src="require('@/assets/'+ comment.icon)" />
      </v-list-item-avatar>
      <v-list-item-content>
      <v-list-item-title class="name">{{fullName}}</v-list-item-title>
      <v-list-item-subtitle class="commentsubtitle">{{comment.date}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-text class="comment">{{comment.comment}}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    comment: Object
  },
  data: function () {
    return {

    }
  },
  computed: {
    fullName: function () {
      return `${this.comment.firstName}  ${this.comment.lastName}`
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
