<template>
  <v-container fluid style="min-height:400px">
    <div v-if="!swapLanguage">
      <p class="nicetitle text-center">Presentiamoci un po'</p>

      <v-row v-if="$vuetify.breakpoint.mdAndUp">
        <v-col></v-col>
        <v-col>
          <div>
            <p class="usdescriptionmodified text-center">- Carina quella ragazza, di dov'è dicevi?</p>
            <p class="usdescriptionmodified text-center">- Brescia</p>
            <p
              class="usdescriptionmodified text-center"
            >- Ah, niente 300 km, non si può fare... peccato!</p>
            <p class="usdescriptionmodified text-center">E invece poi, che sorpresa avventurosa!</p>
            <p
              class="usdescriptionmodified text-center"
            >Ecco qualche nostro scatto tra zaino in spalla e cenette romantiche</p>
          </div>
        </v-col>
        <v-col></v-col>
      </v-row>
      <v-row v-else justify="center" align-content="start">
        <div>
          <p class="usdescriptionmodified text-center">- Carina quella ragazza, di dov'è dicevi?</p>
          <p class="usdescriptionmodified text-center">- Brescia</p>
          <p
            class="usdescriptionmodified text-center"
          >- Ah, niente 300 km, non si può fare... peccato!</p>
          <p class="usdescriptionmodified text-center">E invece poi, che sorpresa avventurosa!</p>
          <p
            class="usdescriptionmodified text-center"
          >Ecco qualche nostro scatto tra zaino in spalla e cenette romantiche</p>
        </div>
      </v-row>

      <v-lazy
        :options="{
          threshold: .6
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
          <v-slide-item v-for="i in 25" :key="i" class="ma-1">
            <v-card
              shaped
              outlined
              :width="$vuetify.breakpoint.xsOnly?300:400"
              :height="$vuetify.breakpoint.xsOnly?480:620"
              class="ma-2"
            >
              <!-- :src="require('@/assets/us/'+i+'.jpg')" -->
              <v-img height="320" :src="require('@/assets/us_mobile/'+i+'.jpg')"></v-img>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="name">{{getTitle(i)}}</v-list-item-title>
                  <v-list-item-subtitle class="commentsubtitle">{{getSubtitle(i)}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-text class="usdescription">{{getDescription(i)}}</v-card-text>
            </v-card>
          </v-slide-item>
        </v-slide-group>
        <swiper
          class="swiper mt-3 mb-3"
          :options="$vuetify.breakpoint.xsOnly?swiperOptions:swiperOptionsSm"
          style="height:100%"
          v-else
        >
          <swiper-slide v-for="i in 25" :key="i">
            <v-card
              shaped
              outlined
              :max-width="$vuetify.breakpoint.smAndDown?340:500"
              :min-height="$vuetify.breakpoint.xsOnly?480:600"
              class="mx-auto"
            >
              <v-img
                :height="$vuetify.breakpoint.xsOnly?220:320"
                :src="require('@/assets/us_mobile/'+i+'.jpg')"
              ></v-img>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="name">{{getTitle(i)}}</v-list-item-title>
                  <v-list-item-subtitle class="commentsubtitle">{{getSubtitle(i)}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-text class="usdescription">{{getDescription(i)}}</v-card-text>
            </v-card>
          </swiper-slide>
        </swiper>
      </v-lazy>
    </div>
    <div v-else>
      <p class="nicetitle text-center">About us</p>
 <v-row v-if="$vuetify.breakpoint.mdAndUp">
        <v-col></v-col>
        <v-col>
          <div>
            <p class="usdescriptionmodified text-center">- That girl is pretty cute, where do you say she comes from?</p>
            <p class="usdescriptionmodified text-center">- Brescia</p>
            <p
              class="usdescriptionmodified text-center"
            >- 180 miles? Too bad, it cannot be done!</p>
            <p class="usdescriptionmodified text-center">And then, what an adventurous surprise!</p>
            <p
              class="usdescriptionmodified text-center"
            >Here there are some snapshots, with backpacks on our shoulder and romantic dinners</p>
          </div>
        </v-col>
        <v-col></v-col>
      </v-row>
      <v-row v-else justify="center" align-content="start">
        <div>
          <p class="usdescriptionmodified text-center">- That girl is pretty cute, where do you say she comes from?</p>
          <p class="usdescriptionmodified text-center">- Brescia</p>
          <p
            class="usdescriptionmodified text-center"
          >- 180 miles? Too bad, it cannot be done!</p>
          <p class="usdescriptionmodified text-center">And then, what an adventurous surprise!</p>
          <p
            class="usdescriptionmodified text-center"
          >Here there are some snapshots, with backpacks on our shoulder and romantic dinners</p>
        </div>
      </v-row>      <v-lazy
        :options="{
          threshold: .6
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
          <v-slide-item v-for="i in 25" :key="i" class="ma-1">
            <v-card
              shaped
              outlined
              :width="$vuetify.breakpoint.xsOnly?300:400"
              :height="$vuetify.breakpoint.xsOnly?480:620"
              class="ma-2"
            >
              <!-- :src="require('@/assets/us/'+i+'.jpg')" -->
              <v-img height="320" :src="require('@/assets/us_mobile/'+i+'.jpg')"></v-img>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="name">{{getTitle(i,true)}}</v-list-item-title>
                  <v-list-item-subtitle class="commentsubtitle">{{getSubtitle(i,true)}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-text class="usdescription">{{getDescription(i,true)}}</v-card-text>
            </v-card>
          </v-slide-item>
        </v-slide-group>
        <swiper
          class="swiper mt-3 mb-3"
          :options="$vuetify.breakpoint.xsOnly?swiperOptions:swiperOptionsSm"
          style="height:100%"
          v-else
        >
          <swiper-slide v-for="i in 25" :key="i">
            <v-card
              shaped
              outlined
              :max-width="$vuetify.breakpoint.smAndDown?340:500"
              :min-height="$vuetify.breakpoint.xsOnly?480:600"
              class="mx-auto"
            >
              <v-img
                :height="$vuetify.breakpoint.xsOnly?220:320"
                :src="require('@/assets/us_mobile/'+i+'.jpg')"
              ></v-img>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="name">{{getTitle(i,true)}}</v-list-item-title>
                  <v-list-item-subtitle class="commentsubtitle">{{getSubtitle(i,true)}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-text class="usdescription">{{getDescription(i,true)}}</v-card-text>
            </v-card>
          </swiper-slide>
        </swiper>
      </v-lazy>
    </div>
  </v-container>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  props: {
    language: String
  },
  data: () => {
    return {
      swapLanguage: false,
      swiperOptionsSm: {
        slidesPerView: 2,
        centeredSlides: true,
        centeredSlidesBounds: true,
        autoplay: {
          delay: 5000
        }
      },
      swiperOptions: {
        slidesPerView: 1,
        cssMode: true,
        spaceBetween: 5,
        autoplay: {
          delay: 5000
        }
      },
      isActive: false,
      imageText: [
        {
          title: "Primo Appuntamento",
          subtitle: "Montisola, Lago d'Iseo",
          description:
            '"Andiamo al lago?". Mi aspettavo di passeggiare sulla riva e invece mi ritrovo sudato in cima al santuario di Mont\'isola. Non so cosa aspettarmi per i prossimi apppuntamenti!'
        },
        {
          title: "Un turista a Brescia",
          subtitle: "Castello di Brescia",
          description:
            "Abituato ai tre castelli di San Marino, per fortuna Brescia ne ha almeno uno."
        },
        {
          title: "Serata romantica",
          subtitle: "Tempio Capitolino, Brescia",
          description: "Jack in camicia...lo avevate mai visto?"
        },
        {
          title: "Raccolta delle mele",
          subtitle: "Brez, Val di Non",
          description:
            "San Marino - Brez, 5 ore, 4 cambi di treno e un autobus pensando di godermi qualche giorno tranquillo in mezzo alla natura con la mia bella. Di certo non mi aspettavo di conoscere tutti in un colpo: 7 fratelli, 8 cugini, 2 zii e la nonna. E nemmeno di raccogliere le mele tutti i giorni!"
        },
        {
          title: "Il bosco segreto",
          subtitle: "Mulini di Canepa, San Marino",
          description:
            "E così ho capito che basta poco a farla felice: una cascatella e un bosco (e forse io)."
        },
        {
          title: "Un posto speciale",
          subtitle: "Assisi",
          description:
            "In ascolto di belle parole che ci hanno unito e rafforzato."
        },
        {
          title: '"In montagna"',
          subtitle: "Carpegna, Pesaro Urbino",
          description:
            'E così tutto orgoglioso mi dice "Giovi, oggi ti porto in montagna". Arrivati in cima ho capito che aveva bisogno di una spiegazione tra collina romagnola e montagna bresciana.'
        },
        {
          title: "Il mio capitano Jack",
          subtitle: "Fiorenzuola, Pesaro",
          description: "Dritti alla meta e conquista la preda."
        },
        {
          title: "Uno sguardo d'intesa",
          subtitle: "Zone, Lago d'Iseo",
          description: "E così con quel dolce sguardo mi dà forza."
        },
        {
          title: "Due zaini, due sorrisi",
          subtitle: "San Miniato, Pisa",
          description:
            'Insieme il peso dello zaino si dimezza ("per forza portavo tutto io" ~Jack).'
        },
        {
          title: "Gran stile in cucina",
          subtitle: "Dalla nonna Gio",
          description: "Superchef in aiuto della nonna."
        },
        {
          title: "Un po' di classe",
          subtitle: "Brescia",
          description: "Super festa a casa Mazzacani."
        },
        {
          title: "Pic-nic, i nostri preferiti",
          subtitle: "San Mauro Pascoli, Rimini",
          description:
            "Mi è andata bene, non la devo neanche portare al ristorante, per lei i pic-nic valgono molto di più."
        },
        {
          title: "Un viandante tra le colline toscane ",
          subtitle: "Isola d'Arbia, Siena",
          description:
            "La strada è da fare è ancora lunga, ma la natura circostante ci solleva d'animo!"
        },
        {
          title: "Allo stesso passo",
          subtitle: "Montefiascone, Viterbo",
          description:
            "Ci vuole impegno e fatica per stare allo stesso passo ma quando ci si riesce è tutto più facile."
        },
        {
          title: "Arrivo o inizio?",
          subtitle: "Roma",
          description:
            "Dopo 270 km, qualche litigata e tante risate ci facciamo abbracciare da piazza S. Pietro. E ora che abbiamo affrontato questa prova siamo pronti a tutto, a un nuovo inizio."
        },
        {
          title: '"Jack, non cadere!"',
          subtitle: "Parco del Mincio, Mantova",
          description:
            "13 anni che non pedala una bicicletta, per fortuna nonostante la sua goffaggine non è mai caduto!"
        },
        {
          title: "A un matrimonio importante",
          subtitle: "Flero, Brescia",
          description:
            "Francesca e Faustino sposi nel Signore. Una felicità contagiosa."
        },
        {
          title: 'Casa, dolce "monte"',
          subtitle: "San Marino",
          description: "Lei e San Marino, che cosa vuoi di più?"
        },
        {
          title: "Un brindisi...",
          subtitle: "Verona",
          description:
            "...a noi sposi. Un annuncio inaspettato e super festeggiato."
        },
        {
          title: "#Stayathome",
          subtitle: "Collina Sant'Anna, Brescia.",
          description: "Cose che si fanno solo in quarantena!"
        },
        {
          title: "Serio quando serve",
          subtitle: "Pasquetta dai Musicco",
          description:
            "Ride sempre ma quando si tratta di preparare gli hamburger raggiunge la massima concentrazione."
        },
        {
          title: "Smartworking",
          subtitle: "Quarantena felice",
          description:
            "Sammarinese bloccato a Brescia, ma tutto sommato non se la passa male."
        },
        {
          title: "Lei",
          subtitle: "Adamello, Brescia",
          description: "Dolce, seria e romantica"
        },
        {
          title: "Lui",
          subtitle: "Monte Maddalena, Brescia",
          description:
            "Onesto, semplice, coraggioso e dall'animo buono. Appassionato del suo lavoro, dal cuore grande, spontaneo e allegro. Con una birra e un panino alla salsiccia raggiunge la sua estasi. A volte goffo e maldestro riesce sempre a stupirti, questo è Giacomo."
        }
      ],
      imageTextEnglish: [
        {
          title: "First Date",
          subtitle: "Montisola, Lago d'Iseo",
          description:
            "\"Do you want to go the lake?\". I thought we would just walk alongside the shore, but I found my self sweaty up to Mont'Isola's sanctuary . I really don' know what to expect from the next ones!"
        },
        {
          title: "A tourist in Brescia",
          subtitle: "Castello di Brescia",
          description:
            "He is used to San Marino's three castless, luckly Brescia has got at least one."
        },
        {
          title: "Romantic Evening",
          subtitle: "Capitolino Temple, Brescia",
          description: "Have you ever seen Jack with an elegant shirt on?"
        },
        {
          title: "Apples gathering",
          subtitle: "Brez, Val di Non",
          description:
            "San Marino - Brez, 5 hours, 4 different trains and one bus thinking I would enjoy some relax in nature with my bella. Surely did not think I would have met everyone at once: 7 siblings, 8 cousins, 2 oncles and grandma. Neither I would have helped them gather apples each day"
        },
        {
          title: "Secret woods",
          subtitle: "Mills of Canepa, San Marino",
          description:
            "I have finally realized it does not take much to make her happy: a little cascade and woods (and maybe me as well)."
        },
        {
          title: "A special place",
          subtitle: "Assisi",
          description:
            "Listening to beatiful words that united and strengthen us."
        },
        {
          title: '"Up to the mountain"',
          subtitle: "Carpegna, Pesaro Urbino",
          description:
            'So he proudly told me: "Giovi, today I am taking you up to the mountains". After we got there, I realized that he needed some explanations in distinguishing a Romagna hill from a mountain'
        },
        {
          title: "Il mio capitano Jack",
          subtitle: "Fiorenzuola, Pesaro",
          description: "Dritti alla meta e conquista la preda."
        },
        {
          title: "Knowing glances",
          subtitle: "Zone, Lago d'Iseo",
          description: "And so, that sweet look gives me strength."
        },
        {
          title: "Two backpacks, two smiles",
          subtitle: "San Miniato, Pisa",
          description:
            'Together, the weight of the backpack is halved ("of course, I was bringing everything in mine! ~Jack).'
        },
        {
          title: "Gran stile in cucina",
          subtitle: "Dalla nonna Gio",
          description: "Superchef helping grandma."
        },
        {
          title: "Un po' di classe",
          subtitle: "Brescia",
          description: "Big party at Mazzacani's."
        },
        {
          title: "Pic-nic, i nostri preferiti",
          subtitle: "San Mauro Pascoli, Rimini",
          description:
            "I got lucky, I do not need to take her out in fancy restaurant, she enjoys pic-nics way more."
        },
        {
          title: "A wanderer among tuscany hills",
          subtitle: "Isola d'Arbia, Siena",
          description:
            "The road after us is still long, but the nature sorrounding us cheers us up!"
        },
        {
          title: "At the same pace",
          subtitle: "Montefiascone, Viterbo",
          description:
            "Will and effort are needed to walk at the same pace, but everything gets easier after reaching it"
        },
        {
          title: "Arrival or beginning?",
          subtitle: "Roma",
          description:
            "After 270 kms, some fights and lots of laughs S. Peter square embraces us. Now we are ready for anything to come, and for a new beginning."
        },
        {
          title: '"Jack, don\'t fall!"',
          subtitle: "Mincio's Park, Mantova",
          description:
            "It has been 13 years since he used a bycicle. In despite of his clumsiness, he luckly did not fall off!"
        },
        {
          title: "An important wedding",
          subtitle: "Flero, Brescia",
          description:
            "Francesca e Faustino are wed in the name of the Lord. A contagious happiness."
        },
        {
          title: "Home, sweet mount",
          subtitle: "San Marino",
          description: "Her and San Marino, what do you want more?"
        },
        {
          title: "A toast to...",
          subtitle: "Verona",
          description:
            "...us, engaged. An unexpected surprise but still very celebrated "
        },
        {
          title: "#Stayathome",
          subtitle: "Sant'Anna's hill, Brescia.",
          description: "Things you only do in quarantine"
        },
        {
          title: "Serious when needed",
          subtitle: "Pasquetta at Musicco's",
          description:
            "He alwasy laughs, but when it is time to make burgers he always reaches maximum concentration"
        },
        {
          title: "Smartworking",
          subtitle: "Happy quarantine",
          description:
            "Saintmarinese stuck in Brescia, but after all he is doing pretty good"
        },
        {
          title: "Her",
          subtitle: "Adamello, Brescia",
          description: "Sweet, serious and romantic."
        },
        {
          title: "Him",
          subtitle: "Mount Maddalena, Brescia",
          description:
            "Honest, simple, brave and good will. Passionated about his job, big hearted, spontaneous and always happy. He gets the happiest with a beer and a sausage sandwich. Sometimes goofy and clumsy, but he alwasys surprises you, this is Giacomo."
        }
      ]
    };
  },
  methods: {
    getTitle(index, isEnglish = false) {
      return this.swapLanguage
        ? this.imageTextEnglish[index - 1].title
        : this.imageText[index - 1].title;
    },
    getDescription(index, isEnglish = false) {
      return this.swapLanguage
        ? this.imageTextEnglish[index - 1].description
        : this.imageText[index - 1].description;
    },
    getSubtitle(index, isEnglish = false) {
      return this.swapLanguage
        ? this.imageTextEnglish[index - 1].subtitle
        : this.imageText[index - 1].subtitle;
    }
  },
  watch: {
    language: function() {
      this.swapLanguage = !this.swapLanguage;
    }
  }
};
</script>

<style>
</style>
