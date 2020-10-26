<template>
  <div>
    <van-tabbar
      v-model="active"
      active-color="#ff5722"
      inactive-color="#999"
      route
    >
      <van-tabbar-item replace to="/index">
        <span>首页</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.active : icon.inactive"
        />
      </van-tabbar-item>
      <van-tabbar-item replace to="/upcoming">
        <span>待办</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon1.active : icon1.inactive"
        />
      </van-tabbar-item>
      <van-tabbar-item replace to="/item">
        <span>监管报告</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon3.active : icon3.inactive"
        />
      </van-tabbar-item>
      <van-tabbar-item replace to="/my">
        <span>我的</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon2.active : icon2.inactive"
        />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  data() {
    return {
      active: 0,
      icon: {
        active: require("../assets/images/nav2-1.png"),
        inactive: require("../assets/images/nav2.png")
      },
      icon1: {
        active: require("../assets/images/nav1-1.png"),
        inactive: require("../assets/images/nav1.png")
      },
      icon2: {
        active: require("../assets/images/nav-1.png"),
        inactive: require("../assets/images/nav.png")
      },
      icon3: {
        active: require("../assets/images/nav3-1.png"),
        inactive: require("../assets/images/nav3.png")
      }
    };
  }
};
</script>
