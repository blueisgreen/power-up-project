import { createApp } from "vue";
import { camelCase, upperFirst } from "lodash";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)
const app = createApp(App)
  .use(store)
  .use(router)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )
  app.component(componentName, componentConfig.default || componentConfig)
});

app.mount("#app");
