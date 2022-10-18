<template>
  <v-container fluid style="background-color: #04153b" fill-height>
    <h2 class="mx-auto white--text"> Bienvenue Gilles BOYER, </h2>
    <v-row justify="center" align-content="center">
      <v-col cols="11" sm="7" md="4" xl="3">
        <v-card class="pa-4 login" elevation="4" shaped>     
          <v-card class="mx-auto pa-6 text-center" fluid shaped elevation="0" >
            <v-icon size="60" color="primary">mdi-qrcode</v-icon>
            <v-card-title class="text-center primary--text ml-4"
              >Nombre de bon cadeau Validé</v-card-title
            >
            <v-progress-circular :size="200" :width="20" :value="100" color="primary" class="mx-auto">
              <h1 class="primary--text">50</h1> 
            </v-progress-circular>
          </v-card>
        </v-card>
      </v-col>
      <v-col cols="11" sm="7" md="4" xl="3">
        <v-card class="pa-4 login" elevation="4" shaped>
          <v-card class="mx-auto pa-6 text-center" fluid shaped elevation="0" >
            <v-icon size="60" color="teal">mdi-store-check</v-icon>
            <v-card-title class="text-center teal--text ml-4"
              >Nombre de bon cadeau Vendu</v-card-title
            >
            <v-progress-circular :size="200" :width="20" :value="100" color="teal" class="mx-auto">
              <h1 class="teal--text">50</h1> 
            </v-progress-circular>
          </v-card>
        </v-card>
      </v-col>
      <v-col cols="11" sm="7" md="4" xl="3">
        <v-card class="pa-4 login" elevation="4" shaped>
          <v-card class="mx-auto pa-6 text-center" fluid shaped elevation="0" >
            <v-icon size="60" color="red">mdi-cash-multiple</v-icon>
            <v-card-title class="text-center red--text ml-4"
              >Montant Total des bons vendus</v-card-title>
            <v-progress-circular :size="200" :width="20" :value="100" color="red" class="mx-auto">
              <h1 class="red--text">50</h1> 
            </v-progress-circular>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  <style >
.login {
  background: rgb(9, 66, 121);
  background: linear-gradient(
    180deg,
    rgba(9, 66, 121, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}
</style>
  
  <script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      valid: true,
      show: false,
      loginData: {
        email: "",
        password: "",
      },
      logo: require("../assets/logoMyBizness.png"),
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        format: (v) =>
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v) ||
          "Vérifier le format du mot de passe",
        email: (v) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(v) || "Invalid e-mail.";
        },
      },
    };
  },

  methods: {
    ...mapActions(["login"]),
    validate() {
      if (this.$refs.form.validate()) {
        console.log(this.loginData);
        // this.login(this.loginData);
      }
    },
  },
};
</script>