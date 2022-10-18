<template>
  <v-app>
    <snackbar />
    <OverlayVue />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { ipcRenderer } from "electron";
ipcRenderer.on("ShowMyModal", function () {
  console.log("toto");
});
</script>

<script>
import snackbar from "./components/App/SnackBar.vue";
import OverlayVue from "./components/App/SnackBar.vue";
export default {
  name: "App",
  components: {
    snackbar,
    OverlayVue,
  },
  created() {
    delete window.document.referrer;
    window.document.__defineGetter__("referrer", function () {
      return "yoururl.com";
    });
  },
  data: () => ({
    //
  }),
};
</script>
