import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// setup vue-router
import router from './routers/index.ts'

// import Icons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)

app.mount('#app')