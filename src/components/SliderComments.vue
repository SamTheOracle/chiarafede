<template>
  <v-container fluid class="mt-5">
    <div v-if="!swapLanguage">
      <p class="nicetitle text-center">Uno spazio per voi</p>
      <p class="descr text-center">Un pensiero per gli sposi</p>
    </div>
    <div v-else>
      <p class="nicetitle text-center">A place for you</p>
      <p class="descr text-center">A thought for the wedding couple</p>
    </div>
    <div class="text-center" v-if="!swapLanguage">
      <v-btn color="#EBF0BA" :large="$vuetify.breakpoint.mdAndUp" @click="onAddClick()" rounded>
        Aggiungi
        <v-icon small class="ml-2">mdi-send</v-icon>
      </v-btn>
    </div>
    <div class="text-center" v-else>
      <v-btn color="#EBF0BA" :large="$vuetify.breakpoint.mdAndUp" @click="onAddClick()" rounded>
        Send
        <v-icon small class="ml-2">mdi-send</v-icon>
      </v-btn>
    </div>
    <v-lazy
      :options="{
          threshold: .4
        }"
      v-model="isActive"
      transition="fade-transition"
      min-height="200"
    >
      <v-slide-group
        class="swiper mt-3 mb-3"
        style="height:100%"
        v-if="$vuetify.breakpoint.mdAndUp"
      >
        <v-slide-item v-for="(comment,i) in values" :key="i" class="ma-2">
          <Comment :comment="comment" />
        </v-slide-item>
         <v-slide-item v-for="(fake) in fakeComments" :key="fake.comment" class="ma-1">
          <Comment :comment="fake" />
        </v-slide-item>
      </v-slide-group>
      <swiper
        class="swiper mt-5"
        :options="getOptions()"
        v-resize="getOptions"
        style="height:400px"
        v-else
      >
        <swiper-slide v-for="(comment,i) in values" :key="i">
          <Comment :comment="comment" />
        </swiper-slide>
        <swiper-slide v-for="(fake) in fakeComments " :key="fake.comment">
          <Comment :comment="fake" />
        </swiper-slide>
      </swiper>
    </v-lazy>
    <v-dialog
      v-model="dialog"
      :fullscreen="$vuetify.breakpoint.xsOnly"
      :hide-overlay="$vuetify.breakpoint.xsOnly"
      transition="dialog-bottom-transition"
      max-height="620"
      max-width="620"
    >
      <CommentForm
        v-on:dialogcommentclose="dialog = false"
        v-on:validcomment="postComment"
        :loading="loading"
        :english="swapLanguage"
      />
    </v-dialog>

    <v-snackbar color="warning" :timeout="3000" v-model="snackbar" v-if="!swapLanguage">
      Sei correntemente off-line, attiva internet oppure aspetta una connessione migliore
      <v-btn text @click="snackbar = false">Chiudi</v-btn>
    </v-snackbar>
    <v-snackbar color="warning" :timeout="3000" v-model="snackbar" v-else>
      You are currently off-line, turn on your data or wait for a better connection
      <v-btn text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import Comment from './Comment'
import CommentForm from './CommentForm'

import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'SliderComments',
  components: {
    Comment,
    CommentForm,
    Swiper,
    SwiperSlide
  },
  props: {
    language: String
  },
  directives: {
    swiper: directive
  },
  data: () => {
    return {
      swapLanguage: false,
      snackbar: false,
      loading: false,
      swiperOptionsLgAndUp: {
        slidesPerView: 4,
        centeredSlides: true,
        centeredSlidesBounds: true,
        spaceBetween: 10,
        autoplay: {
          delay: 5000
        }
      },
      swiperOptionsMdOnly: {
        slidesPerView: 3,
        centeredSlides: true,
        centeredSlidesBounds: true,
        spaceBetween: 10,
        autoplay: {
          delay: 5000
        }
      },
      swiperOptionsSm: {
        slidesPerView: 2,
        spaceBetween: 5,
        autoplay: {
          delay: 5000
        }
      },
      swiperOptions: {
        slidesPerView: 1,
        cssMode: true,
        spaceBetween: 10,
        autoplay: {
          delay: 5000
        }
      },
      isActive: false,
      model: null,
      dialog: false,
      values: [],
      fakeComments: [
        {
          lastName: 'Gates',
          firstName: 'Bill',
          comment:
            'Un grande uomo si sposa con una gran donna. Una bella lezione di amore e di umiltà, complimenti. ',
          date: '15 Maggio 2020'
        },
        {
          lastName: 'Mattarella',
          firstName: 'Sergio',
          comment:
            'Care italiane, Cari italiani. Il matrimonio di Giacomo e Giovanna dà speranza per il futuro, un esempio di unità in questi tempi bui',
          date: '2 Settembre 2020'
        },
        {
          lastName: 'Musk',
          firstName: 'Elon',
          comment:
            "È stato lo sposo a suggerirmi la fantastica idea di terraformare Marte, bombardando il pianeta con l'arsenale atomico mondiale",
          date: '18 Luglio 2020'
        },
        {
          lastName: 'Il Grigio',
          firstName: 'Gandalf',
          comment:
            "Uno stregone non è mai in ritardo, nè anticipo ma arriva precisamente quando intende farlo. Avrò comunque i miei fuochi d'artificio",
          date: '16 Agosto 2020'
        }
      ],
      icons: [
        { path: 'music.svg' },
        { path: 'mountain.svg' },
        { path: 'kite.svg' },
        { path: 'hot-air-balloon.svg' },
        { path: 'dove.svg' },
        { path: 'churchcomment.svg' },
        { path: 'bells.svg' },
        { path: 'angel.svg' }
      ],
      variabaleIcons: []
    }
  },
  created () {
    this.fakeComments.forEach(fc => (fc.icon = this.getIcon()))
  },
  mounted () {
    const vm = this

    // eslint-disable-next-line no-return-assign
    fetch('https://www.giovannaegiacomo.app/comments/all')
      .then(response => response.json())
      .then(data => {
        vm.values = data
        vm.values.forEach(v => {
          v.icon = vm.getIcon()
        })
      })
      .catch(err => err)
    navigator.serviceWorker.addEventListener('message', function (event) {
      const newComment = event.data.comment
      newComment.icon = vm.getIcon()
      vm.values.unshift(newComment)
    })
  },
  methods: {
    async postComment (newComment) {
      this.loading = true
      const vm = this
      const objectComment = JSON.parse(newComment)
      // eslint-disable-next-line no-constant-condition
      objectComment.subscription = JSON.parse(sessionStorage.getItem('sub'))
      try {
        const response = await fetch(
          'https://www.giovannaegiacomo.app/comments',
          {
            method: 'post',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(objectComment)
          }
        )
        response.json().then(data => {
          if (data.comment) {
            data.icon = this.getIcon()
            vm.values.unshift(data)
          }
        })
      } catch (err) {
        return err
      } finally {
        this.loading = false
        this.dialog = false
      }
    },
    getIcon () {
      const iconCount = this.icons.length >= 2
      const index = iconCount
        ? Math.floor(Math.random() * (this.icons.length - 1))
        : 0
      var icon = this.icons[index]
      this.variabaleIcons.push(icon)
      this.icons.splice(index, 1)
      if (!iconCount) {
        this.icons = this.variabaleIcons
        this.variabaleIcons = []
      }
      return icon.path
    },
    onAddClick () {
      if (navigator.onLine) {
        this.dialog = true
      } else {
        this.snackbar = true
      }
    },
    getOptions () {
      if (this.$vuetify.breakpoint.xsOnly) {
        return this.swiperOptions
      } else {
        return this.swiperOptionsSm
      }
    }
  },
  watch: {
    language: function () {
      this.swapLanguage = !this.swapLanguage
    }
  }
}
</script>
