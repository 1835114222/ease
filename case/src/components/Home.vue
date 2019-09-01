<template>
  <div id="Home">
    <h2>{{title}}</h2>
    <button @click="goto" class="go">Go To Last!</button>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      title: "Home"
    };
  },
  methods: {
    goto() {
      // this.$router.go(-1); //跳转到上次浏览的界面
      // this.$router.replace("/menu"); //跳转到指定地址
      // this.$router.replace({ name: "adminLink" }); //指定跳转到页面
      this.$router.push("/login"); //通过push进行跳转
    }
  }
};
</script>
<style scoped>
</style>