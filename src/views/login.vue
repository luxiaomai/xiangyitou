<template>
  <div>
    <div class="logo">
      <img src="../assets/images/logo.png" />
    </div>
    <van-field
      type="tel"
      v-model="phoneNum"
      clearable
      border
      left-icon="graphic"
      label="用户名"
      placeholder="请输入用户名"
    />

    <van-field
      type="text"
      v-model="password"
      clearable
      border
      left-icon="lock"
      label="密码"
      placeholder="请输入密码"
    />

    <!-- <div class="loginBox">
      <div class="left" @click="toRegister()">新用户注册</div>
      <div class="right" @click="toForget()">忘记密码</div>
    </div> -->
    <div style="clear:both"></div>
    <van-button
      class="btn"
      type="info"
      color="linear-gradient(to right, #FF9800, #FF5722)"
      @click="commitButton()"
      :disabled="!phoneNum || !password"
      >登录
    </van-button>
  </div>
</template>

<script>
// import { setToken, getCode } from "@/utils/auth";
export default {
  data() {
    return {
      show: true,
      count: "",
      password: "",
      loginName: "",
      phoneNum: ""
    };
  },
  methods: {
    toRegister() {
      this.$router.push("/register");
    },
    toForget() {
      this.$router.push("/forget");
    },
    commitButton() {
      if (!/^1[3|4|5|7|8|9]\d{9}$/.test(this.phoneNum)) {
        this.$toast("手机号码错误");
      } else {
        let phoneNum = this.phoneNum;
        let code = this.sms;
        let loginName = this.phoneNum;
        let loginType = this.loginType;
        let checkCode = this.checkCode;
        let orgId = this.orgId;
        let param = { loginName, code, phoneNum, loginType, checkCode, orgId };
        this.$api.wechatLogin(param).then(res => {
          let data = res.data.data;
          // let token = data.Authorization;
          // setToken(token);
          console.log(data);
          this.$toast({
            message: "登录成功",
            duration: 2000,
            onClose: () => {
              this.$router.push({
                path: "/index"
              });
            }
          });
        });
      }
    }
  },
  mounted() {
    // this.getCheckCode();
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#fff");
  }
};
</script>

<style lang="scss" scoped>
.logo {
  height: auto;
  width: auto;
  margin: 30px auto;
  text-align: center;
  img {
    width: 264px;
    height: 80px;
  }
}
.smsButton {
  border: none;
  color: #008eff;
  font-size: 16px;
}
.wxLogin {
  width: 60px;
  height: 60px;
  margin: 60px auto 0;
  font-size: 14px;
  text-align: center;
  p {
    margin-top: 5px;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
.loginBox {
  font-size: 14px;
  width: 320px;
  margin: 30px auto;
  .left {
    float: left;
  }
  .right {
    float: right;
  }
}
.btn {
  width: 325px;
  height: 45px;
  line-height: 45px;
  border-radius: 5px;
  margin: 0 auto;
  display: block;
  font-size: 18px;
  margin-top: 50px;
}
.van-cell {
  width: 95%;
  font-size: 16px;
  margin-top: 30px;
  color: #333;
  padding: 0.3125rem 0 0.3125rem 0.5rem;
}
.checked {
  margin-left: 0.5rem;
  font-size: 12px;
  color: #333;
  margin-top: 13px;
  span {
    color: #008eff;
  }
}
</style>
