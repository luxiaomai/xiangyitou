<template>
  <div>
    <van-nav-bar
      title="任务栏"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-collapse v-model="activeNames">
      <van-collapse-item title="监管项目管理" name="1" size="large">
        <router-link to="/menuOneA">投资方信息</router-link>
        <router-link to="/menuOneB">融资方信息</router-link>
        <router-link to="/menuOneC">项目信息</router-link>
        <router-link to="/menuOneD">资金监管协议</router-link>
        <router-link to="/menuOneE">监管账户管理</router-link>
        <router-link to="/menuOneF">资料交接清单</router-link>
      </van-collapse-item>
      <van-collapse-item title="证照印章管理" name="2" size="large">
        <router-link to="/index">投资方信息</router-link>
        <router-link to="/index">投资方信息</router-link>
        <router-link to="/index">投资方信息</router-link>
        <router-link to="/index">投资方信息</router-link>
      </van-collapse-item>
      <van-collapse-item title="资金计划管理" name="3" size="large">
        <router-link to="/index">投资方信息</router-link>
        <router-link to="/index">投资方信息</router-link>
        <router-link to="/index">投资方信息</router-link>
        <router-link to="/index">投资方信息</router-link>
      </van-collapse-item>
      <van-collapse-item title="收支合同管理" name="4" size="large">
        <router-link to="/index">投资方信息</router-link>
        <router-link to="/index">投资方信息</router-link>
        <router-link to="/index">投资方信息</router-link>
        <router-link to="/index">投资方信息</router-link>
      </van-collapse-item>
      <van-collapse-item title="资金收支管理" name="5" size="large">
        <router-link to="/index">投资方信息</router-link>
        <router-link to="/index">投资方信息</router-link>
        <router-link to="/index">投资方信息</router-link>
        <router-link to="/index">投资方信息</router-link>
      </van-collapse-item>
      <van-collapse-item title="监管报告" name="6" size="large">
        <router-link to="/index">投资方信息</router-link>
        <router-link to="/index">投资方信息</router-link>
        <router-link to="/index">投资方信息</router-link>
        <router-link to="/index">投资方信息</router-link>
      </van-collapse-item>
    </van-collapse>
    <van-button type="primary" color="#ff5722" block style="margin-top: 50px;"
      >系统注销</van-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["0"]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/index");
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  font-size: 14px;
  display: block;
  color: #333;
  margin: 10px 0;
}
</style>
