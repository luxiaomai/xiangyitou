<template>
  <div>
    <van-nav-bar title="工作台" @click-right="onClickRight">
      <template #right>
        <van-icon name="bars" color="#ff5722" size="24" />
      </template>
    </van-nav-bar>
    <div class="header">
      <div class="top">
        <div class="left">
          <img src="../assets/images/2.png" />
        </div>
        <div class="right">
          <p>欢迎,</p>
          <p>陈丽萍</p>
        </div>
      </div>
    </div>
    <div class="personalNewNav">
      <div class="box-list">
        <router-link to="/upcoming">
          <img src="../assets/images/personalList6.png" />
          <span>待办事项</span>
          <i class="first">8</i>
        </router-link>
        <router-link to="/done">
          <img src="../assets/images/personalList4.png" />
          <span>已办事项</span>
        </router-link>
        <router-link to="/item">
          <img src="../assets/images/personalList.png" />
          <span>我的项目</span>
        </router-link>
        <a @click="onClick">
          <img src="../assets/images/personalList5.png" />
          <span>敬请期待</span>
        </a>
      </div>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "../components/Tabbar";
export default {
  data() {
    return {};
  },
  methods: {
    onClickRight() {
      this.$router.push("/menu");
    },
    onClick() {
      this.$toast("敬请期待");
    }
  },
  mounted() {
    // this.getCheckCode();
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#fff");
  },
  components: {
    Tabbar
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 150px;
  margin: 0 auto 10px;
  background: -webkit-gradient(
    linear,
    10% 0%,
    90% 0%,
    from(#ffc107),
    to(#ff5722)
  );
  .top {
    height: 80px;
    padding: 35px 15px 0;
    .left {
      float: left;
      img {
        width: 80px;
        height: 80px;
      }
    }
    .right {
      height: 60px;
      float: right;
      font-size: 20px;
      color: #fff;
      text-align: center;
      width: 210px;
      padding: 10px 0;
      p {
        height: 30px;
        line-height: 30px;
        text-align: center;
      }
    }
  }
  .bottom {
    padding: 0 15px;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    color: #fff;
    clear: both;
    margin-top: 10px;
    text-align: center;
  }
}
.personalNewNav {
  position: relative;
}

.personalNewNav .box-list {
  width: 100%;
}

.personalNewNav .box-list a {
  display: block;
  float: left;
  width: 33%;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
  position: relative;
  .first {
    background: red;
    width: 16px;
    height: 16px;
    line-height: 16px;
    border-radius: 50%;
    position: absolute;
    top: -6px;
    right: 30px;
    font-size: 12px;
    text-align: center;
    color: #fff;
  }
}

.personalNewNav .box-list a img {
  width: 48px;
  height: 48px;
  display: block;
  margin: 0 auto;
}

.personalNewNav .box-list a span {
  display: block;
  margin-top: 15px;
  font-size: 14px;
  color: #666;
}
</style>
