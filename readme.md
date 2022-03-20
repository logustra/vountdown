## Vountdown

[![Downloads](https://img.shields.io/npm/dm/@logustra/vountdown)](https://npmcharts.com/compare/@logustra/vountdown?minimal=true)
[![Version](https://img.shields.io/npm/v/@logustra/vountdown)](https://www.npmjs.com/package/@logustra/vountdown)
[![Gzip Size](https://img.badgesize.io/https://unpkg.com/@logustra/vountdown/dist/index.umd.js?compression=gzip)](https://unpkg.com/@logustra/vountdown/dist/index.umd.js)
[![Licence](https://img.shields.io/npm/l/@logustra/vountdown)](https://www.npmjs.com/package/@logustra/vountdown)
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

const app = createApp(...)
app.use(Vountdown)
```

Vue 2
```js
import Vue from 'vue'
import CompositionAPI from '@vue/composition-api'
import Vountdown from '@logustra/vountdown'

Vue.use(CompositionAPI);
Vue.use(Vountdown);
```

### Examples
```html
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
```

```html
<vountdown 
  :time="10000" 
  v-slot="{ seconds }"
>
  {{ seconds }} seconds.
</vountdown>
```

## Cheer me on
If you like my works, you can cheer me on here 😆

&nbsp; &nbsp; 🇮🇩 [Trakteer](https://trakteer.id/logustra/tip)<br>
&nbsp; &nbsp; 🌍 [Ko-Fi](https://ko-fi.com/logustra)<br>

## License
MIT License © 2022 Faizal Andyka