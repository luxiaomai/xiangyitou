<template>
  <div class="hello">
    <p>{{ sonValue }}</p>
  </div>
</template>
<script>
export default {
  name: "Son",
  props: {
    sonValue: {
      type: String,
      default: ""
    }
  }
};
</script>
