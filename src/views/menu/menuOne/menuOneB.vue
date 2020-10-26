<template>
  <div>
    <NavBar></NavBar>
    <div class="main">
      <div class="left">
        <p>佛山三盛兰亭房地产有限责任公司</p>
        <p>营业执照:9143102407264952XJ<span>[投资企业]</span></p>
        <p>公司地址:上海市浦东新区竹林路101号陆家嘴基金大厦18层</p>
      </div>
      <div class="right">
        <van-button type="primary" size="small" color="#ff5722" @click="onClick"
          >查看</van-button
        >
      </div>
    </div>
    <div class="main">
      <div class="left">
        <p>佛山三盛兰亭房地产有限责任公司</p>
        <p>营业执照:9143102407264952XJ<span>[投资企业]</span></p>
        <p>公司地址:上海市浦东新区竹林路101号陆家嘴基金大厦18层</p>
      </div>
      <div class="right">
        <van-button type="primary" size="small" color="#ff5722" @click="onClick"
          >查看</van-button
        >
      </div>
    </div>
    <div class="main">
      <div class="left">
        <p>佛山三盛兰亭房地产有限责任公司</p>
        <p>营业执照:9143102407264952XJ<span>[投资企业]</span></p>
        <p>公司地址:上海市浦东新区竹林路101号陆家嘴基金大厦18层</p>
      </div>
      <div class="right">
        <van-button type="primary" size="small" color="#ff5722" @click="onClick"
          >查看</van-button
        >
      </div>
    </div>
    <div class="main">
      <div class="left">
        <p>佛山三盛兰亭房地产有限责任公司</p>
        <p>营业执照:9143102407264952XJ<span>[投资企业]</span></p>
        <p>公司地址:上海市浦东新区竹林路101号陆家嘴基金大厦18层</p>
      </div>
      <div class="right">
        <van-button type="primary" size="small" color="#ff5722" @click="onClick"
          >查看</van-button
        >
      </div>
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
      this.$router.push("/menuOneBMain");
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
  height: 80px;
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
  }
  .right {
    float: right;
    margin-top: 8px;
  }
}
</style>
