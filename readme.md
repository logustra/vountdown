## Vountdown

[![Codecov](https://img.shields.io/codecov/c/github/logustra/vountdown)](https://codecov.io/github/logustra/vountdown?branch=master)
[![Downloads](https://img.shields.io/npm/dm/@logustra/vountdown)](https://npmcharts.com/compare/@logustra/vountdown?minimal=true)
[![Version](https://img.shields.io/npm/v/@logustra/vountdown)](https://www.npmjs.com/package/@logustra/vountdown)
[![Gzip Size](https://img.badgesize.io/https://unpkg.com/@logustra/vountdown/dist/index.umd.js?compression=gzip)](https://unpkg.com/@logustra/vountdown/dist/index.umd.js)
[![Licence](https://img.shields.io/npm/l/@logustra/vountdown)](https://www.npmjs.com/package/@logustra/vountdown)
[![Code Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli)

> A minimalist countdown component for vue.js 2-3

## Getting Started
### NPM

```shell
npm install @logustra/vountdown
```

To make `@logustra/vountdown` work for Vue 2, you need to have `@vue/composition-api` installed.

```shell
npm install @vue/composition-api
```

### CDN
Drop `<script>` inside your HTML file.

Vue 3
```html
<script src="https://cdn.jsdelivr.net/npm/vue@3.2.31"></script>
<script src="https://cdn.jsdelivr.net/npm/@logustra/vountdown"></script>
```

Vue 2
```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>
<script src="https://cdn.jsdelivr.net/npm/@vue/composition-api@1.4.9"></script>
<script src="https://cdn.jsdelivr.net/npm/@logustra/vountdown"></script>
```

## Usage
### Setup
Vue 3
```js
import { createApp } from 'vue'
import Vountdown from '@logustra/vountdown'
import App from './app.vue'

const app = createApp(App)
app.use(Vountdown)
```

Vue 2
```js
import Vue from 'vue'
import CompositionAPI from '@vue/composition-api'
import Vountdown from '@logustra/vountdown'

Vue.use(CompositionAPI)
Vue.use(Vountdown)
```

### Basic Usage
```html
<template>
  <vountdown 
    :time="new Date('Jan 1, 2024').getTime()" 
    v-slot="{ 
      days,
      hours,
      minutes,
      seconds 
    }"
  >
    {{ days }} days {{ hours }} hours {{ minutes }} minutes {{ seconds }} seconds.
  </vountdown>
</template>
```
[Demo →](https://stackblitz.com/edit/vitejs-vite-utq8t4?file=src%2Fcomponents%2FbasicUsage.vue)

### On-demand
```html
<template>
  <button @click="auto = true">
    <vountdown
      :auto="auto"
      :time="10000"
      v-slot="{
        isStart,
        isDone,
        seconds,
      }"
    >
      <template v-if="isStart && !isDone">
        Send again {{ seconds }} seconds later
      </template>
      <template v-else> Send OTP </template>
    </vountdown>
  </button>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const auto = ref(false)

    return {
      auto
    }
  },
}
</script>
```
[Demo →](https://stackblitz.com/edit/vitejs-vite-utq8t4?file=src%2Fcomponents%2FonDemand.vue)

## API
### Props
| Name | Type | Default | Description |
|------|------|---------|-------------|
| tag | `string` | `span` | The tag name of the component root element | 
| auto | `boolean` | `true` | Start countdown automatically |
| time | `number` | `5000` | The time (in milliseconds) to count down from |

### Events
| Name | Parameters | Listen to | Description |
|------|------|---------|-------------|
| start | `(value)` | `@start` | Emitted after the countdown starts | 
| stop | `(value)` | `@stop` | Emitted after the countdown has stopped |
| done | `(value)` | `@done` | Emitted after the  countdown has endded |

### Slots
| Name | Description |
|------|-------------|
| days | Slot to display days | 
| hours | Slot to display hours | 
| minutes | Slot to display minutes | 
| seconds | Slot to display seconds | 
| isStart | Slot to display when the countdown starts | 
| isStop | Slot to display when the countdown has stopped | 
| isDone | Slot to display when the countdown has endded | 

## Cheer me on
If you like my works, you can cheer me on here 😆

&nbsp; &nbsp; 🇮🇩 [Trakteer](https://trakteer.id/logustra/tip)<br>
&nbsp; &nbsp; 🌍 [Ko-Fi](https://ko-fi.com/logustra)<br>

## License
MIT License © 2022 Faizal Andyka