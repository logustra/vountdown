<template>
  <div>
    <Countdown 
      :auto="true"
      :time="time" 
      tag="div"
      v-slot="{
        isDone,
        days,
        hours,
        minutes,
        seconds
      }"
    >
      {{ isDone ? 'Done!' : `${days}d ${hours}h ${minutes}m ${seconds}s` }}
    </Countdown>

    <Countdown 
      :auto="auto"
      :time="10000" 
      tag="div"
      @start="onStart"
      @stop="onStop"
      @done="onDone"
      v-slot="{
        isDone,
        seconds
      }"
    >
      {{ isDone ? 'Done!' : seconds }}
    </Countdown>

    <button @click="auto = true">
      Start Countdown
    </button>
    <button @click="auto = false">
      Stop Countdown
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Countdown from './components/countdown.vue'

const time = ref(new Date('Jan 5, 2024 15:37:25').getTime())
const auto = ref(false)

function onStart () {
  console.log('onStart')
}

function onStop () {
  console.log('onStop')
}

function onDone () {
  console.log('onDone')
}
</script>