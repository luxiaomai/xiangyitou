<template>
  <div class="hello">
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入您要搜索的内容"
        input-align="center"
      />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  name: "NavBar",
  props: {},
  methods: {
    onClickLeft() {
      this.$router.push("/index");
    }
  }
};
</script>
