import { Container } from "./components/Container/index.js";

const $root = document.querySelector("#root");

const container = Container({ children: "Valter" });

$root.appendChild(container);
