<template>
  <div class="flex justify-center items-center">
    <button :type="type">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "submit",
    },
  },
};
</script>

<style></style>
