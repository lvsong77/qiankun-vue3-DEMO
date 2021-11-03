import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// createApp(App).use(store).use(router).mount("#app");

const temp: any = window;
const isQiankun = temp.__POWERED_BY_QIANKUN__;

export async function bootstrap() {
  console.log("app bootstraped");
}

function render() {
  createApp(App).use(store).use(router).mount("#app1");
}

export async function mount(props: any) {
  console.log(props);
  render();
}

export async function unmount(props: any) {
  console.log(props);
}

export async function update(props: any) {
  console.log("update props", props);
}

isQiankun || render();
