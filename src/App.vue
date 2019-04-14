<template>
  <div id="app" :class="$style.wrap">
    <div id="nav">
      <a-button type="primary" @click="add">Button</a-button>
      <p>{{a}}{{res}}</p>
      <Icon type="plus"/>
      <input v-model="a">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { Icon } from "ant-design-vue";
export default {
  components: {
    Icon: Icon
  },
  computed: {
    res() {
      return "res" + "a" + "b" + "bb" + "c" + this.a;
    }
  },
  methods: {
    add() {
      this.a++;
    }
  },
  data() {
    return {
      a: 1
    };
  }
};
</script>

<style module lang="less">
@import url("./App.less");
:global(#app) {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
:global(#nav) {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
  }
  :global(.router-link-exact-active) {
    color: #42b983;
  }
}
</style>
