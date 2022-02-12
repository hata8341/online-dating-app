<template>
  <v-app>
    <Header />
    <v-container
      class="grey lighten-5 d-flex"
    >
      <v-row>
        <template v-for="(user, i) in users">
          <v-col
            :key="i"
            cols="4"
          >
            <UserCard
              :intialUser="user"
              :intialUserId="user.login.uuid"
            />
          </v-col>
        </template>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Header from '../../components/Header.vue';
import UserCard from '../../components/UserCard.vue';

export default {
  name: 'UserList',
  components: {
    Header,
    UserCard
  },
  data() {
    return {
      users:{},
    }
  },
  methods: {
    getUsersList(){
      this.users = this.$store.state.users.users;
    }
  },
  async created(){
    await this.$store.dispatch({
      type: 'users/fetchUsers',
      searchParams: {
        id: 1,
        user:{name:"jiro"}
      }
    })
    await this.getUsersList();
  },
}
</script>