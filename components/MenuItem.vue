<template>
  <!-- <div :class="!isBar ? $props.class2 : ''"> -->
  <router-link
    :to="$props.route"
    :is="!isBar && $props.route ? 'router-link' : 'span'"
  >
    <div v-if="isBar" class="bar"></div>
    <div v-else :class="'menu-item '">
      <span
        class="item-icon"
        :style="
          'background: url(' +
          $props.icon +
          ') no-repeat left center / contain;'
        "
      ></span>
      <span style="width: 100%">
        <slot></slot>
      </span>
      <span v-if="$props.route" class="item-click"></span>
    </div>
  </router-link>
  <!-- </div> -->
</template>

<script>
export default {
  props: {
    icon: String,
    route: String,
    isBar: Boolean,
    class2: String,
  },
  mounted() {
    console.log('MenuItem - mounted:', this.$props.class2)
  },
}
</script>
<style>
.bar {
  border-bottom: 1px solid #e9ebee;
}
.menu-item {
  display: flex;
  height: 24px;
  align-items: center;
  line-height: 1.7;
}
.item-icon {
  display: inline-block;
  height: 100%;
  width: 24px;
  margin-right: 1rem;
}
.item-click {
  display: inline-block;
  height: 70%;
  width: 24px;
  background: url('/right.png') no-repeat right center / contain;
}
a {
  color: black;
  text-decoration: none;
  /* link - 아직 클릭하지 않은 경우 red 색상 설정 */
}
/* a:link {
  color: black;
  text-decoration: none;
}
/* visited - 한번 클릭하거나 전에 클릭한적 있을 경우 #c71d44 설정 * /
a:visited {
  color: black;
  text-decoration: none;
}
/* hover - 마우스를 해당 링크에 위치했을 경우 #006DD7 설정 * /
a:hover {
  color: black;
  text-decoration: none;
} */
</style>
