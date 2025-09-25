import { createStore } from 'vuex'
import type { App } from 'vue'

// 创建store实例
const store = createStore({
  state: {
    // 在这里定义状态
  },
  mutations: {
    // 在这里定义mutations
  },
  actions: {
    // 在这里定义actions
  },
  modules: {
    // 在这里定义modules
  }
})

// 导出store安装函数
export function setupStore(app: App) {
  app.use(store)
}

// 导出store实例
export default store