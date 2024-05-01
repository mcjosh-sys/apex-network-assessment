import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import VueClickAway from 'vue3-click-away'
import App from './App.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import TabComponent from './components/ui/TabComponent.vue'
import TabTrigger from './components/ui/TabTrigger.vue'
import TabContent from './components/ui/TabContent.vue'
import SettingsIcon from './components/icons/SettingsIcon.vue'
import DotIcon from './components/icons/DotIcon.vue'
import BadgeComponent from './components/ui/BadgeComponent.vue'



const app = createApp(App)

app.use(VueClickAway)


app.component("HeadingComponent", HeaderComponent)
app.component("TabComponent", TabComponent)
app.component("TabTrigger", TabTrigger)
app.component("TabContent", TabContent)
app.component("BadgeComponent", BadgeComponent)
app.component("DotIcon", DotIcon)
app.component("SettingsIcon", SettingsIcon)

app.mount('#app')
