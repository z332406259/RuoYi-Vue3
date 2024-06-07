<template>
  <div>
    <div>3d空间</div>

    <div class="container1">
      <div class="item b1"></div>
      <div class="item b2"></div>
      <div class="item b3"></div>
      <div class="item b4"></div>
      <div class="item b5"></div>
      <div class="item b6"></div>
    </div>
  </div>
</template>

<script setup></script>
<style scoped>
.container1 {
  position: relative;
  /* 设置透视距离 物体离人眼的距离 */
  perspective: 200px;
  width: 100px;
  height: 100px;
  background-color: pink;
  transform-style: preserve-3d;
  /* 设置子元素在3d空间显示 */
}
.item {
  position: absolute;
  width: 100px;
  height: 100px;
  background: skyblue;
  transform-origin: 50%;
  /* 形变原点 */
}

.b1 {
  transform: rotateX(-33.5deg) rotateY(45deg) translateY(50px);
}
.b2 {
  transform: rotateX(-33.5deg) rotateY(45deg) translateY(50px);
}
.b3 {
  transform: rotateX(-33.5deg) rotateY(45deg) translateY(50px);
}
.b4 {
  transform: rotateX(-33.5deg) rotateY(45deg) translateY(50px);
}
.b5 {
  transform: rotateX(-33.5deg) rotateY(45deg) translateY(50px);
}
.b6 {
  transform: rotateX(-33.5deg) rotateY(45deg) translateY(50px);
}
</style>
