<template>
  <div class="container">这是一个首页</div>
</template>
<script>
export default {
  mounted() {
    // console.log(1);
    // // console.log(this.axios);
    // this.axios.get("/category", {}, (response) => {
    //   console.log(response);
    //   if (response.status >= 200 && response.status < 300) {
    //     console.log(response.data);
    //   } else {
    //     console.log(response.message);
    //   }
    // });
    console.log(this.axios);
    this.axios.get("/category").then((res) => {
      console.log(res);
      // console.log(this.categoryData);
    });
  },
};
</script>