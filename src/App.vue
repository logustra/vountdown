<template>
  <div>
    <Vountdown
      v-slot="{
        isDone,
        days,
        hours,
        minutes,
        seconds
      }"
      :auto="true"
      :time="time"
      tag="div"
    >
      {{ isDone ? 'Done!' : `${days}d ${hours}h ${minutes}m ${seconds}s` }}
    </Vountdown>

    <Vountdown
      v-slot="{
        isDone,
        seconds
      }"
      :auto="auto"
      :time="10000"
      tag="div"
      @start="onStart"
      @stop="onStop"
      @done="onDone"
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

function onStart() {
  // eslint-disable-next-line no-console
  console.log('onStart')
}

function onStop() {
  // eslint-disable-next-line no-console
  console.log('onStop')
}

function onDone() {
  // eslint-disable-next-line no-console
  console.log('onDone')
}
</script>
