<template>
  <form @submit.prevent="handleSubmit">
    <div class="w-[650px] m-auto min-h-screen flex justify-center items-center">
      <div
        class="w-full login-form px-3 py-6 sm:!px-6 sm:!py-10 bg-[#000] bg-opacity-20 backdrop-blur-[10px] shadow-lg rounded-2"
      >
        <p class="pb-6 text-6 font-semibold">Login</p>
        <TextInput
          id="email"
          name="email"
          label="Email"
          @input="email = $event.target.value"
          class="mb-3"
        />

        <TextInput
          id="password"
          name="password"
          type="password"
          label="Password"
          @input="password = $event.target.value"
          class="mb-4"
        />
        <Button variant="primary" type="submit">Login</Button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import cookies from "js-cookie";
import { authenticateService } from "src/services/authenticate.services";
import { TextInput, Button } from "../components";

export default {
  name: "LoginPage",
  components: { TextInput, Button },
  data() {
    return {
      isLoading: false,
      email: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit(event: any) {
      const bodyLogin = {
        email: this.email,
        password: this.password,
      };
      const data = await authenticateService.loginService(bodyLogin);
      this.isLoading = false;
      cookies.set("token", data.token);
    },
  },
};
</script>

<style lang="scss" scoped></style>
