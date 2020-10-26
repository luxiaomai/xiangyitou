<template>
  <div>
    <van-nav-bar
      title="监管账户管理"
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
        label="开户行"
        placeholder="请输入开户行"
      />
      <van-field
        v-model="b"
        input-align="right"
        label="账号"
        placeholder="请输入账号"
      />
      <van-field
        v-model="c"
        input-align="right"
        label="户名"
        placeholder="请输入户名"
      />
      <van-field
        v-model="d"
        input-align="right"
        label="用途"
        placeholder="请输入用途"
      />
      <div class="carList1">
        <div class="left">状态</div>
      </div>
    </van-cell-group>
    <van-radio-group v-model="radio">
      <van-cell title="单选框 1" clickable @click="radio = '1'">
        <template #right-icon>
          <van-radio name="1" />
        </template>
      </van-cell>
      <van-cell title="单选框 2" clickable @click="radio = '2'">
        <template #right-icon>
          <van-radio name="2" />
        </template>
      </van-cell>
    </van-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
      a: "交通银行岳阳开发区支行",
      b: "436899991010003075960",
      c: "湖南和立东升置业投资有限公司",
      d: "报销户",
      e: "100000.0万",
      f: "10.4%",
      g: "珍珠山项目进行全封闭监管，总部基地和高星物流园进行半封闭监管",
      h: "明股实债（东兴物流产业基金—东兴投资通过单一信托全额认购）",
      i: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$toast("保存");
    },
    formatDate(date) {
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      var d = date.getDate();
      m = m < 10 ? "0" + m : m;
      d = d < 10 ? "0" + d : d;
      return y + "-" + m + "-" + d;
    },
    showPopup() {
      this.show = true;
    },
    confirm(value) {
      this.show = false;
      this.showValue = value;
    },
    cancel() {
      this.show = false;
    },
    showPopup1() {
      this.show1 = true;
    },
    confirm1(value) {
      this.show1 = false;
      this.showValue1 = value;
    },
    cancel1() {
      this.show1 = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.carList1 {
  height: 38px;
  line-height: 38px;
  padding: 0 15px;
  background: #fff;
  .left {
    float: left;
    color: #666;
    font-size: 14px;
  }
  .right {
    float: right;
    font-size: 14px;
    color: #333;
    span {
      color: #ff0000;
      font-weight: bold;
    }
  }
}
.btn {
  .left {
    margin: 40px 40px 0 50px;
  }
}
</style>
