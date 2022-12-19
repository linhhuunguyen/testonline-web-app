<template>
  <div class="w-[650px] m-auto min-h-screen flex justify-center items-center">
    <div class="w-full">
      <p class="pb-6 text-6 font-semibold">Login</p>
      <TextInput label="Email" class="mb-3" />
      <TextInput type="password" label="Password" />
      <Button>Login</Button>
    </div>
  </div>
</template>

<script lang="ts">
import TextInput from "../components/Input/TextInput.vue";
import Button from "../components/Button/Button.vue";
export default {
  components: { TextInput, Button },
};
</script>

<style lang="scss" scoped></style>
