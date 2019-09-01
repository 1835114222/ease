<template>
  <div id="abou">
    <div class="row mb-5">
      <div class="col-4">
        <!-- 导航 -->
        <div class="list-group mb-5">
          <router-link tag="li" to="/history" class="nav-link">
            <a class="list-group-item list-group-item-action" href>历史订单</a>
          </router-link>
          <router-link tag="li" to="/contact" class="nav-link">
            <a class="list-group-item list-group-item-action" href>联系我们</a>
          </router-link>
          <router-link tag="li" to="/ordering" class="nav-link">
            <a class="list-group-item list-group-item-action" href>游戏文档</a>
          </router-link>
          <router-link tag="li" to="/delivery" class="nav-link">
            <a class="list-group-item list-group-item-action" href>快递信息</a>
          </router-link>
        </div>
      </div>
      <div class="clo-8">
        <!-- 导航内容 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      title: "关于我们"
    };
  }
};
</script>
<style scoped>
</style>