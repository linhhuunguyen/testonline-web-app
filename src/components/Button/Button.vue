<template>
  <div class="flex justify-center items-center">
    <button :type="type" class="px-3 py-2 rounded-md text-base min-w-[168px] font-medium btn-default" :class="[variant]" >
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
    variant: {
      type: String,
      validators: value =>
        ['primary', 'default'].includes(value),
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/styles/variables";

.primary {
  background-color: $bg-primary;
  color: #fff;
  border: 1px solid $border-primary;
}
.default {
  background-color: #fff;
  color: $text-primary;
  border: 1px solid $border-primary;
}
</style>
