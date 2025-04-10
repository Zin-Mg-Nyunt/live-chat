import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/global.css"
import { auth } from './firebase/config'

let app;
auth.onAuthStateChanged(() => { // auth နဲ့ချိတ်ပြီးမှ vue component တွေ mount လုပ်စေဖို့
    if (!app) { // initial အနေနဲ့ တစ်ကြိမ်သာ mount လုပ်စေဖို့
        app = createApp(App).use(router).mount('#app')
    }
})
