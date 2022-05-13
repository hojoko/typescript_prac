import SaySomething from "./saySomthing";

const root: HTMLElement | null = document.getElementById("root");

//インスタンス化
const saySomething = new SaySomething("Hello TypeScript")
saySomething.sayText(root)
