<template>
  <div 
    class="w-drag"
    :class="{ dragging: dragging, disabled: disabled }"
    :style="style"
    @mousedown="onMouseDown">
    <slot></slot>
  </div>
</template>

<script>
  import { debounce } from '../../utils/utils'

  export default {
    name: 'wDrag',
    props: {
      disabled: Boolean
    },
    data() {
      return {
        dragging: false,
        style: null
      }
    },
    methods: {
      find: debounce(function (event) {
        this.$emit("find", event)
      }),
      onMoving(event) {
        // 更新位置
        const translate3d = `translate(${event.clientX - this.prevX}px, ${event.clientY - this.prevY}px)`
        this.style = { transform: translate3d }
        
        this.$emit("dragging", event)
        
        // 寻找目标元素
        this.find(event)
      },
      onMouseUp(event) {
        // 销毁事件
        document.removeEventListener('mousemove', this.onMoving)
        document.removeEventListener('mouseup', this.onMouseUp)

        // 重置状态
        this.dragging = false
        this.style = { transition: "all .2s ease" }
        document.body.style.cursor = this.prevCursor
        document.body.style.userSelect = this.prevUserSelect

        this.$emit("end", event)
      },
      onMouseDown(event) {
        if (this.disabled) return

        this.$emit("start", event)

        // 监听事件
        document.addEventListener('mousemove', this.onMoving)
        document.addEventListener('mouseup', this.onMouseUp)

        // 更新状态
        this.dragging = true
        this.style = null
        this.prevX = event.clientX
        this.prevY = event.clientY
        this.prevCursor = document.body.style.cursor
        this.prevUserSelect = document.body.style.userSelect
        document.body.style.cursor = 'grabbing'
        document.body.style.userSelect = 'none'
      }
    }
  }
</script>

<style lang="scss">
  .w-drag {
    cursor: grab;

    &.dragging {
      pointer-events: none;
      cursor: grabbing;
    }

    &.disabled {
      cursor: not-allowed;
    }
  }
</style>