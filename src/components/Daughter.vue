<template>
  <div>
    <button @click="toValue">点击</button>
  </div>
</template>

<script>
export default {
  name: "Daugther",
  data() {
    return {};
  },
  methods: {
    toValue() {
      this.$emit("receive", "我是子组件传过来的值");
    }
  }
};
</script>

<style lang="scss" scoped></style>
