import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerMicroApps, start } from "qiankun";

createApp(App).use(store).use(router).mount("#app");

registerMicroApps([
  {
    name: "app1",
    entry: "//localhost:7001",
    container: "#container",
    activeRule: "/app1",
  },
  {
    name: "app2",
    entry: "//localhost:7002",
    container: "#container",
    activeRule: "/app2",
  },
]);

start();
