<template>
  <router-link :to="{ name: 'UserDetail', params: { id: userId }}">
    <v-hover v-slot="{ hover }">
      <v-card
        class="d-flex flex-column pa-2"
        outlined
        :elevation="hover ? 12 : 5"
        :class="{ 'on-hover': hover }"
      >
        <v-img
          height="200"
          :src="user.picture.large"
        >
        </v-img>
        <v-card-title class="text-decoration-underline">
          {{user.name.first}}
        </v-card-title>
        <v-card-text>
          <div class="text-decoration-underline">age:{{user.registered.age}}</div>
        </v-card-text>
      </v-card>
    </v-hover>
  </router-link>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    intialUser: {
      type: Object,
      require: true,
    },
    intialUserId: {
      type: String,
      require: true,
    }
  },
  data(){
    return{
      user: this.intialUser,
      userId: this.intialUserId,
    }
  },
}
</script>

<style scoped>
.v-card {
  cursor: pointer;
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}
</style>