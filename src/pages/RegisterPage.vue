<template>
  <div class="w-[650px] m-auto min-h-screen flex justify-center items-center">
    <div
      class="w-full login-form px-3 py-6 sm:!px-6 sm:!py-10 bg-[#000] bg-opacity-20 backdrop-blur-[10px] shadow-lg rounded-2"
    >
      <p class="pb-6 text-6 font-semibold">Register</p>
      <TextInput label="Email" class="mb-3" />
      <TextInput type="password" label="Password" class="mb-4" />
      <TextInput type="password" label="Confirm Password" class="mb-4" />
      <Button variant="primary">Register</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { TextInput, Button } from "../components";
export default {
  name: "RegisterPage",
  components: { TextInput, Button },
};
</script>

<style lang="scss" scoped></style>
