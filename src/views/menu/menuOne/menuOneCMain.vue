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
        label="公司名称"
        placeholder="请输入主体名称"
      />
      <van-field
        v-model="b"
        input-align="right"
        label="项目名称"
        placeholder="请输入项目名称"
      />
      <van-field
        v-model="c"
        input-align="right"
        label="项目类型"
        placeholder="请输入项目类型"
      />
      <van-field
        v-model="d"
        input-align="right"
        label="占地面积"
        placeholder="请输入占地面积"
      />
      <van-field
        v-model="e"
        input-align="right"
        label="项目总投资"
        placeholder="请输入项目总投资"
      />
      <van-field
        v-model="f"
        input-align="right"
        label="建筑面积"
        placeholder="请输入建筑面积"
      />
      <van-field
        v-model="g"
        input-align="right"
        label="总栋数"
        placeholder="请输入总栋数"
      />
      <div class="carList1">
        <div class="left">开工日期</div>
        <div class="right" @click="showPopup()">
          {{
            showValue != ""
              ? formatDate(showValue)
              : formatDate(this.currentDate)
          }}
        </div>
      </div>
      <div class="carList1">
        <div class="left">竣工日期</div>
        <div class="right" @click="showPopup1()">
          {{
            showValue1 != ""
              ? formatDate(showValue1)
              : formatDate(this.currentDate)
          }}
        </div>
      </div>
      <van-field
        v-model="h"
        input-align="right"
        label="描述"
        placeholder="请输入项目描述"
      />
    </van-cell-group>
    <van-button type="primary" color="#ff5722" block>查看楼栋信息</van-button>
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
      a: "博罗县翠华达房地产有限公司",
      b: "蓝山颐景园",
      c: "房地产-住宅",
      d: "302275.1㎡",
      e: "180000.0万",
      f: "123838.0㎡",
      g: "21",
      h: ""
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
</style>
