export default {
  namespaced: true,
  state: {
    messages: {
      // 1: [
      //   {
      //     message: "テスト２",
      //     lastChatTime:"2022 11:00:26"
      //   },
      //   {
      //     message: "test2",
      //     lastChatTime:"2022 11:00:26"
      //   },
      //   {
      //     message: "こんにちは",
      //     lastChatTime:"2022 11:00:26"
      //   },
      //   {
      //     message: "こんばんは",
      //     lastChatTime:"2022 11:00:26"
      //   },
      // ],
      // 2: [
      //   {
      //     message: "テスト２",
      //     lastChatTime:"2022 11:00:26"
      //   },
      //   {
      //     message: "test2",
      //     lastChatTime:"2022 11:00:26"
      //   },
      //   {
      //     message: "おやすみ",
      //     lastChatTime:"2022 55:55:55"
      //   },
      //   {
      //     message: "こんばんは",
      //     lastChatTime:"2022 55:55:55"
      //   },
      // ],
      // 3: [
      //   {
      //     message: "テスト２",
      //     lastChatTime:"2022 11:00:26"
      //   },
      //   {
      //     message: "test2",
      //     lastChatTime:"2022 11:00:26"
      //   },
      //   {
      //     message: "出かけよう",
      //     lastChatTime:"2022 66:66:66"
      //   },
      //   {
      //     message: "こんばんは",
      //     lastChatTime:"2022 66:66:66"
      //   },
      // ],
  }
    ,
  },
  getters: {
    getMessagesById: (state) => (id) => {
      return state.messages[id];
    }
  },
  mutations: {
    setMessages(state, payload) {
      let id = payload.id;
      if (state.messages[id] == undefined) {
        state.messages[id] = [
          {
            message: payload.message[0],
            lastChatTime: payload.currChatTime,
          },
          {
            message: payload.message[1],
            lastChatTime: payload.currChatTime,
          },
        ]
      }
      else {
        state.messages[id].push({
          message: payload.message[0],
          lastChatTime: payload.currChatTime,
        });
        state.messages[id].push({
          message: payload.message[1],
          lastChatTime: payload.currChatTime,
        });
      }
    }
  },
  actions: {
    //コンポーネント内で直接mutations（setMessages()）を呼び出すのはNGのため
    //commitの実装はこのactions内でする
    setMessages(context, payload) {
      context.commit('setMessages', payload.params);
    }
  },
}

