<p align="center">
  <img src="banner.svg" alt="vue-create-global-state" width="100%" />
</p>

<h1 align="center">vue-create-global-state</h1>

<p align="center">A Vue 3 composition API utility for creating global reactive state that persists and synchronizes across all component instances without prop drilling or external state management libraries.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-create-global-state"><img src="https://img.shields.io/npm/v/vue-create-global-state.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/vue-create-global-state"><img src="https://img.shields.io/npm/dm/vue-create-global-state.svg" alt="npm downloads" /></a>
</p>

## Installation

```bash
npm install vue-create-global-state
```

## Usage

```ts
import { createGlobalState } from 'vue-create-global-state'
import { ref, computed } from 'vue'

export const useGlobalState = createGlobalState(() => {
  const count = ref(0)
  const doubled = computed(() => count.value * 2)
  const increment = () => count.value++
  
  return { count, doubled, increment }
})

const state = useGlobalState()
console.log(state.count.value) // 0

state.increment()
console.log(state.count.value) // 1
console.log(state.doubled.value) // 2
```

## License

MIT

Extracted from [VueUse](https://vueuse.org/) for standalone use.
