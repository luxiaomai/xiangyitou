<template>
  <div>
    <van-nav-bar
      title="个人资料修改"
      left-text="返回"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-cell-group>
      <van-field v-model="name" input-align="right" label="用户名" readonly />
      <van-field
        v-model="password"
        input-align="right"
        label="密码"
        placeholder="请输入密码"
      />
      <van-field
        v-model="passwordTrue"
        input-align="right"
        label="密码"
        placeholder="请输入确认密码"
      />
      <van-field
        v-model="name1"
        input-align="right"
        label="姓名"
        placeholder="请输入姓名"
      />
      <van-field
        v-model="call"
        input-align="right"
        label="手机号"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="email"
        input-align="right"
        label="邮箱"
        placeholder="请输入邮箱"
      />
      <van-field
        v-model="text"
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
      name: "chenliping",
      password: "",
      passwordTrue: "",
      name1: "陈丽萍",
      call: "",
      email: "",
      text: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/index");
    },
    onClickRight() {
      this.$toast("保存");
    }
  }
};
</script>

<style lang="scss" scoped></style>
