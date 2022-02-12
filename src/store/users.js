
export default {
  namespaced: true,
  state: {
    users: {},//key:id,value:Object
  },
  getters: {
    // state.usersの中からidに一致するユーザーを取得する
    getUserById: (state) => (id) => {
      return state.users[id];//三項演算子が必要かも
    }
  },
  mutations: {
    setUsers(state, payload) {
      payload.resData.forEach((element, i)=> {
        state.users[i + 1] = element;
      });
    }
  },
  actions: {
    async fetchUsers(context, payload) {
      await fetch('https://randomuser.me/api/?results=21')
        .then((response) => response.json())
        .then((data) => {
          const commitData = {
            resData: data.results,
            searchParams: payload.searchParams,
          };
          context.commit("setUsers", commitData);
        })
        .catch((err) => console.error(err));
    },
  }
}

