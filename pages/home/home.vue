<template>
  <view class="home">
    <view class="count-display">Count: {{ count }}</view>
    <button @click="increment">Increment</button>
    <view class="bottom-line"></view>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.count-display {
  margin-bottom: 20px;
}
</style>
