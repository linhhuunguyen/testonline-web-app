<template>
  <div>
    <label v-if="label" :for="id" class="block text-4 font-semibold !mb-1">
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="updateInput"
      class="border w-full p-1 outline-none rounded-md"
    />
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    id: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    methods: {
      updateInput(event) {
        this.$emit("update:modelValue", event.target.value);
      },
    },
  },
};
</script>
