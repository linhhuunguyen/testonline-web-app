<template>
  <form @submit.prevent="handleSubmit">
    <div class="w-[650px] m-auto min-h-screen flex justify-center items-center">
      <div
        class="w-full login-form px-3 py-6 sm:!px-6 sm:!py-10 bg-[#000] bg-opacity-20 backdrop-blur-[10px] shadow-lg rounded-2"
      >
        <p class="pb-6 text-6 font-semibold">Login</p>
        <TextInput
          htmlFor="email"
          label="Email"
          v-model="email"
          name="email"
          class="mb-3"
        />
        <TextInput
          htmlFor="password"
          type="password"
          label="Password"
          v-model="password"
          name="password"
          class="mb-4"
        />
        <!-- <Button variant="primary" type="submit">Login</Button> -->
        <button type="submit">link</button>
      </div>
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
