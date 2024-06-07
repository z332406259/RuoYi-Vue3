<template>
  <div class="con">
    <div
      v-for="(item, index) in list"
      :key="index"
      :class="item.className"
      :style="`background-color: ${item.backgroundColor};grid-row:${item.gridRow};grid-column: ${item.gridColumn};`"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
function randomColor() {
  return '#' + Math.random().toString(16).substr(-6)
}

let row = 1
let col = 1
const list = ref([])
for (let i = 0; i < 28; i++) {
  const div = {}
  div.className = 'photo-item'
  div.backgroundColor = randomColor()
  div.gridRow = `${row} / ${row + 2}`
  div.gridColumn = `${col} / ${col + 2}`

  list.value.push(div)
  col += 2
  if (col > 11) {
    row += 1
    col = row % 2 === 0 ? 2 : 1
  }
}
</script>

<style scoped>
.con {
  margin: 0;
  padding: 0;
  background: #f2f3f5;
  overflow: auto;
}

.con {
  display: grid;
  grid-template-columns: repeat(12, 100px);
  grid-auto-rows: 100px;
  place-content: center;
  gap: 6px;
  height: 100vh;
}

.photo-item {
  width: 200px;
  height: 200px;
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
}
</style>
