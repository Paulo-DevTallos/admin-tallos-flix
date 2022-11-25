<template>
	<input
		v-bind="$attrs"
		v-model="inputValue"
		@blur="handleValue"
	/>
</template>

<script>
export default {
	name: 'BaseInput',
	emit: ['handleValue'],
	props: {
		currentVal: String,
	},
  data() {
    return {
			inputValue: ''
		}
  },
  methods: {
    handleValue(newValue) {
      this.$emit('handleValue', newValue)
    }
  },
  watch: {
    currentVal(value) {
      this.inputValue = value
    },
  },
};
</script>
