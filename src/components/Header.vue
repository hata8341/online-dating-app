<template>
  <v-card class="text-center">
    <v-app-bar
      color="indigo lighten-5"
      dark
    >
      <v-icon
        v-show="$route.path != '/'"
        class="ml-2"
        color="brown darken-3"
        @click="goToHome()"
      >mdi-home</v-icon>

      <v-spacer></v-spacer>
      <h1 class="">Online-Dating-App</h1>
      <v-spacer></v-spacer>

      <v-icon
        v-show="$route.path != '/message-list'"
        color="deep-orange darken-2"
        @click="goToMessage()"
      >mdi-email</v-icon>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return {
      collapseOnScroll: true,
    }
  },
  methods: {
    goToHome(){
      return this.$router.push("/", () => {});
    },
    goToMessage(){
      return this.$router.push("/message-list",() => {});
    }
  }
}
</script>

<style scoped>
::v-deep .theme--dark.v-sheet{
  color: #000;
}
</style>