<template>
  <v-app>
    <Header />
    <v-container>
      <v-list
        two-line
      >
        <v-subheader>MessageList</v-subheader>
        <template
          v-for="(id,index) in idList"
        >
          <v-list-item
            :key="index"
          >
            <v-list-item-avatar
            >
              <v-img
                :src="getImgUrl(id)"
              >
              </v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <router-link :to="{
                  name:'Chat',
                  params: {
                    id: id,
                    imgUrl: getImgUrl(id)
                  }
                }">
                <v-list-item-title
                  v-text="getLastMessage(id)"
                >
                </v-list-item-title>
                <v-list-item-subtitle
                  v-text="getLastChatTime(id)"
                >
                </v-list-item-subtitle>
              </router-link>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-container>
  </v-app>
</template>

<script>
import Header from '../../components/Header.vue';
export default {
  components: {
    Header
  },
  data(){
    return {
      messageList: {type: Object},
      idList: [],
    }
  },
  methods:{
    getImgUrl(id){
      let user = {type: Object};
      user =  this.$store.getters['users/getUserById'](id);
      return user.picture.large;
    },
    getLastMessage(id){
      let messages = this.$store.getters['messages/getMessagesById'](id);
      let lastMessageIndex = messages.length-2;
      return messages[lastMessageIndex].message;
    },
    getLastChatTime(id){
      let messages = this.$store.getters['messages/getMessagesById'](id);
      let lastMessageIndex = messages.length-2;
      return messages[lastMessageIndex].lastChatTime;
    }
  },
  created(){
    this.messageList = this.$store.state.messages.messages;
    this.idList = Object.keys(this.messageList);
  }
}
</script>