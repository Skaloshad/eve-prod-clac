<template>
  <div>
    <h1>Eve калькулятор</h1>
    <b-button @click="load()">items</b-button>
    <b-list-group>
      <b-list-group-item v-for="([key, value]) in Object.entries(groups).filter(([k, v]) => !v.parentGroupID)" :key="key">
        {{ value.nameID.en }}
        <b-list-group>
          <b-list-group-item v-for="([key2, value2]) in Object.entries(groups).filter(([k, v]) => key == v.parentGroupID)" :key="key2">
            {{ value2.nameID.en }}
            <b-list-group>
              <b-list-group-item v-for="([key3, value3]) in Object.entries(groups).filter(([k, v]) => key2 == v.parentGroupID)" :key="key3">
                {{ value3.nameID.en }}
              </b-list-group-item>
            </b-list-group>
          </b-list-group-item>
        </b-list-group>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
const loader = require('../api/loader')

export default {
  name: 'MainContainer',
  methods: {
    load: async function() {
      this.groups = await loader.load();
    }
  },
  data() {
    return {
      groups: {}
    }
  }
}
</script>

<style scoped>
</style>
