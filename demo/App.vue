<template>
  <a-layout id="app">
    <a-layout-header class="app-header">wape-ui</a-layout-header>
    <a-layout>
      <a-layout-sider>
        <a-menu
          class="menu"
          mode="inline"
          theme="dark"
          :open-keys.sync="openKeys"
          :default-selected-keys="[menus[0].children[0].key]"
          @select="selectItem"
        >
          <a-sub-menu v-for="item in menus" :key="item.key">
            <div slot="title">
              <a-icon :type="item.iconType" />
              <span>{{item.name}}</span>
            </div>
            <a-menu-item v-for="childItem in item.children" :key="childItem.key">
              <span>{{childItem.name}}</span>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout-content>
        <router-view class="app-page-view" />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
  import menus from './assets/js/menus'

  export default {
    data() {
      return {
        openKeys: [menus[0].key],
        menus
      }
    },
    methods: {
      selectItem({ item, key, selectedKeys }) {
        this.$router.push({
          name: key
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  #app {
    height: 100vh;
  }

  .app-header {
    z-index: 1;
    box-shadow: 0 2px 8px #f0f1f2;
    color: #fff;
    font-size: 30px;
  }

  .app-page-view {
    padding: 20px;
  }
</style>