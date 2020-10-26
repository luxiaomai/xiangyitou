<template>
  <div>
    <van-nav-bar
      title="监管季报"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="title">珍珠山花园住宅</div>
    <div class="main">
      <div class="list">湖南和立东升“珍珠山花园”项目监管月报</div>
      <div class="list">湖南和立东升“珍珠山花园”项目监管月报</div>
      <div class="list">湖南和立东升“珍珠山花园”项目监管月报</div>
      <div class="list">湖南和立东升“珍珠山花园”项目监管月报</div>
      <div class="list">湖南和立东升“珍珠山花园”项目监管月报</div>
      <div class="list">湖南和立东升“珍珠山花园”项目监管月报</div>
      <div class="list">湖南和立东升“珍珠山花园”项目监管月报</div>
      <div class="list">湖南和立东升“珍珠山花园”项目监管月报</div>
      <div class="list">湖南和立东升“珍珠山花园”项目监管月报</div>
      <div class="list">湖南和立东升“珍珠山花园”项目监管月报</div>
      <div class="list">湖南和立东升“珍珠山花园”项目监管月报</div>
      <div class="list">湖南和立东升“珍珠山花园”项目监管月报</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.push("/index");
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  height: 44px;
  line-height: 44px;
  background: #9e9e9e40;
  text-align: center;
  font-size: 16px;
}
.main {
  background: #fff;
  .list {
    height: 44px;
    line-height: 44px;
    border-bottom: 1px solid #cccccc4f;
    font-size: 12px;
    color: #ff5722;
    text-align: center;
  }
}
</style>
