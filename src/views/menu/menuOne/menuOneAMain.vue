<template>
  <div>
    <van-nav-bar
      title="投资方信息"
      left-text="返回"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-cell-group>
      <van-field
        v-model="a"
        input-align="right"
        label="公司名称"
        placeholder="请输入主体名称"
      />
      <van-field
        v-model="b"
        input-align="right"
        label="营业执照证号"
        placeholder="请输入营业执照证号"
      />
      <van-field
        v-model="d"
        input-align="right"
        label="公司地址"
        placeholder="请输入公司地址"
      />
      <van-field
        v-model="e"
        input-align="right"
        label="联系方式"
        placeholder="请输入公司联系方式"
      />
      <van-field
        v-model="f"
        input-align="right"
        label="备注"
        placeholder="请输入备注"
      />
    </van-cell-group>
    <van-button type="primary" color="#ff5722" block>保存</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: "大业信托有限责任公司",
      b: "",
      c: "",
      d: "陈丽萍",
      e: "",
      f: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$toast("保存");
    }
  }
};
</script>

<style lang="scss" scoped></style>
