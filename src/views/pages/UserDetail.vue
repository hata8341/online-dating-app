<template>
  <v-app>
    <Header />
    <v-container
      class="grey lighten-5"
    >
      <v-card
        class="pt-3"
        outlined
      >
        <v-row
        align="center"
        justify="space-around"
        >
          <v-col
            cols="5"
          >
            <v-img
              :src="user.picture.large"
              height="200"
            ></v-img>
          </v-col>
        </v-row>
        <v-row
          align="center"
          justify="space-around"
        >
          <v-btn
            tile
            color="success"
            @click="goToChat(user)"
          >
            <v-icon left>
              mdi-message-plus
            </v-icon>
            MESSAGE
          </v-btn>
        </v-row>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th>
                </th>
                <th>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
              >
                <td>Name</td>
                <td>{{user.name.last}}</td>
              </tr>
              <tr
              >
                <td>gender</td>
                <td>{{user.gender}}</td>
              </tr>
              <tr
              >
                <td>age</td>
                <td>{{user.registered.age}}</td>
              </tr>
              <tr
              >
                <td>country</td>
                <td>{{user.location.country}}</td>
              </tr>
              <tr
              >
                <td>state</td>
                <td>{{user.location.state}}</td>
              </tr>
              <tr
              >
                <td>city</td>
                <td>{{user.location.city}}</td>
              </tr>
              <tr
              >
                <td>email</td>
                <td>{{user.email}}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import Header from '../../components/Header.vue';
export default {
  components: {
    Header,
  },
  data(){
    return {
      id: this.$route.params.id,
      user: {type: Object},
    }
  },
  methods:{
    goToChat(user){
      this.$router.push({
        name: 'Chat',
        path: '/user/'+ user.login.uuid +'/chat',
        params: {
          id: user.login.uuid,
          imgUrl: user.picture.large,
        }
      })
    }
  },
  computed:{
    getUser: function(){
      return function(id){
        return this.user = this.$store.getters['users/getUserById'](id);
      }
    }
  },
  created(){
    this.getUser(this.id);
  }
}
</script>