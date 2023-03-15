<template>
  <v-container fluid style="background-color:#f7f9e4">
    <p class="nicetitle text-center" v-if="!english">Informazioni</p>
    <p class="nicetitle text-center" v-else>Information</p>

    <v-expansion-panels style="max-width:900px" class="mx-auto" v-if="!english">
      <v-expansion-panel>
        <v-expansion-panel-header class="descr">Come raggiungere la basilica</v-expansion-panel-header>
        <v-expansion-panel-content eager>
          <p>La basilica non dispone di un parcheggio proprio, consigliamo di trovare il posto auto nelle vicinanze (Via dei Mille or Via Calatafimi), oppure nei parcheggi mostrati sotto</p>
          <v-divider />
          <p class="subtitle">Parcheggi</p>
          <v-list shaped>
            <v-list-item-group color="primary">
              <v-list-item
                class="pa-0"
                v-for="(parking,i) in parkings"
                :key="i"
                @click="onParkingClick(parking)"
              >
                <v-list-item-avatar>
                  <v-icon>mdi-map-marker</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title
                    style="white-space:pre-line!important"
                  >{{parking.coordinates.label}} - {{parking.name}} ({{parking.type}}) {{parking.time}}</v-list-item-title>

                  <v-list-item-subtitle style="white-space:pre-line!important">{{parking.address}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <div class="text-center">
            <v-btn
              rounded
              :small="$vuetify.breakpoint.xsOnly"
              color="#EBF0BA"
              @click="onParkingMapClick()"
            >
              mappa
              <v-icon small>mdi-map-marker</v-icon>
            </v-btn>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="descr">Come raggiungere l' agriturismo</v-expansion-panel-header>
        <v-expansion-panel-content eager>
          <p class="subtitle">Bedizzole</p>
          <p>
            La strada più veloce è sicuramente la strada provinciale proseguendo in direzione lago, uscendo poi a Bedizzole.
            Per dettagli più precisi vedere la mappa.
          </p>
          <v-divider />
          <p class="subtitle">Parcheggi</p>
          <v-list shaped>
            <v-list-item-group color="primary">
              <v-list-item class="pa-0" @click="onRestaurantClick()">
                <v-list-item-avatar>
                  <v-icon>mdi-map-marker</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Parcheggio del ristorante</v-list-item-title>
                  <v-list-item-subtitle>Via F.lli Venturoli, Bedizzole (Bs)</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <div class="text-center">
            <v-btn
              rounded
              :small="$vuetify.breakpoint.xsOnly"
              color="#EBF0BA"
              @click="onRestaurantClick()"
            >
              mappa
              <v-icon small>mdi-map-marker</v-icon>
            </v-btn>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="descr">Consigli per il dormire</v-expansion-panel-header>
        <v-expansion-panel-content eager>
          <p class="subtitle">Bed & Breakfast</p>
          <v-list shaped>
            <v-list-item-group color="primary">
              <v-list-item class="pa-0" v-for="(sleep,i) in sleepings" :key="i">
                <v-list-item-avatar>
                  <v-icon>mdi-bed</v-icon>
                </v-list-item-avatar>
                <v-list-item-content @click="onClickSleep(sleep.link)">
                  <v-list-item-title>{{sleep.name}}</v-list-item-title>
                  <v-list-item-subtitle>{{sleep.address}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <div class="text-center">
            <v-btn
              rounded
              :small="$vuetify.breakpoint.xsOnly"
              color="#EBF0BA"
              @click="onClickSleepMap()"
            >
              mappa
              <v-icon small>mdi-map-marker</v-icon>
            </v-btn>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels style="max-width:900px" class="mx-auto" v-else>
      <v-expansion-panel>
        <v-expansion-panel-header class="descr">How to reach the church</v-expansion-panel-header>

        <v-expansion-panel-content eager>
          <p>The church does not have its own parking place. We recommend to find one nearby (Via dei Mille or Via Calatafimi) or one shown below</p>
          <v-divider />
          <p class="subtitle">Parking areas</p>
          <v-list shaped>
            <v-list-item-group color="primary">
              <v-list-item
                class="pa-0"
                v-for="(parking,i) in parkingsEnglish"
                :key="i"
                @click="onParkingClick(parking)"
              >
                <v-list-item-avatar>
                  <v-icon>mdi-map-marker</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title
                    style="white-space:pre-line!important"
                  >{{parking.coordinates.label}} - {{parking.name}} ({{parking.type}}) {{parking.time}}</v-list-item-title>
                  <v-list-item-subtitle style="white-space:pre-line!important">{{parking.address}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <div class="text-center">
            <v-btn
              rounded
              :small="$vuetify.breakpoint.xsOnly"
              color="#EBF0BA"
              @click="onParkingMapClick()"
            >
              map
              <v-icon small>mdi-map-marker</v-icon>
            </v-btn>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="descr">How to reach the agriturismo</v-expansion-panel-header>
        <v-expansion-panel-content eager>
          <p class="subtitle">Bedizzole exit</p>
          <p>Follow directions to the lake and then exit to Bedizzole</p>
          <v-divider />
          <p class="subtitle">Parcheggi</p>
          <v-list shaped>
            <v-list-item-group color="primary">
              <v-list-item class="pa-0" @click="onRestaurantClick()">
                <v-list-item-avatar>
                  <v-icon>mdi-map-marker</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Restaurant parking area</v-list-item-title>
                  <v-list-item-subtitle>Via F.lli Venturoli, Bedizzole (Bs)</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <div class="text-center">
            <v-btn
              rounded
              :small="$vuetify.breakpoint.xsOnly"
              color="#EBF0BA"
              @click="onRestaurantClick()"
            >
              amp
              <v-icon small>mdi-map-marker</v-icon>
            </v-btn>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="descr">Advices for accomodation</v-expansion-panel-header>
        <v-expansion-panel-content eager>
          <p class="subtitle">Bed & Breakfast</p>
          <v-list shaped>
            <v-list-item-group color="primary">
              <v-list-item class="pa-0" v-for="(sleep,i) in sleepings" :key="i">
                <v-list-item-avatar>
                  <v-icon>mdi-bed</v-icon>
                </v-list-item-avatar>
                <v-list-item-content @click="onClickSleep(sleep.link)">
                  <v-list-item-title>{{sleep.name}}</v-list-item-title>
                  <v-list-item-subtitle>{{sleep.address}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <div class="text-center">
            <v-btn
              rounded
              :small="$vuetify.breakpoint.xsOnly"
              color="#EBF0BA"
              @click="onClickSleepMap()"
            >
              map
              <v-icon small>mdi-map-marker</v-icon>
            </v-btn>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-dialog
      v-model="dialog"
      :fullscreen="$vuetify.breakpoint.xsOnly"
      :hide-overlay="$vuetify.breakpoint.xsOnly"
      transition="dialog-bottom-transition"
    >
      <MapComponent
        :coordinates="coordinates"
        :center="center"
        :initialZoom="initialZoom"
        v-on:mapdialogclosed="dialog=false"
        :title="title"
      />
      <!-- <v-snackbar v-model="snackbar" :timeout="2000">
        Ingradisci la mappa per vedere gli altri parcheggi
        <v-btn text @click="snackbar = false">close</v-btn>
      </v-snackbar>-->
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  components: {
    MapComponent: () => import("./MapComponent")
  },
  props: {
    language: String
  },
  data: () => {
    return {
      english: false,
      dialog: false,
      center: {},
      title: "",
      initialZoom: 14,
      church: {
        lat: 45.542699,
        lng: 10.213236
      },
      restaurant: {
        lat: 45.517735,
        lng: 10.41357
      },
      parkings: [
        {
          type: "Pagamento",
          name: "Parcheggio Randaccio",
          address: "Via Spalto S. Marco, 8, \n 25121  Brescia BS",
          time: "4 minuti a piedi",
          coordinates: {
            lat: 45.544605,
            lng: 10.213892,
            label: "P1"
          }
        },
        {
          type: "Pagamento",
          name: "Parcheggio Vittoria",
          address: "Piazza della Vittoria, 25121 Brescia BS",
          time:"12 minuti a piedi",
          coordinates: {
            lat: 45.538179,
            lng: 10.219048,
            label: "P2"
          }
        }
      ],
      sleepings: [
        {
          name: "Il Glicine",
          address: "Via Ersone, 3, 25081 Bedizzole BS",
          link: "https://www.ilglicine.it/",
          coordinates: {
            lat: 45.510967,
            lng: 10.43128,
            label: "S1"
          }
        },
        {
          name: "Agriturismo Parco del Chiese",
          address: "V. Garibaldi 28, 25081 Bedizzole BS",
          link: "https://www.agriturismoparcodelchiese.com/",
          coordinates: {
            lat: 45.522408,
            lng: 10.407016,
            label: "S2"
          }
        },
        {
          name: "Borgo Antico",
          address: "Via F. Gioia 18/20, 25081 Bedizzole BS",
          link: "https://alborgoantico.info/index.php/bed-and-breakfast/",
          coordinates: {
            lat: 45.517373,
            lng: 10.413189,
            label: "S3"
          }
        }
      ],
      parkingsEnglish: [
        {
          type: "Toll",
          name: "Parking area Goito Brescia",
          address: "Via Spalto S. Marco, 8, \n 25121  Brescia BS",
          coordinates: {
            lat: 45.544605,
            lng: 10.213892,
            label: "P1"
          }
        },
        {
          type: "Toll",
          name: "Parking Vittoria",
          address: "Piazza della Vittoria, 25121 Brescia BS",
          coordinates: {
            lat: 45.538179,
            lng: 10.219048,
            label: "P1"
          }
        }
      ],
      coordinates: []
    };
  },
  methods: {
    onDirectionClick() {
      window.open(
        "https://www.google.it/maps/dir/Piazzetta+Santa+Maria+Calchera,+25121+Brescia+BS/Agriturismo+Roccolo+Societa'+Agricola+Roccolo+S.S.,+Via+Fratelli+Venturoli,+Bedizzole,+BS/@45.5080153,10.2859178,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47817614208bc87f:0x321cd14c8579a963!2m2!1d10.2271568!2d45.5369419!1m5!1m1!1s0x47819a1aa0e98943:0x71a8a11d9b46d847!2m2!1d10.4134633!2d45.517728!3e0"
      );
    },
    onClickSleep(link) {
      window.open(link);
    },
    onParkingClick(parking) {
      this.coordinates = [];
      this.coordinates.push(parking.coordinates);
      this.center = this.church;
      this.title = parking.name;
      this.dialog = true;
    },
    onParkingMapClick() {
      this.coordinates = this.parkings.map(parking => parking.coordinates);
      this.center = this.church;
      this.title = "Parcheggi per la chiesa";
      this.dialog = true;
    },
    onRestaurantClick() {
      this.coordinates = [];
      this.center = this.restaurant;
      this.title = "Agriturismo Roccolo";
      this.dialog = true;
    },
    onClickSleepMap() {
      this.coordinates = this.sleepings.map(sleeping => sleeping.coordinates);
      this.center = this.restaurant;
      this.title = "B&B";
      this.dialog = true;
      this.initialZoom = 14;
    }
  },
  watch: {
    language: function() {
      this.english = !this.english;
    }
  }
};
</script>

<style>
</style>
