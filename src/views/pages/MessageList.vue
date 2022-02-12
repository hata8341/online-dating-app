<template>
  <v-app>
    <Header />
    <v-container>
      <v-list
        two-line
      >
        <v-subheader>MessageList</v-subheader>
        <template
          v-for="(messages,index) in messageList"
        >
          <v-list-item
            :key="index"
          >
            <v-list-item-avatar
            >
              <v-img
                :src="getImgUrl(index)"
              >
              </v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <router-link :to="{
                  name:'Chat',
                  params: {
                    id: index,
                    imgUrl: getImgUrl(index)
                  }
                }">
                <v-list-item-title
                  v-text="getLastMessage(messages)"
                >
                </v-list-item-title>
                <v-list-item-subtitle
                  v-text="getLastChatTime(messages)"
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
      messageList: {type: Object}
    }
  },
  methods:{
    getImgUrl(id){
      let i =  parseInt(id);
      let user = {type: Object};
      user =  this.$store.getters['users/getUserById'](i);
      return user.picture.large;
    },
    getLastMessage(messages){
      let lastMessageIndex = messages.length-2;
      return messages[lastMessageIndex].message;
    },
    getLastChatTime(messages){
      let lastMessageIndex = messages.length-2;
      return messages[lastMessageIndex].lastChatTime;
    }
  },
  created(){
    this.messageList = this.$store.state.messages.messages;
  }
}
</script>