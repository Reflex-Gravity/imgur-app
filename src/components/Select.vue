<template>
  <div class="dropdown-wrapper ml-3 mr-3">
    <label>{{label}}</label>
    <select class="dropdown" :name="name" v-model="selectedOption" v-on:change="notify_selection">
      <option
        v-for="option in options"
        v-bind:key="option.value"
        :value="option.value"
        :selected="defaultValue == option.value"
      >
        {{option.name}}
      </option>
    </select>
  </div>
</template>

<script>

export default {
  name: 'Select',
  props: {
    options: Array,
    label: String,
    onChange: String,
    defaultValue: String,
    name: String,
  },
  data() {
    return {
      selectedOption: '',
    };
  },
  methods: {
    notify_selection() {
      this.$parent.$emit(this.onChange, this.selectedOption);
    },
  },
  created() {
    this.selectedOption = this.selected;
  },
};

</script>

<style scoped>

  .dropdown {
    background:  var(--primary);
    color: #fff;
    padding: 5px 10px;
    border: 0;
    outline: none;
    cursor: pointer;
  }

  .dropdown option {
    background: var(--primary);
    color: #fff;
  }

</style>
