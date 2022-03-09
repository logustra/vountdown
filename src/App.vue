<template>
  <Countdown 
    :time="time" 
    v-slot="{
      days,
      hours,
      minutes,
      seconds
    }"
  >
    {{ days }}d {{ hours }}h {{ minutes }}m {{ seconds }}s
  </Countdown>
  <!-- <Countdown 
    :time="time" 
    v-slot="{ foo }"
  >
   {{ foo }}
  </Countdown> -->
</template>

<script lang="ts" setup>
import Countdown from './components/countdown.vue'

// const time = new Date('Jan 5, 2024 15:37:25').getTime()
const time = 600000
</script>