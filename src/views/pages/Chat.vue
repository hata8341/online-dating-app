<template>
  <v-app>
    <Header />
    <v-container>
      <v-card>
        <v-list
          two-line
          subheader
        >
          <v-subheader>chat</v-subheader>
          <template
            v-for="(message, index) in getMessages($route.params.id)"
          >
            <v-list-item
              :key="index"
              :class="{'v-list-item2': index % 2 !== 0}"
            >
              <v-list-item-content>
                <v-list-item-title
                  v-text="message.message"
                >
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{message.lastChatTime}}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-avatar
                :class="{'v-application--is-ltr .v-list-item__avatar:last-of-type:not(:only-child)': index % 2 !== 0}"
              >
                <v-img
                  :src="changeImgSrc(index)"
                >
                </v-img>
              </v-list-item-avatar>
            </v-list-item>
          </template>
          <v-list-item>
            <v-row>
              <v-col
                cols="10"
              >
                <v-text-field
                  name="message"
                  label="メッセージを入力してください"
                  v-model.trim="inputMessage"
                  class="input-group--focused"
                  single-line
                  @keypress.enter="sendMessage(inputMessage,$route.params.id)"
                ></v-text-field>
              </v-col>
              <v-col
                cols="2"
              >
              <v-card-actions>
                <v-btn
                  color="primary"
                  @click="sendMessage(inputMessage,$route.params.id)"
                >
                  送信
                </v-btn>
              </v-card-actions>
              </v-col>
            </v-row>
          </v-list-item>
        </v-list>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import Header from '../../components/Header.vue';
export default {
  components: { Header },
  data(){
    return {
      inputMessage: "",
      messages: {type:[]},
      imgSrc: require(`../../assets/animal-penngin.png`),
    }
  },
  methods: {
    getDate(){
      let dt = new Date();
      let y = dt.getFullYear();
      let m = ("00" + (dt.getMonth()+1)).slice(-2);
      let d = ("00" + dt.getDate()).slice(-2);
      let h = ("00" + dt.getHours()).slice(-2);
      let min = ("00" + dt.getMinutes()).slice(-2);
      let s = ("00" + dt.getSeconds()).slice(-2);
      let result = y + "/" + m + "/" + d + " " + h + ":" + min + ":" + s;
      return result;
    },
    chooseWord(){
      const words = ["はじめまして！","こんにちは","おはよう","元気？","元気だよ！！！","今度よろしくね!","おやすみ"];
      let i = Math.floor(Math.random() * words.length);
      return words[i];
    },
    sendMessage(message,id){
      if (message.length < 1) {
        alert("メッセージを入力してください");
        return;
      } else {
        this.$store.dispatch({
          type: 'messages/setMessages',
          params: {
            id: id,
            message: [message,this.chooseWord()],
            currChatTime: this.getDate()
          }
        });
      }
      this.inputMessage = "";
    },
    changeImgSrc(index){
      return this.imgSrc = index % 2 !== 0 ? this.$route.params.imgUrl: require(`../../assets/animal-penngin.png`);
    }
  },
  computed: {
    getMessages: function(){
      return function(id){
        this.messages = this.$store.getters['messages/getMessagesById'](id);
        return this.messages;
      }
    }
  },
}
</script>

<style scoped>
.v-list-item2{
  flex-direction: row-reverse;
}
.v-application--is-ltr .v-list-item__avatar:last-of-type:not(:only-child){
  margin-left: 0px;
  margin-right: 16px;
}
</style>