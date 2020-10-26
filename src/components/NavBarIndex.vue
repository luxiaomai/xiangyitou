<template>
  <div class="hello">
    <van-nav-bar
      title=""
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <van-icon name="wap-home" color="#1989fa" size="20" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  name: "NavBarIndex",
  props: {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push("/index");
    }
  }
};
</script>
