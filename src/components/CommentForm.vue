<template>
  <v-card style="width:100%;">
    <v-toolbar color="#EBF0BA">
      <v-btn fab text @click="$emit('dialogcommentclose')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title v-if="!english" class="text-center">Crea un commento</v-toolbar-title>
      <v-toolbar-title v-else>Make a comment</v-toolbar-title>

      <v-spacer />
    </v-toolbar>
    <v-container fluid v-if="!english">
      <v-form v-model="valid" ref="form">
        <v-row align="center" justify="center">
          <v-col :cols="this.$vuetify.breakpoint.smAndUp?6:12">
            <v-text-field
              type="text"
              color="orange"
              outlined
              v-model="newComment.firstName"
              label="Nome"
              placeholder="Inserisci il tuo nome"
              :rules="nameRules"
              :hint="hint"
              counter="15"
              :dense="$vuetify.breakpoint.xs"
            ></v-text-field>
          </v-col>
          <v-col :cols="this.$vuetify.breakpoint.smAndUp?6:12">
            <v-text-field
              type="text"
              color="orange"
              outlined
              v-model="newComment.lastName"
              label="Cognome"
              placeholder="Inserisci il tuo cognome"
              :rules="lastNameRules"
              :hint="hint"
              counter="15"
              :dense="$vuetify.breakpoint.xs"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col>
            <v-textarea
              counter="200"
              outlined
              color="orange"
              label="Commento"
              placeholder="Scrivici qualcosa!"
              :rules="commentRules"
              rows="5"
              v-model="newComment.comment"
            />
          </v-col>
        </v-row>
      </v-form>
      <v-row justify="start">
        <v-btn rounded color="#EBF0BA" :loading="loading" @click="onSendClick()" class="ml-4">Invia</v-btn>
      </v-row>
    </v-container>
    <v-container fluid v-else>
      <v-form v-model="valid" ref="form">
        <v-row align="center" justify="center">
          <v-col :cols="this.$vuetify.breakpoint.smAndUp?6:12">
            <v-text-field
              type="text"
              color="orange"
              outlined
              v-model="newComment.firstName"
              label="Name"
              placeholder="Write your name"
              :rules="nameRulesEnglish"
              :hint="englishHint"
              counter="15"
              :dense="$vuetify.breakpoint.xs"
            ></v-text-field>
          </v-col>
          <v-col :cols="this.$vuetify.breakpoint.smAndUp?6:12">
            <v-text-field
              type="text"
              color="orange"
              outlined
              v-model="newComment.lastName"
              label="Family name"
              placeholder="Write your family name"
              :rules="lastNameRulesEnglish"
              :hint="englishHint"
              counter="15"
              :dense="$vuetify.breakpoint.xs"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col>
            <v-textarea
              counter="200"
              outlined
              color="orange"
              label="Comment"
              placeholder="Write something for us"
              :rules="commentRulesEnglish"
              rows="5"
              v-model="newComment.comment"
            />
          </v-col>
        </v-row>
      </v-form>
      <v-row justify="start">
        <v-btn rounded color="#EBF0BA" @click="onSendClick()" class="ml-4" :loading="loading">Send</v-btn>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    loading: Boolean,
    english: {
      default: false
    }
  },
  data: () => {
    return {
      newComment: {
        lastName: '',
        firstName: '',
        comment: '',
        subscription: {}
      },
      hint: 'Puoi anche inventartelo ;-)',
      nameRules: [v => (v && v.length < 15) || 'Al massimo 15 caratteri'],
      lastNameRules: [v => (v && v.length < 15) || 'Al massimo 15 caratteri'],
      commentRules: [v => (v && v.length <= 200) || 'Non più di 200 caratteri'],
      englishHint: 'You can come up with your own ;-)',
      nameRulesEnglish: [
        v => (v && v.length < 15) || 'No more than 15 characters'
      ],
      lastNameRulesEnglish: [
        v => (v && v.length < 15) || 'No more than 15 characters'
      ],
      commentRulesEnglish: [
        v => (v && v.length <= 200) || 'No more than 200 characters'
      ],
      valid: true
    }
  },
  methods: {
    onSendClick () {
      const isValid = this.$refs.form.validate()
      if (isValid) {
        this.$emit('validcomment', JSON.stringify(this.newComment))
      }
    }
  }
}
</script>

<style>
</style>
