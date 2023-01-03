<template>
  <div>Home Page</div>
</template>

<script>
export default {
  name:'HomePage',
  data() {
    return {
      count: 0,
    };
  },
  created() {
    console.log(this.$store.state.count)
  }

};
</script>

<style lang="scss" scoped></style>
