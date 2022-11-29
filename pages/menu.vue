<template>
  <div style="padding: 10px">
    <template v-for="menu in list">
      <!-- <div>{{ menu.name }}</div> -->
      <MenuItem
        :icon="menu.icon"
        :route="menu.route"
        :isBar="menu.name == '-'"
        :class2="'item-space'"
        >{{ menu.name }}</MenuItem
      >
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
// import MenuItem from '../components/MenuItem.vue'

export default Vue.extend({
  name: 'Home',
  layout: 'nofooter',
  mounted() {
    console.log('rand', Math.floor(Math.random() * 10))
    console.log('menu', typeof this.selectOne)
    console.log('rand', this.list[Number(this.selectOne)].name)
  },
  computed: {
    // ...mapGetters(['getMenuList']),
    ...mapState('menus', ['list']),
    menus() {
      console.log('menus', this.$store.state.menus.list.length)
      return this.$store.state.menus.list
    },

    selectOne() {
      return Number(Math.floor(Math.random() * this.list.length))
    },
  },
  methods: {
    ...mapActions(['setMenuList']),
    // selectOne() {
    //   return Math.floor(Math.random() * this.list.length)
    // },
  },
})
</script>

<style>
.item-space {
  padding: 10px 0;
}
</style>
