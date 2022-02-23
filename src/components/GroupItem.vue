<template>
  <ul>
      <GroupItem
        v-for="([key, child]) in Object.entries(item)"
        :item="child"
        :key="key"
      />
  </ul>
</template>

<script>

export default {
  name: 'GroupItem',
  props: {
      item: {
          type: Object
      }
  },
  methods: {
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
</style>
