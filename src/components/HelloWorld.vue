<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { foo } from '@/utils/utils'

onMounted(() => {
  foo('张三', 10)
})

interface Props {
  msg?: string
  labels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two'],
})
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ labels }}</h2>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
