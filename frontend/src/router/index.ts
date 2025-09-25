import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'

// 定义路由
const routes: Array<RouteRecordRaw> = [
  // 在这里添加你的路由配置
  // 示例：
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: () => import('../views/Home.vue')
  // }
]

// 创建路由器实例
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 导出路由器安装函数
export function setupRouter(app: App) {
  app.use(router)
}

// 导出路由器实例
export default router