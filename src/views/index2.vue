<template>
  <div class="p-30">
    <div class="flex gap-50">
      <div class="flex-1">
        <div class="flex flex-wrap gap-20">
          <el-card style="max-width: 480px" shadow="hover">
            <div class="flex items-center gap-10 p-15">
              <el-statistic :value="98500">
                <template #title>
                  <div class="mb-20 flex items-center justify-between text-24 font-bold">
                    新增单身
                    <el-tooltip effect="dark" content="昨日新增的单身数量" placement="top">
                      <el-icon style="margin-left: 4px" :size="18">
                        <Warning />
                      </el-icon>
                    </el-tooltip>
                  </div>
                </template>
                <template #suffix>
                  <el-icon style="color: var(--el-color-success)">
                    <CaretTop />
                  </el-icon>
                </template>
              </el-statistic>
              <el-icon :size="80"><StarFilled /></el-icon>
            </div>
          </el-card>
          <el-card style="max-width: 480px" shadow="hover">
            <div class="flex items-center gap-10 p-15">
              <el-statistic :value="98500">
                <template #title>
                  <div class="mb-20 flex items-center justify-between text-24 font-bold">
                    新增会员
                    <el-tooltip effect="dark" content="近7天内(1周)新增的会员数量" placement="top">
                      <el-icon style="margin-left: 4px" :size="18">
                        <Warning />
                      </el-icon>
                    </el-tooltip>
                  </div>
                </template>
                <template #suffix>
                  <el-icon style="color: var(--el-color-success)">
                    <CaretTop />
                  </el-icon>
                </template>
              </el-statistic>
              <el-icon :size="80"><Avatar /></el-icon>
            </div>
          </el-card>
        </div>
        <div class="mt-30 flex gap-20">
          <div class="text-24 font-bold">今日发布人员</div>
          <el-button type="primary">全选1/3</el-button>
          <el-button type="success">下载</el-button>
          <el-button type="danger">删除</el-button>
        </div>
        <div class="mt-20 flex flex-wrap gap-20 p-10">
          <div class="relative" v-for="(item, index) in 5" :key="index">
            <el-checkbox v-model="checked" size="large" class="absolute right-7 top--6" style="transform: scale(1.8)" />
            <div class="absolute bottom-0 right-0 p-5 text-12" style="color: var(--el-color-success)">已发布</div>
            <el-card style="max-width: 480px" shadow="hover">
              <div class="flex items-center gap-20">
                <el-avatar :size="60" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
                <div class="flex-col gap-5">
                  <div class="text-20 font-bold">单身姓名</div>
                  <div class="text-14">编号:Y6087X</div>
                </div>
                <div class="flex-1"></div>
              </div>
            </el-card>
          </div>
        </div>
      </div>
      <div class="h-full flex-col">
        <el-card shadow="hover">
          <div class="max-w-480 flex-col items-center gap-20 py-30">
            <el-avatar :size="80" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />

            <div>联系方式:1556889900</div>
            <div class="font-bold">星冶红娘妍妍</div>
            <div class="font-bold">号段:A</div>
          </div>
        </el-card>
        <div class="mb-20 mt-30 text-24 font-bold">会员到期提醒</div>

        <el-card shadow="hover" class="flex-1">
          <div class="w-full flex-col gap-10">
            <div class="" v-for="(item, index) in 5" :key="index">
              <span class="font-bold">单身XX</span>
              9899会员即将到期 2024-01-02
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checked = ref(false)
</script>

<style scoped lang="scss">
// :deep(.relative .el-checkbox.el-checkbox--large .el-checkbox__inner) {
//   width: 25px;
//   height: 25px;
// }
</style>
