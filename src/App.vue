<template>
  <v-app>

    <Front v-on:imageloaded="mainLoaded = true" />

    <div v-if="mainLoaded">

      <Information :language="language" />

    </div>
    <v-divider v-if="mainLoaded" />
    <v-footer v-if="mainLoaded" color="white">
      <v-row>
        <v-col cols="12" class="text-center">
          <v-img src="@/assets/img/github-logo.svg" height="70" width="70" class="mx-auto" />
          <p class="text-center mt-2 mb-0" style="white-spaces:pre-line;">
            Fatto con
            <span>
              <v-icon color="red">mdi-heart</v-icon>
            </span>
            da
          </p>
          <v-btn :small="$vuetify.breakpoint.xsOnly" depressed @click="onOracleClick()" color="#607D8B"
            dark>SamTheOracle</v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    Front: () => import("./components/Front"),
    Information: () => import("./components/Information")
  },

  data: () => ({
    appInstalled: false,
    showAlert: false,
    english: false,
    language: "English",
    drawer: false,
    overlay: false,
    dialog: false,
    dialogSoon: false,
    mainLoaded: false,
    footerLazy: false,
    showUpdateSnackbar: false,
    links: [
      {
        text: "Verrai?",
        button: "Conferma",
        image: "confirmationblack.svg",
      },
      {
        button: "Noi",
        text: "La nostra storia",
        image: "couple.svg",
      },
      {
        text: "La nostra casa",
        button: "Aiutaci",
        image: "house.svg",
      },
      {
        button: "Commenti",
        text: "Un pensiero per gli sposi",
        image: "comment.svg",
      },
      {
        button: "Informazioni",
        text: "Come raggiungere il luogo",
        image: "information.svg",
      },
      {
        button: "Contatti",
        text: "Contatta gli sposi",
        image: "contacts.svg",
      },
    ],
    linksEnglish: [
      {
        text: "Are you coming?",
        button: "Confirm",
        image: "confirmationblack.svg",
      },
      {
        button: "Us",
        text: "Our story",
        image: "couple.svg",
      },
      {
        text: "for the house to be",
        button: "Help us",
        image: "house.svg",
      },
      {
        button: "Comments",
        text: "A thought for the spouses",
        image: "comment.svg",
      },
      {
        button: "Information",
        text: "How to get around",
        image: "information.svg",
      },
      {
        button: "Contacts",
        text: "Contact the spouses",
        image: "contacts.svg",
      },
    ],
    beforeInstallEvent: undefined,
  }),
  mounted() {
    const isInstalled = !!localStorage.getItem("weddingsite_installed");
    this.appInstalled = isInstalled;

    window.addEventListener("beforeinstallprompt", (e) => {
      if (e) {
        localStorage.removeItem("weddingsite_installed");
        e.preventDefault();
        this.beforeInstallEvent = e;
      }
    });

    window.addEventListener("appinstalled", (evt) => {
      localStorage.setItem("weddingsite_installed", true);
      this.appInstalled = true;
    });
    document.addEventListener("swUpdated", this.showRefreshUI, { once: true });
    // show install prompt after a minute of usage

    setTimeout(() => {
      this.showAlert = true;
    }, 60 * 1000);
  },
  computed: {
    device: function () {
      const width = window.innerWidth;
      if (width >= 960) {
        return "il laptop";
      } else if (width < 960 && width > 600) {
        return "il tablet";
      } else {
        return "lo smartphone";
      }
    },
  },
  methods: {
    showRefreshUI(e) {
      this.showUpdateSnackbar = true;
    },
    refresh() {
      this.showUpdateSnackbar = false;

      window.location.reload();
    },
    doAction(action) {
      if (action === "Informazioni" || action === "Information") {
        this.$vuetify.goTo("#information", { duration: 1000, offset: 100 });
      }
      if (action === "Conferma" || action === "Confirm") {
        this.$vuetify.goTo("#partecipation", { duration: 1000, offset: 100 });
      }
      // if (action === 'La nostra casa') {
      if (action === "Aiutaci" || action === "Help us") {
        this.$vuetify.goTo("#help", { duration: 1000, offset: 100 });

        /*  this.dialog = true */
      }
      if (action === "Noi" || action === "Us") {
        this.$vuetify.goTo("#us", { duration: 1000, offset: 50 });
      }
      if (action === "Contatti" || action === "Contacts") {
        this.$vuetify.goTo("#contacts", { duration: 1000, offset: 100 });
      }
      /*       if (action === 'Uno spazio per voi') {

 */

      if (action === "Commenti" || action === "Comments") {
        this.$vuetify.goTo("#comments", { duration: 1000, offset: 100 });
      }
      if (window.innerWidth <= 800) {
        this.drawer = false;
      }
    },
    /*  computedLinks: function () {
      const width = window.innerWidth
      if (width < 360) {
        return this.links.filter(link => link.button !== 'Informazioni')
      } else {
        return this.links
      }
    }, */
    onOracleClick() {
      window.location.href = "https://github.com/SamTheOracle/weddingsite";
    },
    onChangeLanguageClick() {
      this.language === "English"
        ? (this.language = "Italiano")
        : (this.language = "English");
      this.english = !this.english;
    },
    onInstallClick() {
      this.beforeInstallEvent.prompt();
      this.beforeInstallEvent.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
      });
    },
  },
};
</script>
<style>
/* @import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Coming+Soon&family=Patrick+Hand+SC&family=Pompiere&display=swap"); */
.nice {
  font-family: "Satisfy", cursive;
  color: #431008;
  font-size: 34px !important;
}

.drawertitle {
  font-family: "Satisfy", cursive;
  color: #431008;
  font-size: 30px !important;
}

.footertext {
  font-family: "Exo", sans-serif;
  font-size: 34px !important;
}

.subtitle {
  font-family: "Patrick Hand SC", cursive;
  font-size: 28px;
  font-weight: 400;
  font-style: italic;
  white-space: pre-line;
  margin: 10px 0 0 0;
}

.presentation {
  /*   font-family: "Open Sans", cursive;
 */
  font-family: "Pompiere", cursive;
  font-style: italic;
  font-weight: 300;
  font-size: 23px;
}

#main-container {
  background-color: white;
  min-height: 100vh;
}

.nicemain {
  font-family: "Satisfy", cursive;
  color: #431008;
  font-size: 45px !important;
  transform: rotate(-10deg);
}

.contacttitle {
  font-family: "Satisfy", cursive;
  font-size: 45px !important;
  font-weight: 400;
  font-style: italic;
  white-space: pre-line;
}

.name {
  font-family: "Patrick Hand SC", cursive;
  font-size: 28px !important;
  font-weight: 300;
  white-space: pre-line;
  text-overflow: unset !important;
}

.comment {
  font-family: "Pompiere", cursive !important;
  font-size: 24px !important;
  font-weight: 500 !important;
  line-height: 1.6 !important;
  overflow: hidden !important;
  word-break: normal;
  /*   max-width: 250px !important;
 */
  white-space: normal !important;
  max-width: fit-content !important;
}

.commentsubtitle {
  font-family: "Patrick Hand SC", cursive;
  font-size: 18px !important;
  font-weight: 300;
}

.cardtitle {
  font-family: "Kiona";
  font-size: 28px !important;
  font-weight: bold;
  white-space: pre-line;
}

.descr {
  /*   font-family: "Open Sans", cursive;
 */
  font-family: "Kiona", cursive;
  font-style: italic;
  font-weight: 400;
  font-size: 20px !important;
}

.caption {
  font-weight: 300;
}

.nicetitle {
  font-family: "Kiona", cursive;
  font-size: 50px !important;
  font-weight: bold;
}

.nicetitle-ricev {
  font-family: "BodoniFLF", cursive;
  font-size: 50px !important;
}


.usdescription {
  white-space: normal;
  word-break: normal;
  font-family: "Pompiere", cursive;
  font-weight: 500 !important;
  font-size: 24px !important;
  line-height: 1.2 !important;
  max-width: fit-content !important;
}

.usdescriptionmodified {
  font-family: "Pompiere", cursive;
  font-weight: 500 !important;
  font-size: 26px !important;
}

@font-face {
  font-family: "Kiona";
  src: url("assets/font/Kiona/Kiona-Bold.ttf") format("truetype");
}

@font-face {
  font-family: "BodoniFLF";
  src: url("assets/font/bodoniflf/BodoniFLF Medium Italic.ttf") format("truetype");
  /* font-family: "GlassAntiqua";
  src: url("assets/font/Glass_Antiqua/GlassAntiqua-Regular.ttf") format("truetype"); */
}

@media only screen and (min-width: 601px) and (max-width: 768px) {
  .cardtitle {
    font-size: 32px !important;
  }

  .nicetitle {
    font-size: 30px !important;
  }

  .nicetitle-ricev {
    font-size: 30px !important;
  }


}

@media only screen and (max-width: 600px) {
  .contacttitle {
    font-size: 35px !important;
  }

  .cardtitle {
    font-size: 20px !important;
  }

  .nicetitle {
    font-size: 25px !important;
  }

  .nicetitle-ricev {
    font-size: 45px !important;
  }

  .usdescription {
    font-size: 20px !important;
  }

  .usdescriptionmodified {
    font-size: 20px !important;
  }
}

@media only screen and (max-width: 425px) {
  .footertext {
    font-size: 20px !important;
  }
}

@media only screen and (max-width: 340px) {
  .nice {
    font-size: 30px !important;
  }
}
</style>
