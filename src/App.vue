<template>
  <div>
    <Vountdown 
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
    </Vountdown>

    <Vountdown 
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
    </Vountdown>

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
import Vountdown from './vountdown.vue'

const time = ref(new Date('Jan 1, 2024').getTime())
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