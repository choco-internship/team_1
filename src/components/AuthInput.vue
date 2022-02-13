<template>
  <div class="wrapper">
    <label class="label" :for="id">{{ label }}</label>
    <input
      class="input"
      :id="id"
      :type="type"
      :placeholder="placeholder"
      @input="$emit('update:value', $event.target.value)"
    />
    <p v-if="isError" class="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    error: {
      type: String,
      required: true,
    },
    isError: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.wrapper {
  max-width: 375px;
  width: 100%;
}

.label {
  font-size: 12px;
  line-height: 16px;
  color: #131113;
  margin-bottom: 4px;
}

.input {
  max-width: 375px;
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #8f8f8f;
  border-radius: 4px;
  font-size: 16px;
  line-height: 20px;
  color: #131113;
  outline: none;
}

.input:focus {
  border-color: #2997ff;
}

.error {
  margin-top: 5px;
  color: #d82222;
  font-size: 13px;
}
</style>
