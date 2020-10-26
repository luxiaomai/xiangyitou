<template>
  <div>
    <van-nav-bar
      title="项目信息"
      left-text="返回"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-cell-group>
      <van-field
        v-model="a"
        is-link
        input-align="right"
        label="投资企业"
        placeholder="请输入主体名称"
        readonly
      />
      <van-field
        v-model="b"
        input-align="right"
        label="融资企业"
        placeholder="请输入项目名称"
        readonly
        is-link
      />
      <van-field
        v-model="c"
        input-align="right"
        label="融资项目"
        placeholder="请输入项目类型"
        readonly
        is-link
      />
      <van-field
        v-model="d"
        input-align="right"
        label="监管字号"
        placeholder="请输入监管字号"
      />
      <van-field
        v-model="e"
        input-align="right"
        label="融资金额"
        placeholder="请输入融资金额"
      />
      <div class="carList1">
        <div class="left">开始时间</div>
        <div class="right" @click="showPopup()">
          {{
            showValue != ""
              ? formatDate(showValue)
              : formatDate(this.currentDate)
          }}
        </div>
      </div>
      <div class="carList1">
        <div class="left">结束时间</div>
        <div class="right" @click="showPopup1()">
          {{
            showValue1 != ""
              ? formatDate(showValue1)
              : formatDate(this.currentDate)
          }}
        </div>
      </div>
      <van-field
        v-model="f"
        input-align="right"
        label="利率"
        placeholder="请输入利率"
      />
      <van-field
        v-model="g"
        input-align="right"
        label="监管方式"
        placeholder="请输入监管方式"
      />
      <van-field
        v-model="h"
        input-align="right"
        label="融资方式"
        placeholder="请输入融资方式"
      />
      <van-field
        v-model="i"
        input-align="right"
        label="备注"
        placeholder="请输入备注"
      />
    </van-cell-group>

    <van-popup v-model="show" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        @cancel="cancel()"
        @confirm="confirm"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </van-popup>
    <van-popup v-model="show1" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        @cancel="cancel1()"
        @confirm="confirm1"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </van-popup>
    <div class="btn">
      <van-button type="info" class="left">查看业务收件</van-button>
      <van-button type="info" class="right">查看办理意见</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showValue: "",
      show: false,
      showValue1: "",
      show1: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      a: "上海东兴投资控股发展有限公司",
      b: "湖南和立东升实业集团有限公司",
      c: "珍珠山花园住宅",
      d: "",
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
