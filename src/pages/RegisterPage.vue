<template>
  <form @submit.prevent="handleRegister">
    <div class="w-[650px] m-auto min-h-screen flex justify-center items-center">
      <div
        class="w-full login-form px-3 py-6 sm:!px-6 sm:!py-10 bg-[#000] bg-opacity-20 backdrop-blur-[10px] shadow-lg rounded-2"
      >
        <p class="pb-6 text-6 font-semibold">Register</p>
        <TextInput
          label="First Name"
          class="mb-3"
          @input="firstName = $event.target.value"
        />
        <TextInput
          label="Last Name"
          class="mb-3"
          @input="lastName = $event.target.value"
        />
        <TextInput
          label="Email"
          class="mb-3"
          @input="email = $event.target.value"
        />
        <TextInput
          type="password"
          label="Password"
          class="mb-4"
          @input="password = $event.target.value"
        />
        <Button variant="primary">Register</Button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { authenticateService } from "src/services/authenticate.services";
import { TextInput, Button } from "../components";
export default {
  name: "RegisterPage",
  components: { TextInput, Button },
  data() {
    return {
      isLoading: false,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async handleRegister(event: any) {
      const bodyRegister = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      };
      await authenticateService.signUp(bodyRegister);
    },
  },
};
</script>

<style lang="scss" scoped></style>
