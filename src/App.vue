<template>
  <div
    id="app"
    class="app"
    :style="{transform:`scale(${scale})`,left:`${this.scaleLeft}px`,top:`${this.scaleTop}px`}"
    ref="app"
  >
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  data() {
    return {
      scale: 1,
      scaleLeft: 0,
      scaleTop: 0
    };
  },
  mounted() {
    this.scaleView();
    window.onresize = this.scaleView;
  },
  methods: {
    scaleView() {
      this.scale = Math.min(
        window.innerWidth / 1920,
        window.innerHeight / 1080
      );
      this.$nextTick(() => {
        this.scaleLeft =
          (window.innerWidth - this.$refs.app.getBoundingClientRect().width) /
          2;
        this.scaleTop =
          (window.innerHeight -
            this.$refs.app.getBoundingClientRect().height) /
          2;
      });
    }
  }
};
</script>
<style lang="scss">
.app {
  position: absolute;
  width: 1920px;
  height: 1080px;
  transform-origin: left top;
  color:#fff;
}
</style>
