<template>
  <div class="drag" ref="dragger" :class="{choosing: choosing}">
    <div v-for="item in list" :key="item.id" class="item">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
import Sortable from 'sortablejs'
export default {
  name: 'Drag',
  data() {
    return {
      list: [
        {
          name: 'A',
          id: 0,
        },
        {
          name: 'B',
          id: 1,
        },
        {
          name: 'C',
          id: 2,
        },
        {
          name: 'D',
          id: 3,
        },
      ],
      seletedId: -1,
      choosing: false
    }
  },
  mounted() {
    this.rowDrop()
  },
  methods: {
    // 图片拖动排序
    rowDrop() {
      const list = this.$refs.dragger
      const that = this
      Sortable.create(list, {
        onEnd({ newIndex, oldIndex }) {
          if (that.list.length < 0) return
          that.list.splice(
            newIndex,
            0,
            that.list.splice(oldIndex, 1)[0] //先把选中的项删掉, 然后再插入到新的位置
          )
          let newArray = that.list.slice(0),
            id = that.list[newIndex].id
          that.list = []
          that.$nextTick(function () {
            that.list = newArray
            that.seletedId = id
            that.choosing = false
            console.log(that.list.map((item) => item.name))
          })
        },
        animation: 150,
        chosenClass: 'sortable-chosen',
        onChoose() {
          that.choosing = true
        }, 
        onUnchoose() {
          that.choosing = false
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.drag {
  &.choosing .item::after {
    display: none;
  }
  .item {
    width: 100%;
    height: 40px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-align: center;
    line-height: 40px;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 20px;
      height: 20px;
      right: 14px;
      // background-color: #fff;
      background-image: url('../assets/img/icon/fold.png');
      top: 50%;
      margin-top: -12px;
      background-size: cover;
      position: absolute;
    }

    &.sortable-chosen {
      background: #08f;
      color: #fff;

      &::after {
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        right: 12px;
        // background-color: #fff;
        background-image: url('../assets/img/icon/expand.png');
        top: 50%;
        margin-top: -12px;
        background-size: cover;
        position: absolute;
      }
    }
  }
}
</style>