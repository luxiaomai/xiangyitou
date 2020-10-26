<template>
  <div>
    <NavBarIndex></NavBarIndex>
    <van-cell-group>
      <van-cell title="监管项目" value="珍珠山花园住宅" is-link />
      <van-cell title="印章名称" value="这里输入印章名称" />
      <van-cell title="印章个数" value="1" />
      <van-cell title="用印日期" value="2020-07-22" is-link />
      <van-cell title="用印事由" value="和立置业员工医保基数调整表" />
      <van-cell title="文件编号" value="0" />
      <van-cell title="合同金额" value="0.00" />
      <van-cell title="用印部门" value="综合部" />
      <van-cell title="用印人" value="彭予" />
      <van-cell title="备注" value="无" />
    </van-cell-group>
    <div class="">
      <van-button type="info" class="left">查看业务收件</van-button>
      <van-button type="info" class="right">查看办理意见</van-button>
    </div>
  </div>
</template>

<script>
import NavBarIndex from "../../components/NavBarIndex";
export default {
  data() {
    return {};
  },
  components: {
    NavBarIndex
  }
};
</script>

<style lang="scss" scoped>
.left {
  margin: 40px 40px 0 50px;
}
</style>
