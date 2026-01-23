import { launchTabs } from "./launcher.js";

const methodSelect = document.getElementById("method") as HTMLSelectElement;

(document.getElementById("btn25") as HTMLButtonElement).onclick = () =>
  launchTabs(25, methodSelect.value);

(document.getElementById("btn50") as HTMLButtonElement).onclick = () =>
  launchTabs(50, methodSelect.value);

(document.getElementById("btn100") as HTMLButtonElement).onclick = () =>
  launchTabs(100, methodSelect.value);
