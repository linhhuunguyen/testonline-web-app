<template>
  <div class="w-[650px] m-auto min-h-screen flex justify-center items-center">
    <div class="w-full">
      <p class="pb-6 text-6 font-semibold">Login</p>
      <TextInput label="Email" class="mb-3" />
      <TextInput type="password" label="Password" />
      <Button variant="default">Login</Button>
    </div>
  </form>
</template>

<script lang="ts">
import { TextInput, Button } from "../components";
export default {
  components: { TextInput, Button },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit: (e) => {
      const { email, password } = this;
      console.log("login", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
