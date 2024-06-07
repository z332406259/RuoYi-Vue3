<template>
  <div class="con">
    <div class="grid-container">
      <div class="mark1">标题标题</div>
      <div class="mark2">2023</div>
      <div class="mark3">12/10</div>

      <div class="mark4">主标题</div>
      <div class="mark5">副标题副标题</div>

      <div class="mark6">PAPER</div>
      <div class="mark7">内容描述内容描述</div>

      <div class="mark8">这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本</div>
      <div class="mark9">这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本</div>
    </div>
  </div>
</template>

<script setup></script>

<style>
html,
.con {
  margin: 0;
  padding: 0;
}

.con {
  display: grid;
  place-content: center;
  height: 100vh;
}

.grid-container {
  background: linear-gradient(135deg, #c7e9fb, #a6defa, #80d4f9, #5bc9f8, #35bef7);
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: repeat(12, minmax(0, 1fr));
  width: 300px;
  aspect-ratio: 3 / 4;
  color: #fff;
}

.mark1 {
  grid-column: 11 / 13;
  grid-row: 1 / 3;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
}

.mark2 {
  grid-column: 9 / 10;
  grid-row: 3 / 4;
  font-size: 12px;
  text-align: center;
}

.mark3 {
  grid-column: 10 / 13;
  grid-row: 3 / 4;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
}

.mark4 {
  grid-column: 1 / 2;
  grid-row: 2 / 4;
  writing-mode: vertical-lr;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 4px;
}

.mark5 {
  grid-column: 2 / 3;
  grid-row: 3 / 6;
  writing-mode: vertical-lr;
  font-size: 12px;
}

.mark6 {
  grid-column: 2 / 11;
  grid-row: 1 / 3;
  font-size: 56px;
  font-weight: 700;
  text-align: center;
}

.mark7 {
  grid-column: 4 / 8;
  grid-row: 3 / 4;
  font-size: 12px;
}

.mark8 {
  grid-column: 1 / 7;
  grid-row: 7 / 9;
  font-size: 12px;
}

.mark8:first-letter {
  font-size: 24px;
  float: left;
}

.mark9 {
  grid-column: 11 / 13;
  grid-row: 8 / 13;
  font-size: 12px;
  writing-mode: vertical-lr;
}
</style>
