<template>
  <div class="card">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>选择主题</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text"
          >操作按钮</el-button
        > -->
      </div>
      <div v-for="(item, index) in datalist" :key="index + 1" class="text item" :class="{active: item.value === curOption}" @click="onClick(item)">
        {{ item.label }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    datalist: {
      type: Array,
      default: () => [],
    },
    curOption: String
  },
  methods: {
    onClick(val) {
      this.$emit('on-select', val)
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-card__body {
  padding: 10px 0;
}

.item {
  font-size: 16px;
  padding: 10px 16px;
  cursor: pointer;
  transition: 0.2s;
  width: 140px;
  line-height: 1.5;
  transition: text-shadow 0.3s;

  &:hover,
  &.active {
    background: #d3d2d1;
    color: #fff;
    /* font-weight: bold; */
    text-shadow: 0 0 0.65px #fff, 0 0 0.65px #fff;
    transition: 0.3s;
  }
}
</style>