<template>
  <div>
    <NavBar></NavBar>
    <div class="main">
      <div class="left">
        <p>蓝山颐景园</p>
        <p>开发企业:博罗县翠华达房地产有限公司</p>
        <p>建筑面积(㎡):302275.1</p>
        <p>总投资(万):180000.0</p>
      </div>
      <div class="right">
        <van-button type="primary" size="small" color="#ff5722" @click="onClick"
          >查看</van-button
        >
      </div>
    </div>
    <div class="main">
      <div class="left">
        <p>蓝山颐景园</p>
        <p>开发企业:博罗县翠华达房地产有限公司</p>
        <p>建筑面积(㎡):302275.1</p>
        <p>总投资(万):180000.0</p>
      </div>
      <div class="right">
        <van-button type="primary" size="small" color="#ff5722" @click="onClick"
          >查看</van-button
        >
      </div>
    </div>
    <div class="main">
      <div class="left">
        <p>蓝山颐景园</p>
        <p>开发企业:博罗县翠华达房地产有限公司</p>
        <p>建筑面积(㎡):302275.1</p>
        <p>总投资(万):180000.0</p>
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
      this.$router.push("/menuOneCMain");
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
  height: 90px;
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
  }
  .right {
    float: right;
    margin-top: 20px;
  }
}
</style>
