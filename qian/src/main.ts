import './assets/main.css'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// app.component('MyPageHeader', MyPageHeader);
// app.component('EpMenu', EpMenu);

// app.directive(admin.name,admin)

// axios.get("/data/list").then(res => {
//     console.log(res);
//   }).catch(error => {
//     console.log(error);
//   })



app.use(ElementPlus);
app.mount('#app')
