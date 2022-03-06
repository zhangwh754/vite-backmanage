<!--
 * @Author: zhang
 * @Date: 2022-03-05 23:20:20
 * @LastEditTime: 2022-03-06 10:42:46
 * @LastEditors: zhang
 * @Description: 主页
 * @FilePath: \vue-backmanage\src\pages\index.vue
-->

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
const obj: object = { msg: '你好', label: ['1', '2'] }
</script>

<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <HelloWorld v-bind:="obj" />
</template>

<style scoped lang="scss"></style>
