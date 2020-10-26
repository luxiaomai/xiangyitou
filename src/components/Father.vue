<template>
  <div class="father">
    <son :sonValue="son"></son>
    <p>{{ msg }}</p>
    <daughter @receive="receive"></daughter>
  </div>
</template>
<script>
import Daughter from "./Daughter";
import Son from "./Son";
export default {
  components: {
    Daughter,
    Son
  },
  data() {
    return {
      msg: "",
      son: "我是子组件",
      daughter: "我是子组件1"
    };
  },
  methods: {
    receive(val) {
      this.msg = val;
    }
  }
};
</script>
