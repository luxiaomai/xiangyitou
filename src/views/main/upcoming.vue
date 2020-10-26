<template>
  <div>
    <NavBar></NavBar>
    <div class="main">
      <div class="left">
        <p>珍珠山花园住宅<span>(印章使用)</span></p>
        <p><span>退</span>业务号:20200520314158</p>
        <p>申请企业:湖南和立东升实业集团有限公司</p>
      </div>
      <div class="right">
        <van-button type="primary" size="small" color="#ff5722"
          >审批</van-button
        >
      </div>
    </div>
    <div class="main">
      <div class="left">
        <p>珍珠山花园住宅<span>(印章使用)</span></p>
        <p><span>退</span>业务号:20200520314158</p>
        <p>申请企业:湖南和立东升实业集团有限公司</p>
      </div>
      <div class="right">
        <van-button type="primary" size="small" color="#ff5722"
          >审批</van-button
        >
      </div>
    </div>
    <div class="main">
      <div class="left">
        <p>珍珠山花园住宅<span>(印章使用)</span></p>
        <p><span>退</span>业务号:20200520314158</p>
        <p>申请企业:湖南和立东升实业集团有限公司</p>
      </div>
      <div class="right">
        <van-button type="primary" size="small" color="#ff5722"
          >审批</van-button
        >
      </div>
    </div>
    <div class="main">
      <div class="left">
        <p>珍珠山花园住宅<span>(印章使用)</span></p>
        <p><span>退</span>业务号:20200520314158</p>
        <p>申请企业:湖南和立东升实业集团有限公司</p>
      </div>
      <div class="right">
        <van-button type="primary" size="small" color="#ff5722"
          >审批</van-button
        >
      </div>
    </div>
    <div class="main">
      <div class="left">
        <p>珍珠山花园住宅<span>(印章使用)</span></p>
        <p><span>退</span>业务号:20200520314158</p>
        <p>申请企业:湖南和立东升实业集团有限公司</p>
      </div>
      <div class="right">
        <van-button type="primary" size="small" color="#ff5722"
          >审批</van-button
        >
      </div>
    </div>
    <div class="main">
      <div class="left">
        <p>珍珠山花园住宅<span>(印章使用)</span></p>
        <p><span>退</span>业务号:20200520314158</p>
        <p>申请企业:湖南和立东升实业集团有限公司</p>
      </div>
      <div class="right">
        <van-button type="primary" size="small" color="#ff5722"
          >审批</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar";
export default {
  data() {
    return {};
  },
  components: {
    NavBar
  }
};
</script>

<style lang="scss" scoped>
.main {
  padding: 20px 15px 0;
  height: 80px;
  border-bottom: 1px solid #cccccc4f;
  .left {
    float: left;
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
        font-size: 12px;
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
