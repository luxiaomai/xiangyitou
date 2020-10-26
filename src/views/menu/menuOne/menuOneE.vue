<template>
  <div>
    <NavBar></NavBar>
    <div class="main">
      <div class="left">
        <p>湖南和立东升置业投资有限公司</p>
        <p>开户行:交通银行岳阳开发区支行</p>
        <p>账户:436899991010003075960</p>
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
      this.$router.push("/menuOneEMain");
    }
  },
  components: {
    NavBar
  }
};
</script>

<style lang="scss" scoped>
.main {
  padding: 20px 15px 10px;
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
    margin-top: 10px;
  }
}
</style>
