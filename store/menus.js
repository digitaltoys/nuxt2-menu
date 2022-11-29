export default {
  state: () => ({
    list: [
      { name: '짜장면', icon: 'card.png', route: '/menu' },
      // { name: '-' },
      { name: '카레', icon: 'doc.png', route: '' },
      { name: '콩나물국밥', icon: 'doc.png', route: '' },
      { name: '부대찌게', icon: 'doc.png', route: '' },
      { name: '라멘', icon: 'doc.png', route: '' },
      { name: '황태국밥', icon: 'doc.png', route: '' },
      { name: '청진식당', icon: 'doc.png', route: '' },
      { name: '대련집', icon: 'doc.png', route: '' },
      { name: '닭칼국수', icon: 'doc.png', route: '' },
      { name: '호랑이쌀국수', icon: 'doc.png', route: '' },
    ],
  }),

  getters: {
    getMenuList: (state) => state.list,
  },

  actions: {},

  mutations: {
    setMenuList: (state, data) => (state.list = data),

    add(state, text) {
      state.list.push({
        name: text,
      })
    },
    remove(state, { menu }) {
      state.list.splice(state.list.indexOf(menu), 1)
    },
  },
}
