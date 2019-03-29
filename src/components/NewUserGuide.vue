<template>
    <div id='newUserGuide' v-html='homeData'></div>
</template>

<script>
export default {
    name: "NewUserGuide",
    data() {
        return {
            homeData: ''
        }
    },
    methods: {
    getData() {
      this.$axios
        .get("/getstart", {})
        .then(res => {
            let newUserGuide = document.getElementById("newUserGuide")
            console.log(newUserGuide)
            this.homeData = res.data
            // newUserGuide.innerHTML = res.data
        //   console.log(res.data)
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  beforeMount() {
    this.getData();
  }
}
</script>

<style scoped>

#newUserGuide > div.navbar {
    display: none !important;
}
</style>

