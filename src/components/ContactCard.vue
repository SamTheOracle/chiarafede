<template>
  <v-card color="#f7f9e4" height="300" max-width="600" class="mx-auto" flat shaped>
    <v-list-item>
      <v-list-item-avatar height="80px" width="80px">
        <v-img :src="require('@/assets/'+contact.image)" contain />
  </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="contacttitle">{{contact.name}}</v-list-item-title>
        <v-list-item-subtitle class="overline">{{contact.type}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item v-for="(contact,i) in contact.contacts" :key="i">
      <v-list-item-avatar>
        <v-icon>mdi-{{contact.icon}}</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title style="white-space:break-spaces!important">{{contact.value}}</v-list-item-title>
        <v-list-item-subtitle>{{contact.sub}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: {
    contact: Object
  }
}
</script>

<style>

</style>
