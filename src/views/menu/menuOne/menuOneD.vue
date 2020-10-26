<template>
  <div>
    <NavBar></NavBar>
    <div class="main">
      <div class="left">
        <p>上海东兴投资控股发展有限公司</p>
        <p>监管字号:博罗县翠华达房地产有限公司</p>
        <p>融资企业:湖南和立东升实业集团有限公司</p>
        <p>融资项目:珍珠山花园住宅</p>
        <p>金额:100000 <span>利率:10.4</span></p>
      </div>
      <div class="right">
        <van-button type="primary" size="small" color="#ff5722" @click="onClick"
          >查看</van-button
        >
      </div>
      <div style="clear: both;"></div>
    </div>
  </div>
</template>

<script>
import NavBar from "../../../components/NavBar";
export default {
  data() {
    return {};
  },
  methods: {
    onClick() {
      this.$router.push("/menuOneDMain");
    }
  },
  components: {
    NavBar
  }
};
</script>

<style lang="scss" scoped>
.main {
  padding: 20px 15px 5px;
  border-bottom: 1px solid #cccccc4f;
  background: #fff;
  .left {
    float: left;
    width: 80%;
    & p:nth-child(1) {
      font-size: 18px;
      font-weight: bold;
      span {
        font-size: 14px;
        color: #ff5722;
        margin-left: 10px;
      }
    }
    & p:nth-child(2) {
      font-size: 14px;
      color: #666;
      margin: 8px 0;
      span {
        font-size: 14px;
        color: #ff5722;
        margin-right: 10px;
      }
    }
    & p:nth-child(3) {
      font-size: 14px;
      color: #666;
    }
    & p:nth-child(4) {
      font-size: 14px;
      color: #666;
      margin: 8px 0;
    }
    & p:nth-child(5) {
      font-size: 14px;
      color: #666;
      margin: 8px 0;
    }
  }
  .right {
    float: right;
    margin-top: 20px;
  }
}
</style>
