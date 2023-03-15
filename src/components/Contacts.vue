<template>
  <v-container fluid>
    <p class="nicetitle text-center" v-if="!english">Contatti</p>
    <p class="nicetitle text-center" v-else>Contacts</p>

    <v-row align="center" justify="center" v-if="!english">
      <v-col :cols="$vuetify.breakpoint.xsOnly?12:6" v-for="(contact,i) in contacts" :key="i">
        <ContactCard :contact="contact"/>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" v-else>
      <v-col :cols="$vuetify.breakpoint.xsOnly?12:6" v-for="(contact,i) in contactsEnglish" :key="i" >
        <ContactCard :contact="contact"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    ContactCard: () => import('./ContactCard')
  },
  props: {
    language: String
  },
  data: () => {
    return {
      english: false,
      contacts: [
        {
          name: 'Giovanna',
          type: 'La sposa',
          image: 'her.jpg',
          contacts: [
            {
              icon: 'phone',
              value: '+39 3394453815',
              sub: 'Telefono'

            },
            {
              icon: 'email',
              value: 'musicco.giovanna@gmail.com',
              sub: 'E-mail'

            },
            {
              icon: 'home',
              value: 'Via Arimanno, 9 Brescia (BS)',
              sub: 'Indirizzo'
            }
          ]
        },
        {
          name: 'Giacomo',
          type: 'Lo sposo',
          image: 'him.jpg',
          contacts: [
            {
              icon: 'phone',
              value: '+39 3398485788',
              sub: 'Telefono'
            },
            {
              icon: 'email',
              value: 'gzano93@gmail.com',
              sub: 'E-mail'
            },
            {
              icon: 'home',
              value: 'Via Cella del Poggiolo, n. 5 Domagnano (RSM)',
              sub: 'Indirizzo'
            }
          ]
        }
      ],
      contactsEnglish: [
        {
          name: 'Giovanna',
          type: 'The bride',
          image: 'her.jpg',
          contacts: [
            {
              icon: 'phone',
              value: '+39 3394453815',
              sub: 'Phone'

            },
            {
              icon: 'email',
              value: 'musicco.giovanna@gmail.com',
              sub: 'E-mail'

            },
            {
              icon: 'home',
              value: 'Via Arimanno, 9 Brescia (BS)',
              sub: 'Address'
            }
          ]
        },
        {
          name: 'Giacomo',
          type: 'The groom',
          image: 'him.jpg',
          contacts: [
            {
              icon: 'phone',
              value: '+39 3398485788',
              sub: 'Phone'
            },
            {
              icon: 'email',
              value: 'gzano93@gmail.com',
              sub: 'E-mail'
            },
            {
              icon: 'home',
              value: 'Via Cella del Poggiolo, n. 5 Domagnano (RSM)',
              sub: 'Address'
            }
          ]
        }
      ]
    }
  },
  watch: {
    language: function () {
      this.english = !this.english
    }
  }
}
</script>

<style>
</style>
